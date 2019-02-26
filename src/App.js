import React, { Component } from 'react';
import axios from 'axios';
import TemperatureDescription from './TemperatureDescription';

class App extends Component {
  state = {
    temperature: null,
  };

  componentDidMount() {
    axios
      .get(
        'http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&APPID=b931ed617e0cf08353ced5dbc4aff024&units=metric'
      )
      .then(response =>
        this.setState({ temperature: Math.floor(response.data.main.temp) })
      );
  }

  render() {
    if (this.state.temperature === null) return <p>Loading…</p>;
    return (
      <div>
        <p>
          {`Température actuellement à Paris: ${this.state.temperature}°C `}
          (<TemperatureDescription temperature={this.state.temperature} />)
        </p>
      </div>
    );
  }
}

export default App;
