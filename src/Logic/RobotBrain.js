

export default class RobotBrain {
  constructor(tableWidth = 5, tableHeight = 5) {
    this.tableWidth = tableWidth;
    this.tableHeight = tableHeight;
    this._x = null;
    this._y = null;
    this._orientation = null;
  }

  /**
   *
   * @return {Readonly<{N: string, S: string, E: string, W: string}>}
   * @constructor
   */
  static get ORIENTATIONS() {
    return Object.freeze({
      N: 'N',
      S: 'S',
      E: 'E',
      W: 'W'
    });
  }

  /**
   *
   * @return {string | null}
   */
  get orientation() { return this._orientation; }

  /**
   *
   * @return {number | null}
   */
  get x() { return this._x; }

  /**
   *
   * @return {number | null}
   */
  get y() { return this._y; }

  /**
   *
   * @param value {string}
   */
  set orientation(value) { if (this.isValidOrientation(value)) this._orientation = value.toUpperCase(); }

  /**
   *
   * @param value {string | number}
   */
  set x(value) { if (this.isValidX(value)) this._x = +value; }

  /**
   *
   * @param value {string | number}
   */
  set y(value) { if (this.isValidY(value)) this._y = +value; }

  /**
   *
   * @return {string}
   */
  get report() {
    return (this.canReceiveCommands && `${this.x}, ${this.y}, ${this.orientation}`) || '';
  }

  /**
   *
   * @return {boolean}
   */
  get canReceiveCommands() {
    return !!this.orientation && this.x !== null && this.y !== null;
  }

  /**
   *
   * @param value {string}
   * @return {boolean}
   */
  isValidOrientation(value) {
    return value.toUpperCase() in this.constructor.ORIENTATIONS;
  }

  /**
   *
   * @param value {string | number}
   * @return {boolean}
   */
  isValidX(value) {
    return this.isValidCoordinate('x', value);
  }

  /**
   *
   * @param value {string | number}
   * @return {boolean}
   */
  isValidY(value) {
    return this.isValidCoordinate('y', value);
  }

  /**
   *
   * @param coord {string}
   * @param value {string | number}
   * @return {boolean}
   */
  isValidCoordinate(coord, value) {
    const size = coord === 'x' ? this.tableWidth : this.tableHeight;
    const valueAsNumber = +value;
    return value !== '' &&
      Math.round(valueAsNumber) === valueAsNumber &&
      valueAsNumber >= 0 &&
      valueAsNumber < size;
  }

  turnLeft() {
    this.orientation = orientationSwitchLeft[this.orientation];
  }

  turnRight() {
    this.orientation = orientationSwitchRight[this.orientation];
  }

  move() {
    let { x, y, orientation } = this;
    ({
      [orientation === this.constructor.ORIENTATIONS.N]: () => y += 1,
      [orientation === this.constructor.ORIENTATIONS.S]: () => y -= 1,
      [orientation === this.constructor.ORIENTATIONS.E]: () => x += 1,
      [orientation === this.constructor.ORIENTATIONS.W]: () => x -= 1,
    }.true());
    this.x = x;
    this.y = y;
  }
}

const orientationSwitchLeft = {
  [RobotBrain.ORIENTATIONS.N]: RobotBrain.ORIENTATIONS.W,
  [RobotBrain.ORIENTATIONS.W]: RobotBrain.ORIENTATIONS.S,
  [RobotBrain.ORIENTATIONS.S]: RobotBrain.ORIENTATIONS.E,
  [RobotBrain.ORIENTATIONS.E]: RobotBrain.ORIENTATIONS.N
};

const orientationSwitchRight = {
  [RobotBrain.ORIENTATIONS.N]: RobotBrain.ORIENTATIONS.E,
  [RobotBrain.ORIENTATIONS.E]: RobotBrain.ORIENTATIONS.S,
  [RobotBrain.ORIENTATIONS.S]: RobotBrain.ORIENTATIONS.W,
  [RobotBrain.ORIENTATIONS.W]: RobotBrain.ORIENTATIONS.N
};
