import { useState } from 'react';
import reactdom from 'react-dom';
import cssClasses from './CartModal.module.css'

const BackDrop = (props)=>{
    return(
        <div className={cssClasses.backdrop} onClick={props.closeCartModal}>
    
        </div>
    )
}
const Overlay = (props)=>{
    const [itemCountHasChanged, setItemCountHasChanged] = useState(false);
    const displayCartItems = ()=>{
        if(props.cart.length ===0)
        return(
            <h2 style={{'textAlign':'center'}}>Sir, Your Cart is Empty!</h2>
        )
        let cartArray = props.cart.map((eachCartItem)=>{
            return(
                <div key={eachCartItem.id} className={cssClasses.EachItemInfo}>
                    <p>{eachCartItem.title} : {eachCartItem.amount} * {eachCartItem.countOfItems} = {eachCartItem.countOfItems*eachCartItem.amount}</p>
                    <button disabled={eachCartItem.countOfItems===1} onClick={()=>{eachCartItem.countOfItems--;setItemCountHasChanged(!itemCountHasChanged)}}>-</button>
                    <button onClick={()=>{eachCartItem.countOfItems++; setItemCountHasChanged(!itemCountHasChanged)}}>+</button>
                    
                </div>
            );
        })
        
        return cartArray;
    }

    const calculateTotal = ()=>{
        let totalAmount = 0;
        for(let item of props.cart){
            totalAmount+=item.countOfItems*item.amount;
        }
        return totalAmount;
        
    }

    return (
        <div className={`${cssClasses.modal}`}>
            <header className={cssClasses.header}>
            <h2>Your CART</h2>
            </header>
            <div className={cssClasses.content}>
            {displayCartItems()}
            <hr/>
            <p className={cssClasses.content}>{calculateTotal()>0?`Total = ` + calculateTotal():''}</p>
            </div>
            <footer className={cssClasses.actions}>
            
            <button onClick={props.closeCartModal}>Okay :(</button>
            </footer>
    </div>
    )

}

export default function CartModal(props){   
    return (
        <div>
           {reactdom.createPortal(
               <Overlay cart = {props.cart} closeCartModal={props.closeCartModal}/>, document.getElementById('modalOverlay'))}
           {reactdom.createPortal(
               <BackDrop closeCartModal={props.closeCartModal}/>, document.getElementById('backdrop'))}
        </div>
      );
}