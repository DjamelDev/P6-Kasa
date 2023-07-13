// Librairies
import React from "react";
import './style.scss';
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <Link to={`/fiche-logement/${props.card.id}`}>
            <div className="experience">
                <img src={props.card.cover} />
                <h2 className="title-card">{props.card.title}</h2>
            </div>
        </Link>
    )
}   

export default Card;