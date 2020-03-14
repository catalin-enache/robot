import React from 'react';
import PropTypes from 'prop-types';
import './Commands.css';


export default class Commands extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '',
      y: '',
      orientation: '',
    };
    this.onPlace = this.onPlace.bind(this);
    this.onLeft = this.onLeft.bind(this);
    this.onRight = this.onRight.bind(this);
    this.onMove = this.onMove.bind(this);
  }

  onChange(name, evt) {
    const val = evt.target.value;
    this.setState({
      [name]: val
    });
  }

  onPlace() {
    if (!this.hasError) {
      this.props.onPlace(this.state)
    }
  }

  onLeft() {
    this.props.onLeft();
  }

  onRight() {
    this.props.onRight();
  }

  onMove() {
    this.props.onMove();
  }

  get robotBrain() {
    return this.props.robotBrain;
  }

  get xHasError() {
    return !this.robotBrain.isValidX(this.state.x);
  }

  get yHasError() {
    return !this.robotBrain.isValidY(this.state.y);
  }

  get orientationHasError() {
    return !this.robotBrain.isValidOrientation(this.state.orientation);
  }

  get hasError() {
    return this.xHasError || this.yHasError || this.orientationHasError;
  }

  render() {
    const robotCanReceiveCommands = this.robotBrain.canReceiveCommands;

    return (
      <div className="commands">
        <div className="input-fields">
          <div className="row">
            <button onClick={this.onPlace} disabled={this.hasError}>Place</button>
            <input data-has-error={this.xHasError} onChange={this.onChange.bind(this, 'x')} />
            <input data-has-error={this.yHasError} onChange={this.onChange.bind(this, 'y')} />
            <input data-has-error={this.orientationHasError} onChange={this.onChange.bind(this, 'orientation')} />
          </div>
          <div className="row">
            <button disabled={!robotCanReceiveCommands} onClick={this.onLeft}>Left</button>
            <button disabled={!robotCanReceiveCommands} onClick={this.onRight}>Right</button>
            <button disabled={!robotCanReceiveCommands} onClick={this.onMove}>Move</button>
            <div className="report">{this.robotBrain.report || '-'}</div>
          </div>
        </div>
      </div>
    );
  }
}

Commands.propTypes = {
  robotBrain: PropTypes.object.isRequired,
  onPlace: PropTypes.func.isRequired,
  onLeft: PropTypes.func.isRequired,
  onRight: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired
};

