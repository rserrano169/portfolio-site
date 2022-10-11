import React, {Component} from "react";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      },
      text: props.text,
    };
  }

  render() {
    return(
      <div style={this.state.style}>
        {this.props.children[0]}
        {this.props.children[1]}
      </div>
    );
  }
}

export default Section;