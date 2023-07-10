// Librairies
import React from "react";
import './style.scss';

// Components
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <Link to={`/fiche-logement/${props.card.id}`}>
            <div>
                {props.card.title}
                <img src={props.card.cover} />
            </div>
        </Link>
    )
}   

export default Card;