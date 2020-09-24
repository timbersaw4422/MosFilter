import CartItem from "./cartItem";
import {useState} from "react";
import {setCookieByCartPlusMinus, setCookieByRemoveItem, getGoodsCookies} from "../../utils/utils";
import ModalWithAlertProvider from "../modal/modalWithAlertProvider";

const CartMain = ({goods, setCartCount}) => {

  const [isModalOpen, setModalOpen] = useState(false);

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
    else {
      document.querySelector(".cart-icon__count").style.opacity = "0";
      document.querySelector(".cart-icon").style.background = "#fff";
      document.querySelector(".cart-icon svg path").attributes.stroke.nodeValue = "#4862D2";
    }
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
            <div className="call-btn" onClick = {() => setModalOpen(true)}>
               <span>Оформить заказ</span>
            </div>
         </div>

         {isModalOpen ?
           <ModalWithAlertProvider
                             setModalOpen={setModalOpen}
                             title = "Оформление заказа"
                             modalType = {5}
                             data={stateGoods}
                             setCartCount={setCartCount}
                          />
            : null}


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

        .call-btn{
           display:flex;
           align-items:center;
           justify-content:center;
           font-weight: 600;
           transition:0.3s;
           position:relative;
           cursor:pointer;
           width:15rem;
           font-weight:400;
           height:4rem;
        }

        .call-btn:before, .call-btn:after{
          content:"";
          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          z-index:0;
          border-radius: 1rem;
          box-shadow: 0px 4px 10px rgba(45, 82, 214, 0.41);
          transition:0.3s;
          border-radius:0.3rem;
        }

        .call-btn:after{
          opacity:1;
          background: linear-gradient(180deg, #6089F3 0%, #191792 100%);
        }

        .call-btn:before{
          opacity:0;
          background: linear-gradient(180deg, #191792 0%, #6089F3 100%);
          border: 2px solid #2B54BE;
        }

        .call-btn span{
          position:relative;
          z-index:1;
          font-weight: 400;
          font-size: 14px;
          color: #FFFFFF;
        }

        .call-btn:active :before{
          background: linear-gradient(180deg, #191792 -32.22%, #6089F3 100%);
          box-shadow:none;
        }

        @media (hover:hover){
          .call-btn:hover:after{
            opacity:0;
          }
          .call-btn:hover:before{
            opacity:1;
          }
        }

        @media screen and (max-width:700px){
          .cart-header{
            display:none;
          }
        }

        @media screen and (max-width:400px){
          .cart-bottom{
            flex-direction:column;
          }
        }


      `}</style>
    </>
  )
}

export default CartMain;
