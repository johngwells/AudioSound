import React, { Component } from 'react';

// ToneJS is another synthesis Engine to use
// NexusUI - Music ui elements for design

// const startButton = document.querySelector('.start');

const audioContext = new(window.AudioContext || window.webkitAudioContext)();
const LFO = audioContext.createOscillator();
const VCA = audioContext.createGain();
const oscillator = audioContext.createOscillator();

// connections
LFO.connect(VCA.gain);
oscillator.connect(VCA);
VCA.connect(audioContext.destination);

// set frequency
LFO.frequency.value = 3;

// types: sine, sawtooth, square, triangle
oscillator.type = 'sine';

// detune: should set to zero and control pitch with knob or slider
oscillator.detune.value = -1000;

// volume
VCA.gain.value = 0.2;

// start oscillators
LFO.start(0);
oscillator.start(0);

// Stop oscillators: (currentTime + num) is amount of seconds before stopping
oscillator.stop(audioContext.currentTime + 20);
class AudioSound extends Component {
  constructor() {
    super();
    this.state = {

    };
    // this.oscillator needs to be defined in order to changeOsc osc.type waveform
    this.oscillator = oscillator;
    this.changeOsc = this.changeOsc.bind(this);

  }
  
  changeOsc() {
    const { oscillator, typeSelector } = this;
    oscillator.type = typeSelector.value;
  }
  
  render() {
    return (
      <div>
        <p>NOTE:the sound has an LFO thats modulating up & down</p>
        <p>Select one of the four waveforms provided!</p>
        <div className="knobs">
          <select onChange={this.changeOsc} ref={s => this.typeSelector = s}>
            <option value='sine'>sine</option>
            <option value='triangle'>triangle</option>
            <option value='sawtooth'>sawtooth</option>
            <option value='square'>square</option>
          </select>
        </div>
      </div>
    );
  }
}

export default AudioSound;