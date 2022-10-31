import React, {Component} from 'react';
import styled from 'styled-components';

import {StyledP as SectionStyledP} from './Section.jsx';

const StyledP = styled(SectionStyledP)`
  ${(props) => props.isFirst ?  '' : 'padding-top: 0;'}
  text-align: center;
`;

class Bottom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      children: this.props.children,
      isFirst: this.props.isFirst,
    };
  }

  render() {
    return <StyledP isFirst={this.state.isFirst}>{this.state.children}</StyledP>;
  }
}

export default Bottom;