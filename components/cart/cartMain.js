import CartItem from "./cartItem";

const CartMain = ({goodsFullInfo}) => {
  return(
    <>
      <div className="cart-main">

         <div className="cart-header">
            <span className="cart-header__title cart-header__title1">Товар</span>
            <span className="cart-header__title cart-header__title2">Количество</span>
            <span className="cart-header__title cart-header__title3">Стоимость</span>
         </div>

         <div className="cart-body">
            {goodsFullInfo.map(good => <CartItem key={good.id} good={good}/>)}
         </div>

         <div className="cart-bottom">
            <p className="cart-sum">Итого: 1488 ₽</p>
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
