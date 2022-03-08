import React, { useContext, useState } from 'react'
import MenuItemsContext from '../context-api/MenuItemsContext';
import cssClasses from './SortItems.module.css'

export default function SortItems(props) {
    const ctx = useContext(MenuItemsContext);
    const [selectedOption, setSelectedOption] = useState('Most Popular');
    const sortMenuOnSelect = (event)=>{
        const sortedMenu = [...ctx.menu];
        setSelectedOption(event.target.value);
        switch(event.target.value){         
            case 'Most Popular':
                sortedMenu.sort((a,b)=>{
                    return a.id < b.id? -1:1;
                })
                break;
            case 'Price Low to High':
                sortedMenu.sort((a,b)=>{
                    return a.amount < b.amount? -1:1;
                });
                break;
            case 'Price High to Low':
                sortedMenu.sort((a,b)=>{
                    return a.amount > b.amount? -1:1;
                })
                break;
            default:

        }
        props.setMenu([...sortedMenu]);
    }
    return(
        <ul className={cssClasses.NavigationItems}>
                <li><h3>Sort Items</h3></li>
                <form className={cssClasses.sort}>
                    <select value={selectedOption} type='select' onChange={sortMenuOnSelect}>
                        <option value="Most Popular">Most Popular</option>
                        <option value="Price Low to High">Price Low to High</option>    
                        <option value="Price High to Low">Price High to Low</option>    
                    </select>
                </form>
        </ul>
    )
}
