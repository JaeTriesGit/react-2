import GroupPic from '../assets/GroupPic.svg'

export default function MainFrame(){
    return(
        <div id='Frame'>
            <img src={GroupPic} className='GroupPic'/>
            <div id='info'>
                <h1 className='Header'>Online Experiences</h1>
                <p className='Desc'>Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</p>
            </div>
        </div>
    )
}