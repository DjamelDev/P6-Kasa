import { useState } from 'react';
import arrowPrev from '../../assets/images/arrow-prev.png';
import arrowNext from '../../assets/images/arrow-next.png';
import styles from './style.scss';

// Définition du composant "Slideshow" avec les propriétés "pictures" (tableau d'images) et "picturesLength" (nombre total d'images)
function Slideshow({ pictures, picturesLength }) {
    // hook "useState" pour gérer l'index de l'image courante dans le tableau
    const [index, setIndex] = useState(0);

    // Fonction pour afficher l'image précédente dans le slideshow
    const prevImg = (index) => {
        // Si l'index est supérieur à 0, décrémenter l'index
        // Sinon, mettre l'index à la dernière image du tableau
        index > 0 ? setIndex(index - 1) : setIndex((index = pictures.length - 1))
    };

    // Fonction pour afficher l'image suivante dans le slideshow
    const nextImg = (index) => {
        // Si l'index est inférieur à picturesLength - 1, incrémenter l'index
        // Sinon, mettre l'index à la première image du tableau
        index < picturesLength - 1 ? setIndex(index + 1) : setIndex((index = 0))
    };

    // Si le nombre d'images dans le tableau est égal à 1, afficher simplement l'image sans flèches de navigation
    if (picturesLength === 1) {
        return (
            <div className={styles.carrousel_container}>
                <img
                    className={styles.slide}
                    src={pictures[index]}
                    alt="Visuel de l'appartement"
                    key={`Slideshow-${index}`}
                />
            </div>
        );
    }
    // Si le nombre d'images dans le tableau est supérieur à 1, afficher l'image courante avec les flèches de navigation
    else if (picturesLength > 0) {
        return (
            <div className={styles.carrousel_container}>
                <img
                    className={styles.slide}
                    src={pictures[index]}
                    alt="Visuel de l'appartement"
                    key={`Slideshow-${index}`}
                />
                <div className={styles.arrow_container}>
                    {/* Bouton pour afficher l'image précédente lorsqu'il est cliqué */}
                    <button className={styles.prev} onClick={() => prevImg(index)}>
                        <img
                            src={arrowPrev}
                            alt='Flèche gauche'
                        />
                    </button>
                    {/* Bouton pour afficher l'image suivante lorsqu'il est cliqué */}
                    <button className={styles.next} onClick={() => nextImg(index)}>
                        <img
                            src={arrowNext}
                            alt='Flèche droite'
                        />
                    </button>
                </div>
                {/* Affichage du numéro de l'image courante et le nombre total d'images */}
                <p className={styles.number}>
                    {index + 1} / {picturesLength}
                </p>
            </div>
        )
    }
};

export default Slideshow; // Export du composant Slideshow pour pouvoir l'utiliser ailleurs dans l'application