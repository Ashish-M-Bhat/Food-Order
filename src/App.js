import React, {useState} from 'react';
import './App.css';
import NavBar from './Components/NavigationBar/NavBar';
import MenuItemsContext from './Components/context-api/MenuItemsContext'
import About from './Components/About/About';
import MenuBar from './Components/MenuBar/MenuBar';
import ListItems from './Components/MenuItems/ListItems';
import GetMenuItems from './Components/MenuItems/GetMenuItems';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Components/UI/Login';
function App() {
  const [menu, setMenu] = useState([]);
  const [refreshMenu, setRefreshMenu] = useState(false);

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className='App'>
      <MenuItemsContext.Provider value={{menu:menu }}>
      <GetMenuItems setMenu={setMenu} refreshMenu={refreshMenu} setRefreshMenu={setRefreshMenu} />
        <NavBar />
        <About />
        <MenuBar setMenu={setMenu} setRefreshMenu={setRefreshMenu}/>
        {!isAuthenticated && <Login />}
        {isAuthenticated && <ListItems />}
      </MenuItemsContext.Provider>
        
        
    </div>
  );
}

export default App;
