import React, { useContext, useEffect } from 'react'
import MenuItemsContext from '../context-api/MenuItemsContext';
import useHttp from '../../CustomHooks/useHttp';

export default function GetMenuItems(props) {

    const ctx = useContext(MenuItemsContext);
    const transformMenuItemsFromDB = (data)=>{
        let id = 0, transformedMenuItems=[];
        for(let key in data){
            transformedMenuItems.push({
                id:id, 
                title:data[key].title,
                description:data[key].description, 
                amount:data[key].amount
            });
            id++;
        }
        props.setMenu(transformedMenuItems);
    }
    const {satisfyRequest} = useHttp(transformMenuItemsFromDB);

    useEffect(()=>{
        satisfyRequest({url:'https://react-http-bf239-default-rtdb.firebaseio.com/menu.json', method:'GET'})
    },[props.refreshMenu])
    
        return(
            <>
            </>
        )

}
