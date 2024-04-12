import React from "react";
import perfilErick from "../assets/images/Perfil Erick.jpg";
import "../Styles/blockInfoMain.css";


function BlockInfoMain() {
  return (
    <div className="row" id="rowMainBlock">
      <div className="col-md-6">
        <p id="aboutMeMessage">Sobre Mi</p>
        <h1>Hola, Soy Erick Ayala</h1>
        <h5>
          Desarrollador Full Stack especializado en desarrollo ágil, mi objetivo
          principalmente es buscar nuevas oportunidades para mejorar mis
          trabajos.
        </h5>
        <div id="rowButtons">
          <button type="button" className="btn btn-dark">
            Descargar mi CV
          </button>
          <button
            type="button"
            id="btnContactWithMe"
            className="btn btn-success btn-sm"
          >
            Contactate conmigo
          </button>
        </div>
      </div>
      <div className="col-md-6 text-center">
        <img alt="Foto de perfil" className="img-profile" src={perfilErick} />
      </div>
    </div>
  );
}

export default BlockInfoMain;
