import Button from "./UI/Button";
import cssClasses from "./Cart.module.css";
import { useContext, useState } from "react";
import MenuItemsContext from "./context-api/MenuItemsContext";
import CartModal from "./CartModal";

export default function Cart() {
    const [callCartModal, setCallCartModal] = useState(false);
    
    const closeCartModal = () =>{
        setCallCartModal(false);
    }

  const ctx = useContext(MenuItemsContext);
  
  return (
    <div className={cssClasses.Cart}>
      <Button onClick={()=>setCallCartModal(true)} disabled={false}>
        Cart
      </Button>
      {callCartModal && <CartModal cart={ctx.cart} closeCartModal={closeCartModal}/>}
    </div>
  );
}
