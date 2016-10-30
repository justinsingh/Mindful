import React from 'react';
import Navbar from './Navbar.jsx';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="background">
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    );
  }
}

export default Main;
