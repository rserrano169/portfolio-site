import React, {Component} from "react";
import _ from "lodash";

class TextBlock extends Component {
  constructor(props) {
    super(props);
    this.state = _.merge({
      style: {
        fontSize: 22,
        margin: 'auto',
        padding: '30px 10px 0 10px',
        width: '50%',
      },
    }, this.props);
  }

  render() {
    return(
      <div style={this.state.style}>{this.state.text}</div>
    );
  }
}
export default TextBlock;