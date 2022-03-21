import { createSlice } from "@reduxjs/toolkit";
import useHttp from "../CustomHooks/useHttp";

const cartSlice = createSlice({
    name:'cart',
    initialState:{cart: []},
    reducers:{
        addItemToCart(state, action){
            const item = { id:action.payload.id, title:action.payload.title, amount:action.payload.amount, countOfItems:action.payload.countOfItems};
            if(state.cart.length){
            // Check if the item already exists
            for(let eachCartItem of state.cart){
                if(eachCartItem.id === action.payload.id){
                    eachCartItem.countOfItems += action.payload.countOfItems;
                    return;
                }
            }
            // if item isn't found in the cart, add it
            state.cart.push(item);
            return;
        }
        // if cart is empty  
        else{
            state.cart.push(item);
            return;
        }  
        
        },
        decreaseCurrentItemCount(state, action){
            for(let eachItem in state.cart){
                if(state.cart[eachItem].id === action.payload.id){
                    state.cart[eachItem].countOfItems--;
                    // Remove the item from cart
                    if(state.cart[eachItem].countOfItems === 0){
                        state.cart.splice(eachItem,1);
                    }
                    return;
                }
            }
        },
        increaseCurrentItemCount(state, action){
            for(let eachItem in state.cart){
                if(state.cart[eachItem].id === action.payload.id){
                    state.cart[eachItem].countOfItems++;
                    return;
                }
            }
        },
        emptyCartAfterOrder(state){
            state.cart=[]
        }
    }
});

export default cartSlice;
export const cartActions = cartSlice.actions; 