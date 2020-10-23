import React from 'react';

export default function Card(props) {
    return (
        <>
            <div className="cards">
                <div className='card'>
                    <img src={props.imgsrc} alt="img" />
                    <div className='card__info'>
                        <span className='card__category'>{props.category}</span>
                        <h3 className='card__title'>{props.title}</h3>
                        <a href={props.redLink} target='_b'>
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}