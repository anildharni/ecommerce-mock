import classes from './Navbar.module.css'
import { GiClothes, GiEgyptianProfile, GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';

function Navbar(props) {

    return (
        <div className={classes.container}>
            <span>
                <GiClothes size={30} color={`grey`} />
            </span>
            <SearchBar placeholder="Search for a product..." />
            <span>
                <Link to={`/cart`}>
                    <GiShoppingCart size={30} color={`black`} />
                    {props.cartCount}
                </Link>
            </span>
            <span>
                <Link to={`/profile`}>
                    <GiEgyptianProfile size={30} color={`black`} />
                </Link>
            </span>
        </div>
    )
}

export default Navbar