import React from "react";
import './style.scss';


function Error() {
    return (
       <div className="error">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="">Retourner sur la page d’accueil</a>
       </div>
    )
}

export default Error