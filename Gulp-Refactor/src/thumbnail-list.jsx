var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
    render: function() {
        var list = this.props.parameterList.map(function(parameters) {
            return <Thumbnail {...parameters} />
        });

        return <div>
            {list}
        </div>
    }
});
