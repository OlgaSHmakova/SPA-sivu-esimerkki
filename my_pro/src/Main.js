import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Etusivu from "./Etusivu";
import Rekisterointi from "./Rekisterointi";
import Ajanvaraus from "./Ajanvaraus";
import Palautteet from "./Palautteet";
import Yhteys from "./Yhteys";
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Perus Single Page Application (SPA)</h1>
            <ul className="header">
              <li><NavLink to="/etusivu">Etusivu</NavLink></li>
              <li><NavLink to="/rekisteroi">Rekisetröinti</NavLink></li>
              <li><NavLink to="/ajanvaraus">Ajanvaraus</NavLink></li>
              <li><NavLink to="/palautteet">Palautteet</NavLink></li>
              <li><NavLink to="/yhteys">Yhteys</NavLink></li>
            </ul>
            <div className="content">
              <Route path="/etusivu" component={Etusivu}/>
              <Route path="/rekisteroi" component={Rekisterointi}/>
              <Route path="/tarina" component={Ajanvaraus}/>
              <Route path="/palautteet" component={Palautteet}/>
              <Route path="/yhteys" component={Yhteys}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;