import datas from '../../assets/data/logements.json';
import Card from '../card';
import './style.scss';

// Définition du composant "CardList"
function CardList() {
    return (
        <div className="card-list"> {/* Div avec la classe "card-list" servant de conteneur pour les cartes */}
            {/* Utilisation de la méthode "map" pour itérer sur chaque élément du tableau "datas" */}
            {datas.map((card, index) => { 
                // Pour chaque élément (card) dans le tableau, retourner un composant "Card" avec ses informations (card) et une clé unique (index) 
                return <Card key={index} card={card}></Card>
            })}
        </div>
    )
}

export default CardList; // Export du composant CardList pour pouvoir l'utiliser ailleurs dans l'application