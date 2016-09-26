import React, {Component} from 'react';
import schedule from 'node-schedule';

var j;

export default class StandUp extends Component{
  constructor(props) {
    super(props)

    this.state = {
      hour: 0,
      minute: 0,
      displayHour: null,
      displayMinute: null
    }

    handleTimeChange = handleTimeChange.bind(this)
    handleSubmit = handleSubmit.bind(this)
  }

  render() {
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          handleSubmit()
        }}>
          <label> Select Time : </label>
          <input type="time" onChange={e => handleTimeChange(e.target.value, 'h')}/>
          <button type="submit"> Save changes! </button>
        </form>
        {this.state.displayHour ?
        <span> Song will play at {this.state.displayHour} : {this.state.displayMinute} {this.state.displayStr} every day!</span>
        :
        <span> Select a time to play music at every day!</span>
        }
      </div>
    )
  }
}

function handleTimeChange(time, mode) {
  let newTime = time.split(':')

  this.setState({ hour: Number(newTime[0]), minute: Number(newTime[1]) })
}
function playMusic() {
  let marley = new Audio('GetUpStandUp.mp3');

  marley.play();
}

function militaryConverter(hour) {
  if(hour < 12) {
    return {hour: hour, str: 'AM'}
  } else if(hour === 12) {
    return {hour: hour, str: 'PM'}
  } else {
    let newHour = hour - 12
    return {hour: newHour, str: 'PM'}
  }
}

function handleSubmit() {
  if(j) {
    j.cancel()
  }
  let displayObj = militaryConverter(this.state.hour)

  console.log('displayobj', displayObj)

  this.setState({ displayHour: displayObj.hour, displayMinute: this.state.minute, displayStr: displayObj.str })
  j = schedule.scheduleJob({ hour: this.state.hour, minute: this.state.minute }, function(){
    console.log('Playing music');
    playMusic();
  });
}


