import React from 'react';
import Table from '../Table/Table';
import Commands from '../Commands/Commands'
import RobotBrain from '../../Logic/RobotBrain';
import './Stage.css';

export default class Stage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.tableWidth = 5;
    this.tableHeight = 5;
    this.robotBrain = new RobotBrain(this.tableWidth, this.tableHeight);
    this.onPlace = this.onPlace.bind(this);
    this.onLeft = this.onLeft.bind(this);
    this.onRight = this.onRight.bind(this);
    this.onMove = this.onMove.bind(this);
  }

  /**
   *
   * @param x {string | number}
   * @param y {string | number}
   * @param orientation {string}
   */
  onPlace({ x, y, orientation}) {
    this.robotBrain.x = x;
    this.robotBrain.y = y;
    this.robotBrain.orientation = orientation;
    this.forceUpdate();
  }

  onLeft() {
    this.robotBrain.turnLeft();
    this.forceUpdate();
  }

  onRight() {
    this.robotBrain.turnRight();
    this.forceUpdate();
  }

  onMove() {
    this.robotBrain.move();
    this.forceUpdate();
  }

  render() {
    return (
      <div className="stage">
        <Table
          robotBrain={this.robotBrain}
          width={this.tableWidth}
          height={this.tableHeight}
        />
        <Commands
          robotBrain={this.robotBrain}
          onPlace={this.onPlace}
          onLeft={this.onLeft}
          onRight={this.onRight}
          onMove={this.onMove}
        />
      </div>
    );
  }
}

