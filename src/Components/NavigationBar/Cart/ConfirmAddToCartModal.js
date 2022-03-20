import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../Store/CartStore';
import Button from '../../UI/Button';
import cssClasses from './ConfirmAddToCartModal.module.css'
const ConfirmAddToCartModal = (props)=>{

    const dispatchCart = useDispatch();
    const yesConfirmHandler = () =>{
        props.setAnimationOnAddToCart(true);
        //Add to Cart
        dispatchCart(cartActions.addItemToCart({id:props.id, title:props.title,amount:+props.amount, countOfItems:+props.countOfItems}))
        // Close the Portal
        props.dispatchConfirmAddToCart({type:'callConfirmAddToCart',payload:{value:false}});
    }

    const noConfirmHandler = () =>{
        // Close the Portal
        props.dispatchConfirmAddToCart({type:'callConfirmAddToCart',payload:{value:false}});
    }
    return(
        <>
            <div className={cssClasses.backdrop} >
        
            </div>
            <div className={`${cssClasses.modal}`}>
                <header className={cssClasses.header}>
                    <h2>Your CART</h2>
                </header>
                <div className={cssClasses.content}>
                    <>{`Are you sure you want to add ${props.countOfItems} item${props.countOfItems>1?'s':''} of ${props.title} `}?</>
                </div>
                <footer className={cssClasses.actions}>
                    <Button onClick={yesConfirmHandler} className={cssClasses.Button}>YES</Button>
                    <br/>
                    <Button onClick={noConfirmHandler} className={cssClasses.Button}>NO</Button>
                </footer>
            </div>
        </>
    )
}

export default ConfirmAddToCartModal;