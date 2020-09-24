import {clearCookie} from "../../utils/utils";

const CartTop = ({cartCount, countSuffix, setCartCount}) => {

  const clearCartHandler = () => {
    clearCookie();
    setCartCount(0);
    document.querySelector(".cart-icon__count").style.opacity = "0";
    document.querySelector(".cart-icon").style.background = "#fff";
    document.querySelector(".cart-icon svg path").attributes.stroke.nodeValue = "#4862D2";
  }

  return(
    <>
      <div className="cart-flex">
         <p className="cart-flex__info">В корзине {cartCount} {countSuffix}</p>
         <div className="cart-flex__clear-btn" onClick = {clearCartHandler}>Очистить корзину</div>
      </div>


      <style jsx>{`
        .cart-flex{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-top:1rem;
        }

        .cart-flex__info{
          height:5rem;
          background: #F5F5F5;
          font-weight: 600;
          font-size: 15px;
          display: flex;
          align-items: center;
          color: #424242;
          padding-left:1.7rem;
          flex-grow:1;
        }

        .cart-flex__clear-btn{
          margin-left:1.5rem;
          width:20rem;
          height:5rem;
          border: 1px solid #4862D2;
          display: flex;
          align-items: center;
          justify-content:center;
          font-weight: 600;
          font-size: 15px;
          color: #424242;
          cursor:pointer;
        }

        @media screen and (max-width:450px){
          .cart-flex{
            flex-direction:column;
            margin-bottom:4rem;
          }
          .cart-flex__info, .cart-flex__clear-btn{
            width:100%;
            margin-left:0;
            padding-left:0;
          }
          .cart-flex__info{
            display:flex;
            justify-content:center;
          }
        }
      `}</style>
    </>
  )
}

export default CartTop;
