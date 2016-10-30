import React from 'react';
import IdeaList from './IdeaList.jsx';

class Home extends React.Component {
  render() {
    return (
      <div>
        <IdeaList {...this.props} />
      </div>
    );
  }
}

export default Home;
