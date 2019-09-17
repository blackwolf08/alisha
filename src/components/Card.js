import React from 'react'
import Fade from 'react-reveal/Fade';

const Card = ({url}) => {
    return (
            <div className="card--root">
                        <Fade left>

                
                <img className="card__img" alt="Portfilio" src={url}></img>
                    </Fade>

            </div>

    )
}

export default Card
