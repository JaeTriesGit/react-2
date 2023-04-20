import Star from '../assets/Star.svg'
//This is a basic card component's root behavior

export default function Card(Props){//Props is the list of everything we've passed to the cards
    return(
        <div className='FullCard'>
            <img className='Card' src={Props.imageToUse}/>
            <p className='SaleState'>{Props.state}</p>
            <div className='CardInfo'>
                <img className='Star' src={Star}/>
                <p className='Rating'>{Props.rating}</p>
                <span className='From'>({Props.reviews})•USA</span>
            </div>
            <p className='CourseName'>{Props.title}</p>
            <p className='PriceTag'>From ${Props.price} <span>/ person</span></p>
        </div>
    )
}