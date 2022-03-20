import cssClasses from "./Cart.module.css";
import { useContext, useState } from "react";
import CartModal from "./CartModal";
import MenuItemsContext from "../../context-api/MenuItemsContext";
import Button from "../../UI/Button";

export default function Cart() {
    const [callCartModal, setCallCartModal] = useState(false);

    const closeCartModal = () =>{
        setCallCartModal(false);
    }
  
  return (
    <div className={cssClasses.Cart}>
      <Button onClick={()=>setCallCartModal(true)}>
        Cart
      </Button>
      {callCartModal && <CartModal closeCartModal={closeCartModal}/>}
    </div>
  );
}
