import React, { Component } from "react";
 
class Etusivu extends Component {
  render() {
    return (
        
      <div className = "kirjautuminen">
       
        <h2>Kirjautuminen</h2><br/>
        <form action="/action_page.php">
        <label for="fname">Käyttäjänimi</label>
        <input type="text"/><br/>
        <label for="passw">Salasana</label>
        <input type="password"/><br/>
        <input type="submit" value="Kirjaudu"/>
        </form>

        
        

      </div>
    );
  }
}
 
export default Etusivu;