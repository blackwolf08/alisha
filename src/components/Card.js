import React from 'react'
import Reveal from 'react-reveal/Reveal';

const Card = ({url}) => {
    return (
            <div className="card--root">
                        <Reveal effect="img_in_vp" effectOut="img_not_in_vp">

                
                <img className="card__img" alt="Portfilio" src={url}></img>
                    </Reveal>

            </div>

    )
}

export default Card
