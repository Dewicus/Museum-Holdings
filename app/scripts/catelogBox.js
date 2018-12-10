import React from 'react';
import $ from 'jquery';

import CatelogList from './catelogList';
import CatelogForm from './catelogForm';
import { API_URL, POLL_INTERVAL } from './global';

module.exports = React.createClass({
    getInitialState: function() {
        return {data: [], _isMounted: false};
    },
    loadObjectsFromServer: function() {
        if (this.state._isMounted) {
            $.ajax({
                url: API_URL,
                dataType: 'json',
                cache: false,
            })
                .done(function (result) {
                    this.setState({data: result});
                }.bind(this))
                .fail(function (xhr, status, errorThrown) {
                    console.error(API_URL, status, errorThrown.toString());
                }.bind(this));
        }
    },
    // I think we should remove this one
    handleObjectsSubmit: function(object) {
        var objects = this.state.data;
        object.id = Date.now();
        var newObjects = objects.concat([object]);
        this.setState({data: newObjects});
        $.ajax({
            url: API_URL,
            dataType: 'json',
            type: 'POST',
            data: object,
        })
         .done(function(result){
             this.setState({data: result});
         }.bind(this))
         .fail(function(xhr, status, errorThrown) {
             this.setState({data: objects});
             console.error(API_URL, status, errorThrown.toString());
         }.bind(this));
    },
    componentDidMount: function() {
        this.state._isMounted = true;
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, POLL_INTERVAL);
    },
    componentWillUnmount: function() {
        // Reset the isMounted flag so that the loadCommentsFromServer callback
        // stops requesting state updates when the commentList has been unmounted.
        // This switch is optional, but it gets rid of the warning triggered by
        // setting state on an unmounted component.
        // See https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
        this.state._isMounted = false;
    },
    render: function() {
        return (
            <div className="catelogBox">
                <h1>Museum Catelog</h1>
                <CatelogList data={this.state.data} />
                <CatelogForm onObjectSubmit={this.handleObjectSubmit} />
            </div>
        );
    }
});
