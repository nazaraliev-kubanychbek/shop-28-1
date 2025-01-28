import './card.scss';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
    return (
        <div className="card">
            <Link to={`/product/${item.id}`}>
            <img src={item.image} alt="" className="card-img" />

            <h4 className="card-title">{
            item.title.length > 30
            ? item.title.substr(0, 27).trim() + '...'
            : item.title
            }</h4>
            <p className="card-text">{
            item.description.length > 65
            ? item.description.substr(0, 62).trim() + '...'
            : item.description
            }</p>
            <br />
            <p className="card-text">{item.category}</p>
            </Link>
            <div className="card-block">
                <p className="card-text">${item.price}</p>
                <button className="card-btn">buy</button>
            </div>
        </div>
    );
}

export default Card;
