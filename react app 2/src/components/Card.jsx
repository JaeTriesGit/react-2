import Star from '../assets/Star.svg'
//This is a basic card component's root behavior

export default function Card(Props){//Props is the list of everything we've passed to the cards
    let Tx
    if (Props.spots === 0) {
        Tx = 'SOLD OUT'
    } else if (Props.location === 'Online') {
        Tx = 'ONLINE'
    }
    return(
        <div className='FullCard'>
            <img className='Card' src={Props.img}/>
            {Tx && <p className='SaleState'>{Tx}</p> || <p className='Empty'/>} 
            <div className='CardInfo'>
                <img className='Star' src={Star}/>
                <p className='Rating'>{Props.rating}</p>
                <span className='From'>({Props.reviews})•{Props.location}</span>
            </div>
            <p className='CourseName'>{Props.title}</p>
            <p className='PriceTag'>From ${Props.price} <span>/ person</span></p>
        </div>
    )
}

//Props.spots, there's an example on line 8 for how we can render a thing ONLY if requirements are met