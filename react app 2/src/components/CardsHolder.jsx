import Card from './Card'
import CardsData from './CardsData'

export default function CardHolder(){ //Check below for all the things we're passing to the cards
    const CardsMapped=CardsData.map(card => { //We create a proper map for each card from cardsdata
        return <Card 
            key={card.id} //We need to set a key, so ID is important!
            {...card} //We can give all the properties without the need to rename them like this
            /*
            We can also put all the values behind a variable, i.e:

            items={card} <- this would require us to put "Props.items" before accessing any data
            We do not need the below, it's just extra code, but that's our main structure

            imageToUse={card.img} //set image
            rating={card.stars} //set rating
            title={card.title} //set title
            spots={card.spots} //set spots
            price={card.price} //set price
            reviews={card.reviews} //set reviews
            location={card.location} //set location*/
        />
    })
    return(
        <div className='CardHolder'>
            {CardsMapped}
        </div>
    )
}

//above, using {CardsMapped} we are using everything that's mapped inside that constant, which is all the cards from CardsData