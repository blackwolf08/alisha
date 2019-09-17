import React from 'react'

const Card = ({url}) => {
    return (
        <div className="card--root">
            <img className="card__img" alt="Portfilio" src={url}></img>
        </div>
    )
}

export default Card
