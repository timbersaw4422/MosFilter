import CartItem from "./cartItem";
import {useState} from "react";
import {setCookieByCartPlusMinus, setCookieByRemoveItem, getGoodsCookies} from "../../utils/utils";

const CartMain = ({goods, setCartCount}) => {

  const [stateGoods, setStateGoods] = useState(goods);
  let sum = 0;
  for (let good of stateGoods){
    sum += good.price*good.count;
  }

  const onPlusCLick = (id) => {
    const newGoods = stateGoods.map(good => {
      if (good.id === id){
        good.count++;
        setCookieByCartPlusMinus(good.id, 1);
      }
      return good;
    });
    setStateGoods(newGoods);
  }

  const onMinusClick = (id) => {
    const newGoods = stateGoods.map(good => {
      if (good.id === id && good.count>1) {
        good.count--;
        setCookieByCartPlusMinus(good.id, -1);
      }
      return good;
    });
    setStateGoods(newGoods);
  }

  const onRemoveItem = (id) => {
    const newGoods = stateGoods.filter(good => good.id !== id);
    setCookieByRemoveItem(id);
    setStateGoods(newGoods);
    setCartCount(newGoods.length);
    if (getGoodsCookies().length) document.querySelector(".cart-icon__count").innerText = getGoodsCookies().length;
    else document.querySelector(".cart-icon__count").style.opacity = "0";
  }

  return(
    <>
      <div className="cart-main">

         <div className="cart-header">
            <span className="cart-header__title cart-header__title1">Товар</span>
            <span className="cart-header__title cart-header__title2">Количество</span>
            <span className="cart-header__title cart-header__title3">Стоимость</span>
         </div>

         <div className="cart-body">
            {stateGoods.map(good => <CartItem
              key={good.id}
              good={good}
              onPlusCLick = {onPlusCLick}
              onMinusClick = {onMinusClick}
              onRemoveItem = {onRemoveItem}
              />)}
         </div>

         <div className="cart-bottom">
            <p className="cart-sum">Итого: {sum} ₽</p>
            <a className="cart-send-btn btn-blue">Оформить заказ</a>
         </div>


      </div>



      <style jsx>{`
        .cart-main{
          margin-top:1.5rem;
        }

        .cart-header{
          display:flex;
          align-items:center;
          margin-bottom:1rem;
        }

        .cart-header__title{
          font-size: 12px;
          line-height: 16px;
          color: #424242;
        }

        .cart-header__title1{
          width:65%;
        }

        .cart-header__title2{
          width:22%;
        }

        .cart-header__title3{
          width:13%;
        }

        .cart-body{
          margin-bottom:4rem;
        }

        .cart-send-btn{
          width:15rem;
          font-weight:400;
          border-radius:0.3rem;
          height:4rem;
        }

        .cart-sum{
          font-weight: bold;
          font-size: 18px;
          line-height: 25px;
          display: flex;
          align-items: center;
          color: #424242;
        }

        .cart-bottom{
          max-width:47rem;
          width:100%;
          float:right;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding-bottom:5rem;
          border-bottom:1px solid #D9D9D9;
          margin-bottom:5rem;
        }
      `}</style>
    </>
  )
}

export default CartMain;
