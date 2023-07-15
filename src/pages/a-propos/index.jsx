import Banner from '../../components/banner';
import Collapse from "../../components/collapse";
import abouts from '../../assets/data/about.json';
import './style.scss';

function About() {
    return (
        <main>
            <Banner page="about" />
            <section className="collapse">
                {/* Itération de mon tableau appelé "abouts"
                    Chaque élément du tableau est un objet avec les propriétés title et description */}
                {abouts.map(({ title, description }, index) => (
                    <Collapse
                    // Les propriétés key, collapseTitle et collapseDescription sont passées à chaque instance du composant "Collapse". La valeur de key est générée en concaténant le title avec l'index actuel de la boucle pour créer une clé unique pour chaque élément.
                        key={`${title}-${index}`}
                        collapseTitle={<h2 className="title-about-collapse">{title}</h2>}
                        collapseDescription={<p className="description-about-collapse">{description}</p>}
                    />
                ))}                       
            </section>
        </main>
    )
};

export default About