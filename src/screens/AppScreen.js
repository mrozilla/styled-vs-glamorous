// =============================================================================
// import
// =============================================================================

// react
import React, { Component } from 'react';

// styles
import '../components/ButtonCSS.css';

// components
import Main from '../components/Main';
import ButtonStyled from '../components/ButtonStyled';
import ButtonGlamorous from '../components/ButtonGlamorous';

// =============================================================================
// component
// =============================================================================

export default class App extends Component {
  state = {
    isDoingStuff: false,
  };

  handleClick = () => {
    this.setState({
      isDoingStuff: !this.state.isDoingStuff,
    });
  };

  render() {
    const isDoingStuffClass = this.state.isDoingStuff
      ? 'button--isDoingStuff'
      : '';
    const buttonClass = `button button--large ${isDoingStuffClass}`;
    return (
      <Main>
        <button className={buttonClass} onClick={this.handleClick}>
          CSS button
        </button>
        <ButtonStyled
          color="purple"
          size="large"
          isDoingStuff={this.state.isDoingStuff}
          onClick={this.handleClick}
        >
          Styled button
        </ButtonStyled>
        <ButtonGlamorous
          color="hotpink"
          size="medium"
          isDoingStuff={this.state.isDoingStuff}
          onClick={this.handleClick}
        >
          Glamorous button
        </ButtonGlamorous>
      </Main>
    );
  }
}
