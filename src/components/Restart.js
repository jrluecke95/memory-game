import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class Restart extends Component {
  render() {
    return (
      <Button color='primary' onClick={this.props.restart}>Restart</Button>
    )
  }
}
