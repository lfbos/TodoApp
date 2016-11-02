var React = require('react');

var Todo = React.createClass({
	render: function() {
		var {id, text} = this.props;
		return (
			<div>
				{text}
			</div>
		);
	}

});

module.exports = Todo;
