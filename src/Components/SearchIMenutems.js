import React, {useContext, useState} from 'react'
import MenuItemsContext from './context-api/MenuItemsContext';
import cssClasses from './SearchIMenutems.module.css'

export default function SearchIMenutems(props) {
    const ctx = useContext(MenuItemsContext);
    const [searchInput, setSearchInput] = useState('');
    const [menuBackup, setMenuBackup] = useState(ctx.menu);

    const searchMenuItemIputHandler = (event)=>{
        setSearchInput(event.target.value);
    }

    const searchMenuItemHandler = (event) =>
    {
        event.preventDefault();
        const searchArray = ctx.menu.filter((ob)=>ob.title.includes(searchInput) || ob.description.includes(searchInput));
        props.setMenu(searchArray);
    }
    const cancelSearch = (event) =>{
        event.preventDefault();
        setSearchInput('');
        props.setMenu(menuBackup);
    }
  return (
    <div>
        <form>
            <input type="text" value={searchInput} onChange={searchMenuItemIputHandler} className={cssClasses.searchInput}/>
            <button onClick={searchMenuItemHandler}>Search</button>
            <button onClick={cancelSearch}>X</button>
        </form>
    </div>
  )
}
