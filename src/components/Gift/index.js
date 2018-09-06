import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  Panel,
} from 'react-bootstrap';

class Gift extends Component {
  constructor() {
    super();

    this.state = {
      person: '',
      present: '',
    };
  }

  changePerson = () => {
    this.setState({ person: this.inputPerson.value });
  }

  changePresent = () => {
    this.setState({ present: this.inputPresent.current.value });
  }

  render() {
    return (
      <Panel>
        <Form>
          <FormGroup>
            <FormControl
              // type={'text'}
              // placeholder={'Person'}
              className={'input-person'}
              // inputRef={(ref) => { this.inputPerson = ref }}
              // onChange={this.changePerson}
            />
            {/* <FormControl
              type={'text'}
              placeholder={'Present'}
              className={'input-present'}
              inputRef={this.inputPresent}
              onChange={this.changePresent}
            /> */}
          </FormGroup>
        </Form>
      </Panel>
    );
  }
}

export default Gift;
