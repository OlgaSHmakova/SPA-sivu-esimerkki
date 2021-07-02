import React, { Component } from "react";
import PalauteLista from './PalauteLista';

const palauteData = ["p1", "p2", "..."];
 
class Palautteet extends Component {
  render() {
    return (
      <div>
        <h2>Palautteet</h2>
        <p>Anna meille palautetta työstämme tänne:</p>
        <PalauteLista palautteet={palauteData}/>
      </div>
    );
  }
}
 
export default Palautteet;