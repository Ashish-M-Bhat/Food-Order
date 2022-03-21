import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../../CustomHooks/useHttp";
import { cartActions } from "../../../Store/CartStore";

export default function PlaceOrder(props) {
  const cart = useSelector((state) => state.cart.cart);
  const postInsert = (data) => {
  }
  const { satisfyRequest } = useHttp(postInsert);
  let orderCart = cart.map((eachItem) => {
                    const {title,amount,countOfItems} = eachItem;
                    return {title,amount,countOfItems} })
  useEffect(() => {
    satisfyRequest({
      url: "https://react-http-bf239-default-rtdb.firebaseio.com/Placed-Orders.json",
      method: "POST",
      body: JSON.stringify(orderCart),
      headers: { "Content-type": "application/jsoon" }
    });
    props.closeCartModal()
  }, []);
  useDispatch()(cartActions.emptyCartAfterOrder());

  return <div></div>;
}
