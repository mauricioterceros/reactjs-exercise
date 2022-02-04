import React, { Component} from 'react';
import { connect } from 'react-redux';
import './App.css';

const mapStateToProps = (state, ownProps) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => {
  return {
    attempted: (payload) => {
      
    },
  }
};

class App extends Component {
  state = {
    users: {
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        <h1>
          Response here!
        </h1>
      </div>
    ); 
  }
}

export default App;
