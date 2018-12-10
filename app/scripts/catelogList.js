import React from 'react';
import Object from './object.js';

// tutorial2.js
module.exports = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(object) {
      return (
        <Object id={object.id} description={object.description} key={object.id}>
          {comment.text}
        </Object>
      );
    });
    return (
      <div className="catelogList">
        {objectNodes}
      </div>
    );
  }
});
