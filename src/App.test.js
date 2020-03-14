import React from 'react';
import RobotBrain from './Logic/RobotBrain';

test('RobotBrain', () => {
  const robotBrain = new RobotBrain();
  expect(robotBrain.canReceiveCommands).toEqual(false);
  robotBrain.x = 0;
  robotBrain.y = 0;
  robotBrain.orientation = 'S';
  expect(robotBrain.canReceiveCommands).toEqual(true);
  expect(robotBrain.report).toEqual('0, 0, S');
  robotBrain.move();
  expect(robotBrain.report).toEqual('0, 0, S');
  robotBrain.turnLeft();
  expect(robotBrain.report).toEqual('0, 0, E');
  robotBrain.move();
  expect(robotBrain.report).toEqual('1, 0, E');
});
