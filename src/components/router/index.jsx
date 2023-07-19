import { BrowserRouter , Route, Routes  } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import Home from "../../pages/home";
import FicheLogement from "../../pages/fiche-logement";
import Error from "../../pages/error";
import About from "../../pages/a-propos";
import './style.scss';

// Définition du composant "Router"
function Router() {
    return (
        <div className="page">
            <BrowserRouter>
            <Header></Header> {/* Affichage du composant Header en haut de la page */}
            <Routes> {/* Composant utilisé pour définir un groupe de routes */}
                <Route path="/" element={<Home />} />{/* Le premier (Route path="/") est associé au composant Accueil et correspond à l'URL racine. */}
                <Route path="/fiche-logement/:id" element={<FicheLogement />} />{/* Route associé au composant FicheLogement et permet d'utiliser des URLs dynamiques où id peut être passé en tant que paramètre au composant */}
                <Route path="/a-propos" element={<About />} />{/* Route pour la page "À propos" */}
                <Route path='*' element={<Error />} />{/* Route  associé au composant Erreur et sert de route de secours pour toutes les autres URLs inconnues */}
            </Routes>
           <Footer></Footer>{/* Affichage du composant Footer en bas de la page et apparaît sur chaque page */}
           </BrowserRouter>
        </div>
    )
}

export default Router;