import React, {Component} from 'react';
import schedule from 'node-schedule';

export default class StandUp extends Component{
  componentWillMount() {
    var j = schedule.scheduleJob({hour: 18, minute: 56}, function(){
      console.log('Playing music');
      playMusic();
    });
  }
  render() {
    return <h3> Stand Up for your rights at 6:56 </h3>
  }
}

function playMusic() {
  let marley = new Audio('GetUpStandUp.mp3');

  marley.play();
}



