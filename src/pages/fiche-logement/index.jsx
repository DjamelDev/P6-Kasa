import React, { Fragment } from "react";
import Collapse from '../../components/collapse';
import datas from '../../assets/data/logements.json';
import { useParams } from "react-router-dom";
import { useState } from 'react';
import Error from "../error";
import Tags from "../../components/tag-name";
import Slideshow from "../../components/slideshow";
import Rating from "../../components/rating";
import './style.scss';


// Cette function va permettre d'afficher les informations sur un logement spécifique.
function FicheLogement() {
    const {id} = useParams(); // On utilise useParams de react-router-dom pour récupérer le paramètre id de l'URL
    const getLogement = datas.find( data => data.id === id) // Recherche les informations qui correspondent à l'identifiant
    const [logement,setLogement] = useState(getLogement)
    return (
        logement ?
        // Si un logement correspondant est trouvé, les éléments affichent l'identifiant (logement.id) et le titre (logement.title).
        <main>
        <div className="apartment-img">
            <Slideshow pictures={logement.pictures} picturesLength={logement.pictures.length} />
        </div>
        <article className='apartment-details'>
            <div className='details-left'>
                <h2 className='apartment-title'>{logement.title}</h2>
                <p className='apartment-location'>{logement.location}</p>
                <div className='apartment-tags'>
                    {logement.tags.map((tags, index) => (
                        <Tags key={`${index}-${tags}`} tag={tags} />
                    ))}
                </div>
            </div>
            <div className='details-right'>
                <div className='apartment-host'>
                    <p className='apartment-host-name'>{logement.host.name}</p>
                    <img className='apartment-host-picture' src={logement.host.picture} alt={logement.host.name}/>
                </div>
                <Rating rate={logement.rating} />
            </div>
        </article>
        <article className='apartment-information'>
            <div className='collapse-left'>
                <Collapse
                    collapseTitle={<h2 className='collapse-title'>Description</h2>}
                    collapseDescription={<p className='description'>{logement.description}</p>}
                />                    
            </div>
            <div className='collapse-right'>
                <Collapse className='collapse-right'
                    collapseTitle={<h2 className='collapse-title'>Equipements</h2>}
                    collapseDescription={logement.equipments.map((equipments, index) => (
                        <li key={`${index}-${equipments}`} className='equipments-list'>{equipments}</li>
                    ))}
                />
            </div>
        </article>
    </main>
            // Sinon, elle affiche un composant <Error/>.
            :
            <Error/>
    )
}

export default FicheLogement