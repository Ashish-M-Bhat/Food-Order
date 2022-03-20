import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../Store/AuthStore';
import Button from '../UI/Button';
import Cart from './Cart/Cart';
import cssClasses from './NavBar.module.css'

const NavBar = () =>{
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const authDispatch = useDispatch();
    return(
        <div className={cssClasses.NavigationBar}>
            <h2>ReactMeals</h2>
            {isAuthenticated && <Cart className={cssClasses.button} />}
            {isAuthenticated && <Button className={cssClasses.button} onClick={()=>{authDispatch(authActions.logout())}}> Logout</Button>}
        </div>
    )
}

export default NavBar;