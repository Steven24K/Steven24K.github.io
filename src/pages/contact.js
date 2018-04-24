import React from "react";
import LinkButton from "../components/button";

export default () => (
  <div>
    <h1>Contact</h1>

    <div>

      <h2>U kunt contact opnemen over het volgende:</h2>
      <ul>
        <li>Gedetaileerde CV opvragen</li>
        <li>Stage plekken/opdrachten</li>
        <li>Werk opdrachten</li>
        <li>(ICT) Bijbaantjes</li>
        <li>Figuratie opdrachten en film rollen altijd welkom 😉</li>
      </ul>

      <h3>Staat uw reden voor contact opnemen hier niet bij? Twijfel dan niet en stuur mij een E-Mail!</h3>
 
      <LinkButton to="mailto:info@stevenkoerts.nl" text="Stuur een E-Mail" color="#ddda21"/>


    </div>

  </div>
);