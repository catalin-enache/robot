import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';


export default class Table extends React.Component {

  /**
   *
   * @param y {number}
   * @param x {number}
   * @return {ReactElement}
   */
  renderRobot(y, x) {
    const { robotBrain } = this.props;
    const rotation =
      robotBrain.orientation === robotBrain.constructor.ORIENTATIONS.E ? 90 :
      robotBrain.orientation === robotBrain.constructor.ORIENTATIONS.S ? 180 :
      robotBrain.orientation === robotBrain.constructor.ORIENTATIONS.W ? 270 :
        0;
    if (x === robotBrain.x && y === robotBrain.y) {
      return <div style={{ transform: `rotate(${rotation}deg)`, color: 'white' }}>^</div>
    }
    return <div>*</div>;
  }

  render() {
    const { width, height } = this.props;

    return (
      <div className="table">
        <div className="table-squares">{
          Array.from({ length: height }).map((_, row) => {
            return (
              <div className='table-row' key={row}>{
                Array.from({ length: width }).map((_, col) => {
                  return (<div className='table-col' style={{ width: `${100 / width}%` }} key={col}>{
                    this.renderRobot(height - row - 1, col)}
                  </div>);
                })
              }</div>);
          })
        }</div>
      </div>
    );
  }
}

Table.propTypes = {
  robotBrain: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

