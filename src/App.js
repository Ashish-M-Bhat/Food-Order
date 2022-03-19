import React, {useState} from 'react';
import './App.css';
import NavBar from './Components/NavigationBar/NavBar';
import MenuItemsContext from './Components/context-api/MenuItemsContext'
import { useReducer } from 'react';
import About from './Components/About/About';
import MenuBar from './Components/MenuBar/MenuBar';
import ListItems from './Components/MenuItems/ListItems';
import GetMenuItems from './GetMenuItems';

const reducerCart = (cart, action) =>{
  const item = { id:action.payload.id, title:action.payload.title, amount:action.payload.amount, countOfItems:action.payload.countOfItems};
  if(cart.length){

    // Check if the item already exists
    for(let eachCartItem of cart){
      if(eachCartItem.id === action.payload.id){
        eachCartItem.countOfItems += action.payload.countOfItems;
        return [...cart];
      }
    }    
    
    // if item isn't found in the cart, add it
    return [...cart, item];
  }
  // if cart is empty  
  else  
    return [item];
}

function App() {
  const [cart, dispatchCart] = useReducer(reducerCart, []);
  const [menu, setMenu] = useState([]);
  const [refreshMenu, setRefreshMenu] = useState(false);
  return (
    <div className='App'>
      <MenuItemsContext.Provider value={{menu:menu, cart:cart, dispatchCart:dispatchCart }}>
      <GetMenuItems setMenu={setMenu} refreshMenu={refreshMenu} setRefreshMenu={setRefreshMenu} />
        <NavBar />
        <About />
        <MenuBar setMenu={setMenu} setRefreshMenu={setRefreshMenu}/>
        <ListItems />
      </MenuItemsContext.Provider>
        
        
    </div>
  );
}

export default App;
