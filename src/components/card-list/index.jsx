import datas from '../../assets/data/logements.json';
import Card from '../card';
import './style.scss';

function CardList() {
    return (
        <div className="card-list"> 
            {datas.map((card, index) => { 
             return <Card key={index} card={card}></Card>
        })}
        </div>
    )
}

export default CardList