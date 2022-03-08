import React, {useState} from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import MenuItemsContext, { MENU } from './Components/context-api/MenuItemsContext'
import ListItems from './Components/ListItems';
import { useReducer } from 'react';
import About from './Components/UI/About';
import MenuBar from './Components/MenuBar';

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
  const [menu, setMenu] = useState(MENU);
  //const [isLoggedIn, setisLoggedIn] = useState(false);

  // if(isLoggedIn){
  //   localStorage.setItem('isLoggedIn',1);
  // }
  // else{
  //     localStorage.setItem('isLoggedIn',0);
  // }
  return (
    <div className='App'>
      <MenuItemsContext.Provider value={{menu:menu, cart:cart, dispatchCart:dispatchCart }}>
        <NavBar />
        <About />
        <MenuBar setMenu={setMenu} />
        <ListItems />
      </MenuItemsContext.Provider>
        
        
    </div>
  );
}

export default App;
