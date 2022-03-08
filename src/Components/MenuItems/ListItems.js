import { useContext } from "react";
import MenuItemsContext from "../context-api/MenuItemsContext";
import EachItem from "./EachItem";

export default function ListItems(props){
    const ctx = useContext(MenuItemsContext);
    return(
        <>
            { !ctx.menu.length &&  <h1 style={{textAlign:'center'}}>No Items To Display!</h1>}
            {ctx.menu.map((eachItem) =>{
                return (
                        <EachItem 
                            id={eachItem.id}
                            key={eachItem.id} 
                            title={eachItem.title}
                            description={eachItem.description}
                            amount={eachItem.amount}
                        />
                );
            }) }
        </>
    );
}