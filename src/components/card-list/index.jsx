import React from "react";
import datas from '../../assets/data/logements.json';
import Card from '../card';

function CardList() {
    return (
        datas.map((card, index) => { 
             return <Card key={index} card={card}></Card>
        })
    )
}

export default CardList