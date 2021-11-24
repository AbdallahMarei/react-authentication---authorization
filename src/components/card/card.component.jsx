import React from 'react';
import "./card.styles.scss";

const Card = ({name,age,image}) => {
    return (
        <div className="card">
            <div className="image">
                <img src={image} alt="profilepic" />
            </div>
            <div className="headings">
            <h1>{name}</h1>
            <h1>{age}</h1>
            </div>
        </div>
    )
}

export default Card;
