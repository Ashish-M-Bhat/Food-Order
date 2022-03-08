import { useState, useReducer } from 'react';
import ConfirmAddToCartModal from './ConfirmAddToCartModal'
import AnimationOnAddToCart from './AnimationOnAddToCart';
import cssClasses from './EachItem.module.css'
import Button from './UI/Button';

const reducerConfirmAddToCart = (confirmAddToCartState, action)=>{
    if (action.type === 'callConfirmAddToCart'){
        return {callConfirmAddToCart:action.payload.value};
    }
    
}

export default function EachItem(props){
    const [countOfItems, setCountOfItems] = useState(1);
    const [displayAnimationOnAddToCart, setAnimationOnAddToCart] = useState(false);

    const [confirmAddToCartState, dispatchConfirmAddToCart] = useReducer(reducerConfirmAddToCart, {callConfirmAddToCart:false});
    
    const trackCountOfItems = (event) =>{
        setCountOfItems(event.target.value)
    }
    
    const AddToCartHandler = (event) =>{
        event.preventDefault();
        dispatchConfirmAddToCart({type:'callConfirmAddToCart', payload:{value:true}});
    }

    return(
        <div className={cssClasses.ItemDetails}>
            <ul className={cssClasses.listOfItems}>
                <li>{props.title}</li>
                <li>{props.description}</li>
                <li>RS {props.amount}</li>
            </ul>

            <ul className={cssClasses.listOfItems}>
                <li><Button className={cssClasses.AddToCart} onClick={AddToCartHandler}>Add</Button></li>
                <li>
                    <form>
                        <input type="number" step="1" min="1" max="10" value={countOfItems} onChange={trackCountOfItems}/>
                    </form>
                </li>
            </ul>

            {confirmAddToCartState.callConfirmAddToCart && <ConfirmAddToCartModal dispatchConfirmAddToCart={dispatchConfirmAddToCart} setAnimationOnAddToCart={setAnimationOnAddToCart} countOfItems={countOfItems} id={props.id} title={props.title} amount={props.amount}/>}
            {displayAnimationOnAddToCart && <AnimationOnAddToCart setAnimationOnAddToCart={setAnimationOnAddToCart} title={props.title} countOfItems={countOfItems} />}
        </div>
    );
}