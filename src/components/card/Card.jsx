import { Link } from 'react-router-dom';
import './card.scss'

function Card({item}){
    return(
        <div className='card'>
            <Link to={`/${item.id}`} className='imageContainer'>
            <img src={item.images} alt=''></img>
            </Link>
            <div className='textContainer'>
                <h2 className='title'>
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </h2>
                <p className='address'>
                    <img src='/pin.png' alt=''></img>
                    <span>{item.address}</span>
                </p>
                <p className='price'>$ {item.price}</p>
                <div className="bottom">
                    <div className="features">
                        <div className="feature">
                            <img src='/bed.png' alt=''></img>
                            <span>{item.bedroom} Bedroom</span>
                        </div>
                        <div className="feature">
                            <img src='/bath.png' alt=''></img>
                            <span>{item.bathroom} Bathroom</span>
                        </div>
                    </div>
                    <div className="icons">
                    <div className="icon">
                            <img src='/save.png' alt=''></img>
                        </div>
                        <div className="icon">
                            <img src='/chat.png' alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;