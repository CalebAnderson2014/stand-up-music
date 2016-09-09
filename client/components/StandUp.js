import React, {Component} from 'react';
import schedule from 'node-schedule';

export default class StandUp extends Component{
  componentWillMount() {
    var j = schedule.scheduleJob({hour: 15, minute: 15}, function(){
      console.log('Playing music');
      playMusic();
    });
  }
}

function playMusic() {
  let marley = new Audio('GetUpStandUp.mp3');

  marley.play();
}



