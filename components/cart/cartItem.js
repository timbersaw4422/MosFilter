const CartItem = ({good}) => {
  return(
    <>
      <div className="cart-item">

        <div className="cart-item__img">
             <img src={good.img} alt={good.title}/>
        </div>
        <div className="cart-item__title-and-subtitle">
             <p className="cart-item__title">{good.subtitle} </p>
             <p className="cart-item__title">{good.title}</p>
        </div>
        <div className="cart-item__plus-minus">
           <div className="cart-item__plus-minus-wrapper">
              <div className="cart-item__minus-btn">
                    <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line y1="1" x2="10" y2="1" stroke="#9C9C9C" strokeWidth="2"/>
                    </svg>
              </div>
              <div className="cart-item__count">1</div>
              <div className="cart-item__plus-btn">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5H10M5 0L5 10" stroke="#9C9C9C" strokeWidth="2"/>
                </svg>
              </div>
            </div>
        </div>
        <p className="cart-item__price">1570 ₽</p>
        <div className="cart-item__cross">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.75 1.32138L6.67863 0.25L4 2.92863L1.32138 0.25L0.25 1.32138L2.92863 4L0.25 6.67863L1.32138 7.75L4 5.07137L6.67863 7.75L7.75 6.67863L5.07137 4L7.75 1.32138Z" fill="#4862D2"/>
            </svg>
        </div>

      </div>




      <style jsx>{`
         .cart-item{
           display:flex;
           align-items:center;
           height:13rem;
           border: 1px solid #D9D9D9;
           border-right:none;
           border-top:none;
           position:relative;
         }

         .cart-item__cross{
           position:absolute;
           width:20px;
           height:20px;
           border-radius:50%;
           background: #FFFFFF;
           box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
           top:1rem;
           right:0;
           cursor:pointer;
           display:flex;
           align-items:center;
           justify-content:center;
         }

         .cart-item__img{
           width:13rem;
           height:100%;
           border-right:1px solid #D9D9D9;
           display:flex;
           align-items:center;
           justify-content:center;
         }

         .cart-item__img img{
           height:9rem;
         }

         .cart-item__title-and-subtitle{
           width:calc(65% - 13rem)
         }

          .cart-item__title{
            font-weight: 600;
            font-size: 16px;
            color: #424242;
            margin:0 0 0 5rem;
          }

          .cart-item__plus-minus{
            display:flex;
            justify-content:space-between;
            width:22%;
          }

          .cart-item__plus-minus-wrapper{
            display:flex;
            height:4rem;
            background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%), #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
            border-radius: 3px;
          }

          .cart-item__minus-btn, .cart-item__plus-btn, .cart-item__count{
            width:4rem;
            height:4rem;
            display:flex;
            align-items:center;
            justify-content:center;
          }

          .cart-item__minus-btn, .cart-item__plus-btn{
            cursor:pointer;
          }

          .cart-item__count{
            font-size: 13px;
            line-height: 18px;
            color: #424242;
          }

          .cart-item__price{
            font-weight: bold;
            font-size: 18px;
            line-height: 25px;
            color: #424242;
          }

      `}</style>
    </>
  )
}

export default CartItem;
