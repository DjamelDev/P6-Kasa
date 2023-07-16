import ratingGrey from "../../assets/images/rating-grey.png";
import ratingRed from "../../assets/images/rating-red.png";
import "./style.scss";

function Rating({rate}) {
    const getRatingStars = (rating) => {
        // Création d'un tableau
        const stars = [];
        // La boucle "for" itère 5 fois, créant ainsi cinq étoiles. À chaque itération, la variable "i" représente l'indice de l'étoile.
        for (let i = 0; i < 5; i++) { 
            // Si "i" est inférieur à "rating", cela signifie que l'étoile doit être colorée en rouge, donc "starClass" est définie sur "ratingRed". Sinon, l'étoile doit être grise, donc "starClass" est définie sur "ratingGrey".
            const starClass = (i < rating) ? ratingRed : ratingGrey;
            // une balise "img" est ajoutée au tableau "stars" avec : "src" qui reçoit la valeur de "starClass" (soit l'image grise, soit l'image rouge), "key" qui est défini sur l'indice "i" pour aider à l'identification des éléments dans le tableau, et "className" qui reçoit la valeur de "starClass" pour appliquer les classes CSS appropriées.
            stars.push(<img src={starClass} alt='rating' key={i} className={starClass} />);
        }
        return stars; /* Une fois la boucle terminée, la fonction "getRatingStars" retourne le tableau "stars" contenant les éléments JSX représentant les étoiles.*/
    };

    return (
        <div className='rating'>
            {/* la fonction "getRatingStars(rate)" est appelée pour afficher les étoiles correspondant à la note passée en param. */}
            {getRatingStars(rate)}
        </div>
        
    )
}

export default Rating