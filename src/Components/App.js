import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Common/Header'
export class App extends Component {
 

  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
 children: PropTypes.object.isRequired
};

export default App;

