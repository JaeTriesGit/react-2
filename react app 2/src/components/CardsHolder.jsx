import Card from './Card'
import CardsData from './CardsData'

export default function CardHolder(){ //Check below for all the things we're passing to the cards
    const CardsMapped=CardsData.map(card => { //We create a proper map for each card from cardsdata
        return <Card 
            imageToUse={card.img} //set image
            rating={card.stars} //set rating
            title={card.title} //set title
            state={card.state} //set state
            price={card.price} //set price
            reviews={card.reviews} //set reviews
        />
    })
    return(
        <div className='CardHolder'>
            {CardsMapped}
        </div>
    )
}

//above, using {CardsMapped} we are using everything that's mapped inside that constant, which is all the cards from CardsData