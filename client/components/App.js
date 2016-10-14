import React from 'react';
require('../../assets/css/bootstrap.min.css');
require('../../assets/css/hallooou.css');
require('../../assets/css/font-awesome.min.css');

import NavigationBar from './layout/NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends React.Component {
  render() {
    return (
        <div>
          <NavigationBar />
              {this.props.children}
        </div>
    );
  }
}
export default App;