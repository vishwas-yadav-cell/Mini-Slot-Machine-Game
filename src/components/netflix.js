import React from 'react';
import cardData from './cardData';
import Card from './Cards';

export default function netflix() {
    return (
        // eslint-disable-next-line array-callback-return
        cardData.map((data, i) => {
            if (data.category === 'Netflix Originals Series') {
                return (
                    <Card
                        key={`card${i = i + 1}`}
                        imgsrc={data.imgsrc}
                        category={data.category}
                        title={data.title}
                        redLink={data.redLink}
                    />
                )
            }
        })
    )
}