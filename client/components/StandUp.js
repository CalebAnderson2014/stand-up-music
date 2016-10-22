import React, {Component} from 'react';
import schedule from 'node-schedule';

let j;
let marley = new Audio('GetUpStandUp.mp3');
let luda = new Audio('StandUp.m4a');
let champions = new Audio('StandUpForTheChampions.mp3')
let playlist = [
  {title: "Get up, stand up - Bob Marley", audio: marley},
  {title: "Stand up - Ludacris", audio: luda},
  {title: "Stand up for the champions - Right said Fred", audio: champions}
];

export default class StandUp extends Component{
  constructor(props) {
    super(props)

    this.state = {
      hour: 0,
      minute: 0,
      displayHour: null,
      displayMinute: null,
      selectedSong: playlist[0]
    }

    handleTimeChange = handleTimeChange.bind(this)
    handleSubmit = handleSubmit.bind(this)
    handleSongChange = handleSongChange.bind(this)
    playMusic = playMusic.bind(this)
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
        <select onChange={handleSongChange}>
          {generateList()}
        </select>
        {this.state.displayHour ?
        <span> {this.state.displaySongTitle} will play at {this.state.displayHour}:{this.state.displayMinute} {this.state.displayStr} every day!</span>
        :
        <span> Select a time to play music at every day!</span>
        }
      </div>
    )
  }
}

function handleSongChange(event) {
  let newTitle = event.target.value

  playlist.forEach(song => {
    if(song.title === newTitle) this.setState({ selectedSong: song })
  })
}

function generateList() {
  return playlist.map(song => <option value={song.title} key={song.title}>{song.title}</option>)
}

function handleTimeChange(time, mode) {
  let newTime = time.split(':')

  this.setState({ hour: Number(newTime[0]), minute: Number(newTime[1]) })
}
function playMusic() {
  this.state.selectedSong.audio.play();
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
  //put a 0 in front of numbers < 10
  let minute = this.state.minute
  if(minute < 10) minute = "0" + minute
  this.setState({ displaySongTitle: this.state.selectedSong.title, displayHour: displayObj.hour, displayMinute: minute, displayStr: displayObj.str })
  j = schedule.scheduleJob({ hour: this.state.hour, minute: this.state.minute }, function(){
    console.log('Playing music');
    playMusic();
  });
}
