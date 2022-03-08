import React, {useContext} from 'react';
import cssClasses from './ConfirmAddToCartModal.module.css'
import MenuItemsContext from './context-api/MenuItemsContext';
import Button from './UI/Button';
const ConfirmAddToCartModal = (props)=>{

    const ctx = useContext(MenuItemsContext);
    const yesConfirmHandler = () =>{
        props.setAnimationOnAddToCart(true);
        //Add to Cart
        ctx.dispatchCart({payload:{id:props.id, title:props.title,amount:+props.amount, countOfItems:+props.countOfItems}})
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