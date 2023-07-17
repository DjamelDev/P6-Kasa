import arrow from '../../assets/images/arrow.png'
import { useState } from "react"
import './style.scss'

function Collapse({collapseTitle , collapseDescription}){

    /* hook d'état "useState" de React pour initialiser une variable d'état appelée "isOpen" à la valeur false. 
     Le hook d'état permet de gérer l'état local d'un composant fonctionnel. */
    const [isOpen, setIsOpen] = useState(false)

    /* Cette fonction est appelée lorsqu'un utilisateur clique sur l'élément de titre du collapse. 
    La fonction "setIsOpen" est utilisée pour inverser la valeur actuelle de "isOpen". */
    const handleClick = ()=>{
        setIsOpen(!isOpen)
    }

    return(
        <div className="collapse-container">
            {/* "handleClick" est définit comme gestionnaire d'événement pour le clic sur cet élément. */}
            <div onClick={handleClick} 
            /* La classe CSS appliquée à cet élément de titre dépend de la valeur actuelle de "isOpen". 
            Si "isOpen" est vrai, la classe "styles.collapse_title_open" est utilisée, sinon la classe "styles.collapse_title_closed" est utilisée. Cela permet de modifier l'apparence du titre en fonction de l'état du collapse. */
            className={isOpen ?`collapse_title_open`:`collapse_title_closed` }>
                {collapseTitle}
                {/* L'élément <img>  affiche une flèche vers le haut ou vers le bas. 
                La classe CSS appliquée à l'image dépend également de la valeur de "isOpen". */}
                <img  src = {arrow} className={isOpen ?`arrow_up`:`arrow_down`}
                alt='fleche pour déployer le contenu' title='déployer'/>
            </div>
            {/* Cela signifie que si "isOpen" est vrai, le code à l'intérieur des parenthèses sera rendu. 
            Dans ce cas, il s'agit d'un élément <div> supplémentaire qui représente la description du collapse. 
            La classe CSS "styles.collapse_description" est appliquée à cet élément. */}
            {isOpen && (
                <div className='collapse_description'>
                    <div>{collapseDescription}</div>
                </div>
            )}
        </div>
    )
}
export default Collapse