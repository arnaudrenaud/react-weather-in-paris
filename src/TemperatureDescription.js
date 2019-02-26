import React, { Component } from 'react';

export default class TemperatureDescription extends Component {
  render() {
    if (this.props.temperature < 10) {
      return 'froid';
    } else if (this.props.temperature < 20) {
      return 'doux';
    } else {
      return 'chaud';
    }
  }
}

// export default ({ temperature }) => {
//   return temperature < 10 ? 'froid' : temperature < 20 ? 'doux' : 'chaud';
// };
