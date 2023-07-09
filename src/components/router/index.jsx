import { BrowserRouter , Route, Routes  } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import Home from "../../pages/home";
import FicheLogement from "../../pages/fiche-logement";
import Error from "../../pages/error";
import About from "../../pages/a-propos";

function Router() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fiche-logement/:id" element={<FicheLogement />} />
                <Route path="/a-propos" element={<About />} />
                <Route path='*' element={<Error />} />

            </Routes>
           <Footer></Footer>
        </BrowserRouter>
    )
}

export default Router;