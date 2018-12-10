import React from 'react';
import Remarkable from 'remarkable';
import {Link} from 'react-router';

// tutorial4.js
module.exports = React.createClass({
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },
  render: function() {
    return (
      <div className="object">
        <h2 className="objectDescription">
          {this.props.description}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
        <Link to={'/' + this.props.id}>Edit</Link>
      </div>
    );
  }
});