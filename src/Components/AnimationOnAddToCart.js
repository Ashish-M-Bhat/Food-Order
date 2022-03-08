import React from "react";
import cssClasses from "./AnimationOnAddToCart.module.css";

export default function AnimationOnAddToCart(props) {

  const closeModal = () => {
    setTimeout(() => {
      props.setAnimationOnAddToCart(false);
    }, 1000);
  };

  return (
    <div className={`${cssClasses.modal}`}>
      <header className={cssClasses.header}>
        <h2>Added to Cart</h2>
      </header>
      <div className={cssClasses.content}>
        {closeModal()}
        <p>{`Added ${props.countOfItems} ${props.countOfItems > 1?'items':'item'} of ${props.title}`}</p>
      </div>
      <footer className={cssClasses.actions}></footer>
    </div>
  );
}
