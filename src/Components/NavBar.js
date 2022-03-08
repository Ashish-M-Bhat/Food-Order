import Cart from './Cart';
import cssClasses from './NavBar.module.css'

const NavBar = () =>{
    return(
        <div className={cssClasses.NavBar}>
            <ul className={cssClasses.NavigationItems}>
                <li><h2>ReactMeals</h2></li>
                <Cart />
            </ul>
        </div>
    )
}

export default NavBar;