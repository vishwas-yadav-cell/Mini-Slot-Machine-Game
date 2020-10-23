import React from 'react';
import Card from './Cards';
import cardData from './cardData';

export default function amazon() {
    return (
        // eslint-disable-next-line array-callback-return
        cardData.map((data, i) => {
            if (data.category === 'Amazon Prime Series') {
                return (
                    <>
                        <Card
                            key={`card${i = i + 1}`}
                            imgsrc={data.imgsrc}
                            category={data.category}
                            title={data.title}
                            redLink={data.redLink}
                        />
                    </>
                )
            }
        })
    )
}