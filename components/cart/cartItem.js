const CartItem = ({good, onPlusCLick, onMinusClick, onRemoveItem}) => {
  return(
    <>
      <div className="cart-item">

        <div className="cart-item__cross" onClick = {() => onRemoveItem(good.id)}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.75 1.32138L6.67863 0.25L4 2.92863L1.32138 0.25L0.25 1.32138L2.92863 4L0.25 6.67863L1.32138 7.75L4 5.07137L6.67863 7.75L7.75 6.67863L5.07137 4L7.75 1.32138Z" fill="#4862D2"/>
            </svg>
        </div>

        <div className="cart-item__title-and-subtitle mobile">
             <span className="cart-item__title">{good.subtitle} </span>
             <span className="cart-item__title">{good.title}</span>
        </div>

        <div className="cart-item-wrapper">
            <div className="cart-item__img">
                 <img src={good.img} alt={good.title}/>
            </div>

            <div className="cart-item__title-and-subtitle non-visible">
                 <p className="cart-item__title">{good.subtitle} </p>
                 <p className="cart-item__title">{good.title}</p>
            </div>

            <div className="cart-item__controls">
                <div className="cart-item__plus-minus">
                   <div className="cart-item__plus-minus-wrapper">
                      <div className="cart-item__minus-btn" onClick={() => onMinusClick(good.id)}>
                            <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <line y1="1" x2="10" y2="1" stroke="#9C9C9C" strokeWidth="2"/>
                            </svg>
                      </div>
                      <div className="cart-item__count">{good.count}</div>
                      <div className="cart-item__plus-btn" onClick = {() => onPlusCLick(good.id)}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 5H10M5 0L5 10" stroke="#9C9C9C" strokeWidth="2"/>
                        </svg>
                      </div>
                    </div>
                </div>

                <div className="cart-item__price-title">Стоимость</div>

                <p className="cart-item__price">{good.count*good.price} ₽</p>
            </div>

          </div>
     </div>



      <style jsx>{`
          .cart-item{
            position:relative;
          }

          .cart-item__controls{
            display:flex;
            align-items:center;
            justify-content:space-between;
            width:35%;
          }

         .cart-item-wrapper{
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
           width:calc(65% - 13rem);
           padding-right:1rem;
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

          .mobile{
            display:none;
          }

          .cart-item__price-title{
            font-size: 12px;
            line-height: 16px;
            color: #424242;
            margin-top:4rem;
            display:none;
          }

          @media screen and (max-width:700px){
            .cart-item, .cart-item-wrapper{
              border:none;
            }

            .cart-item__img{
              border:1px solid #D9D9D9;
            }

            .cart-item__title{
              margin-left:0;
              width:100%;
            }

            .cart-item__title-and-subtitle{
              width:90%;
            }

            .mobile{
              display:block;
              margin-bottom:2rem;
            }

            .non-visible{
              display:none;
            }

            .cart-item__cross{
              top:0
            }

            .cart-item-wrapper{
              justify-content:space-between;
            }

            .cart-item{
              margin-bottom:4rem;
              padding-bottom:4rem;
              border-bottom:1px solid #D9D9D9;
            }

            .cart-item__controls{
              width:55%;
            }
          }

          @media screen and (max-width:400px){
            .cart-item__controls{
              flex-direction:column;
              align-items:flex-start;
              width:auto;
            }

            .cart-item__price{
              margin-top:1rem;
            }

            .cart-item-wrapper{
              align-items:flex-start;
            }

            .cart-item__plus-minus{
              float-right;
            }

            .cart-item__price-title{
              display:block;
            }
            .cart-item{
              padding-left:1rem;
              padding-right:1rem;
            }
          }


      `}</style>
    </>
  )
}

export default CartItem;
