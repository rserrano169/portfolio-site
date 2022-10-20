import React, {Component} from "react";
import _ from "lodash";

class TextBlock extends Component {
  constructor(props) {
    super(props);
    this.state = _.merge({
      style: {
        div: {
          fontSize: 22,
          margin: 'auto',
          padding: '30px 10px 0 10px',
          width: '50%',
        },
        span: {
          cursor: 'pointer',
        },
      },
    }, this.props);
  }

  handlePointerDown = () => {
    window.open(this.state.href, '_blank');
  }

  render() {
    const innerHtml = this.state.href
      ? <span
          onPointerDown={this.handlePointerDown}
          style={this.state.style.span}
        >
          {this.state.text}
        </span>
      : this.state.text;

    return(
      <div style={this.state.style.div}>
        {innerHtml}
      </div>
    );
  }
}
export default TextBlock;