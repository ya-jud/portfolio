// 'use strict';

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return (
//       <button onClick={() => this.setState({ liked: true }) }>
//         Like
//       </button>
//     );
//   }
// }

// let domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(<LikeButton />, domContainer);

import React from 'react';

export default class TestComponent extends React.Component {
  render(){
    return (
      <h1>Привет, мир!</h1>,
      document.getElementById('root')
    );
  }
}
