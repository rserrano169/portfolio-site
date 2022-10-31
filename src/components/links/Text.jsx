import React, {Component} from 'react';
import styled from 'styled-components';

const underlineColorHover = '#B9983E';
const underlineColorUnvisited = 'rgba(87,67,96,0.5)';

const StyledA = styled.a`
  border-bottom-color: ${underlineColorUnvisited};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  cursor: pointer;
  
  &:hover {
    border-bottom-color: ${underlineColorHover};
  }
`;

class Text extends Component {
  constructor(props) {
    super(props);

    this.state = {
      href: this.props.href,
      target: '_blank',
      text: this.props.text,
    };
  }

  render() {
    return (
      <StyledA
        href={this.state.href}
        target={this.state.target}
      >
        {this.state.text}
      </StyledA>
    );
  }
}

export default Text;