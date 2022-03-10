import React, {useContext, useState} from 'react'
import MenuItemsContext from '../context-api/MenuItemsContext';
import cssClasses from './SearchIMenutems.module.css'

export default function SearchIMenutems(props) {
    const ctx = useContext(MenuItemsContext);
    const [searchInput, setSearchInput] = useState('');
    const [menuBackup, setMenuBackup] = useState(ctx.menu);

    const searchMenuItemIputHandler = (event)=>{
        setSearchInput(event.target.value);

        // While input is fed, keep searching. Performance goes Brrrrrr!!! Since Re-evaluation & Re-rendering/ Repainting keeps happening.
        const searchArray = ctx.menu.filter((ob)=>ob.title.includes(event.target.value) || ob.description.includes(event.target.value));
            props.setMenu(searchArray);

            // If Empty Array, display "Nothing to Display!" through ListItems.js and after 2s, reset the menu and search box.
            if(!searchArray.length)
                setTimeout(() => {
                    props.setMenu(menuBackup);
                    setSearchInput('');
                }, 2000);
            
            // If empty input, display all the menu items. 
            if(!event.target.value.trim().length){
                setSearchInput('');
                props.setMenu(menuBackup);
            }
                
    }

    const searchMenuItemHandler = (event) =>
    {
        event.preventDefault();
        
        // If input is Empty, show all the items
        if(!searchInput.trim().length){
            cancelSearch(event);
        }

        // Else search the menu whose title or description matches the search input
        else{
            const searchArray = ctx.menu.filter((ob)=>ob.title.includes(searchInput) || ob.description.includes(searchInput));
            props.setMenu(searchArray);

            // If Empty Array, display "Nothing to Display!" through ListItems.js and after 2s, reset the menu and search box.
            if(!searchArray.length)
                setTimeout(() => {
                    props.setMenu(menuBackup);
                    setSearchInput('');
                }, 2000);
                
        }
    }

    // Upon Cancelling the search, reset the menu array with the menuBackup and set the input to empty
    const cancelSearch = (event) =>{
        event.preventDefault();
        setSearchInput('');
        props.setMenu(menuBackup);
    }
    
    // Three elements: 1. A search box  2. Search Button and 3. Cancel Button
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
