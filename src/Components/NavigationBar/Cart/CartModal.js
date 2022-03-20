import reactdom from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../Store/CartStore';
import cssClasses from './CartModal.module.css'

const BackDrop = (props)=>{
    return(
        <div className={cssClasses.backdrop} onClick={props.closeCartModal}>
    
        </div>
    )
}
const Overlay = (props)=>{
    const cart = useSelector(state => state.cart.cart);
    const dispatchCart = useDispatch();
    
    // Helper method for Overlay that lists each cart item
    const displayCartItems = ()=>{
        if(cart.length ===0)
        return(
            <h2 style={{'textAlign':'center'}}>Sir, Your Cart is Empty!</h2>
        )
        let cartArray = cart.map((eachCartItem)=>{
            return(
                <div key={eachCartItem.id} className={cssClasses.EachItemInfo}>
                    <p>{eachCartItem.title} : {eachCartItem.amount} * {eachCartItem.countOfItems} = {eachCartItem.countOfItems*eachCartItem.amount}</p>
                    <button onClick={()=>{dispatchCart(cartActions.decreaseCurrentItemCount(eachCartItem))}}>-</button>
                    <button disabled={eachCartItem.countOfItems===10}onClick={()=>{dispatchCart(cartActions.increaseCurrentItemCount(eachCartItem))}}>+</button>
                    
                </div>
            );
        })
        
        return cartArray;
    }

    // Helper method for Overlay that calculates the Total Amount
    const calculateTotal = ()=>{
        let totalAmount = 0;
        for(let item of cart){
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
    // Return BackDtop & Overlay, using Portals
    return (
        <div>
           {reactdom.createPortal(
               <Overlay closeCartModal={props.closeCartModal}/>, document.getElementById('modalOverlay'))}
           {reactdom.createPortal(
               <BackDrop closeCartModal={props.closeCartModal}/>, document.getElementById('backdrop'))}
        </div>
      );
}