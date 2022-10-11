import React, {Component} from "react";

class TextBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        fontSize: 22,
        padding: 20,
        width: '50%',
      },
      text: this.props.text,
    };
  }

  render() {
    return(
      <div style={this.state.style}>{this.state.text}</div>
    );
  }
}
export default TextBlock;