import React, { Fragment } from "react";
import datas from '../../assets/data/logements.json';

import { useParams } from "react-router-dom";
import Error from "../error";

function FicheLogement() {
    //Recuperation id url
    const {id} = useParams();

    // Recherche les informations qui correspondent à l'ident
    const logement = datas.find( data => data.id === id)
    return (
        logement ?
            <Fragment>
                <div>{logement.id}</div>
                <div>{logement.title}</div>
            </Fragment>
            :
            <Error/>
    )
}

export default FicheLogement