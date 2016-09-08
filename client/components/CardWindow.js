import React, {Component} from 'react';
import schedule from 'node-schedule';

export default class StandUp extends Component{
  componentWillMount() {
    var j = schedule.scheduleJob({hour: 18, minute: 45}, function(){
      console.log('Playing music');
      playMusic();
    });
  }
  render() {
    return <h3> Stand Up for your rights at 3:15 </h3>
  }
}

function playMusic() {
  let marley = new Audio('GetUpStandUp.mp3');

  marley.play();
}



