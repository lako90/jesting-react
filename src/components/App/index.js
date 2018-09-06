import React, { Component } from "react";
import { Button } from 'react-bootstrap';

import Gift from '../Gift';

class App extends Component {
  constructor() {
    super();

    this.state = { gifts: [] };
  }

  addGift = () => {
    const { gifts } = this.state;
    const ids = gifts.map(({ id }) => id);
    const maxId = Math.max(...ids, 0);

    gifts.push({ id: maxId + 1 });

    this.setState({ gifts });
  }

  render() {
    const { gifts } = this.state;

    return (
      <div>
        <h2>{'Gift Giver'}</h2>

        <div className={'gift-list'}>
          {gifts.map(gift => <Gift />)}
        </div>

        <Button
          className={'btn-add'}
          onClick={this.addGift}
        >
          {'Add gift'}
        </Button>
      </div>
    );
  }
}

export default App;