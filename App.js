// anton/src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { setUser, logOutUser } from './Actions';

function App({ user, setUser, logOutUser }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold mb-4">Social Media Marketplace</h1>
        <p className="text-lg">
          Welcome to the best platform for buying and selling social media accounts.
        </p>
        {user ? (
          <div>
            <p>User: {user.name}</p>
            <button onClick={() => logOutUser()}>Log Out</button>
          </div>
        ) : (
          <button onClick={() => setUser({ name: 'Anton' })}>Set User</button>
        )}
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  setUser,
  logOutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
