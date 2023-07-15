import React, { Fragment } from "react";
import datas from '../../assets/data/logements.json';
import { useParams } from "react-router-dom";
import Error from "../error";


// Cette function va permettre d'afficher les informations sur un logement spécifique.
function FicheLogement() {

    // On utilise useParams de react-router-dom pour récupérer le paramètre id de l'URL
    const {id} = useParams();

    // Recherche les informations qui correspondent à l'identifiant
    const logement = datas.find( data => data.id === id)
    return (
        logement ?
        // Si un logement correspondant est trouvé, les éléments affichent l'identifiant (logement.id) et le titre (logement.title).
            <Fragment>
                <div>{logement.id}</div>
                <div>{logement.title}</div>
            </Fragment>
            // Sinon, elle affiche un composant <Error/>.
            :
            <Error/>
    )
}

export default FicheLogement