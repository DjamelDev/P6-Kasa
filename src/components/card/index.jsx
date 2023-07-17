import './style.scss';
// Import du composant "Link" depuis "react-router-dom" pour créer un lien de navigation
import { Link } from 'react-router-dom';

// Définition du composant "Card" qui affiche les informations d'une carte (logement)
function Card(props) {
    return (
        <Link to={`/fiche-logement/${props.card.id}`}> {/* Utilisation du composant "Link" pour créer un lien de navigation */}
            <div className="card"> 
                <img src={props.card.cover} /> {/* Affichage de l'image en utilisant l'URL de la propriété "cover" dans "props.card" */}
                <h2 className="title-card">{props.card.title}</h2> {/* Titre de la carte en utilisant la propriété "title" dans "props.card" */}
            </div>
        </Link>
    )
}   

export default Card; // Export du composant Card pour pouvoir l'utiliser ailleurs dans l'application