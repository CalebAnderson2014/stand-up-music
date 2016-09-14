import React, { Component } from 'react';

function generateTimes() {
  let times = [];
  for(let i = 0; i <= 23; i++) {
    times.push(i)
  }
  return times
}
export default class TimeSelector extends Component {
  render() {
    return (
      <div>
        <label> Hour : </label>
        <select>
          {
            generateTimes().forEach(time => <option value={time}>{time}</option>)
          }
        </select>
      </div>
    )
  }
}
