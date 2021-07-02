import React, { Component } from "react";
 
class Rekisterointi extends Component {
  render() {
    return (
        
      <div className = "rekisteri">
       
        <h2>Rekisteröinti</h2><br/>
        <form action="/action_page.php">
        <label for="fname">Etunumi</label><br/>
        <input type="text"/><br/><br/>
        <label for="sname">Sukunimi</label><br/>
        <input type="text"/><br/><br/>
        <label for="age">Ikä</label><br/>
        <input type="text"/><br/><br/>
        <label for="phone">Puhelin</label><br/>
        <input type="text"/><br/><br/>
        <label for="email">Sähköposti</label><br/>
        <input type="text"/><br/><br/>
        <p>Haluan vastaanottaa tietoja </p>
        <label for="value1">Sähköposti</label>
        <input type="checkbox" name="rastiruutuun"/><br/>
        <label for="value2">Puhelinsoitto</label>
        <input type="checkbox" name="rastiruutuun"/><br/>
        <label for="value3">Puhelin tekstiviesti</label>
        <input type="checkbox" name="rastiruutuun"/><br/><br/>
        <p>Keksi käyttäjänimi ja salasana</p>
        <label for="nick">Käyttäjänimi</label><br/>
        <input type="text"/><br/><br/>
        <label for="passw">Salasana</label><br/>

        <input type="password"/><br/><br/>
        <input type="submit" value="Rekisteröi"/>
        </form>

        
        

      </div>
    );
  }
}
 
export default Rekisterointi;