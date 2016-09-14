import React, {Component} from 'react';
import schedule from 'node-schedule';

var j;

export default class StandUp extends Component{
  constructor(props) {
    super(props)

    this.state = {
      hour: 0,
      minute: 0
    }

    handleTimeChange = handleTimeChange.bind(this)
    handleSubmit = handleSubmit.bind(this)
  }

  componentDidUpdate() {

  }
  render() {
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          handleSubmit()
        }}>
          <label> Hour : </label>
          <input type="time" onChange={e => handleTimeChange(e.target.value, 'h')}/>
          <button type="submit"> Save changes! </button>
        </form>
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


function handleSubmit() {
  if(j) {
    j.cancel()
  }

  j = schedule.scheduleJob({ hour: this.state.hour, minute: this.state.minute }, function(){
    console.log('Playing music');
    playMusic();
  });
}


