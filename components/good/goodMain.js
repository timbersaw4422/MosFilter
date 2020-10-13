import {useState} from "react";
import {setGoodsCookie, getGoodsCookies} from "../../utils/utils";
import { useAlert } from 'react-alert';
import ModalWithAlertProvider from "../modal/modalWithAlertProvider";
import Router from "next/router";
import GoodSlider from "./goodSlider";

const GoodMain = ({good}) => {

  const [isModalOpen, setModalOpen] = useState(false);

  const alert = useAlert();

  const [goodCount, setGoodCount] = useState(1);

  const changeGoodCount = sign => {
    if (sign === "+") setGoodCount(goodCount+1);
    else if (goodCount > 1) setGoodCount(goodCount-1);
  }

  let garanty="год";
  if (good.garanty >=2 ) garanty ="года";

  const [disabledButton, setDisabledButton] = useState(false);

  const addBtnHandler = () => {
    setGoodsCookie(good.id, goodCount);
    const cartCount = document.querySelector(".cart-icon__count");
    document.querySelector(".cart-icon").style.background = "#4862D2";
    document.querySelector(".cart-icon svg path").attributes.stroke.nodeValue = "#fff";

    cartCount.style.opacity = "1";
    cartCount.innerText = getGoodsCookies().length;
    alert.show('Товар добавлен в корзину!');
    setDisabledButton(true);
    setTimeout(() => setBtnToCartVisible(true), 1000);
  }

  const [isBtnToCartVisible, setBtnToCartVisible] = useState(false);

  const [bigImg, setBigImg] = useState(good.img);

  return(
    <>
      <p className="good-main__articul mobile">Артикул: {good.articul}</p>
      <p className="good-main__title mobile">{good.subtitle + " " + good.title}</p>
      <div className="good-page__main">
         <div className="good-main__imgs">
             <div className="good-main__big-img">
                <img src={bigImg} alt={good.title}/>
             </div>
             <div className="good-main__small-imgs">
                 { goog.detailImgs && <GoodSlider
                     detailImgs = {good.detailImgs}
                     detailImg1 = {good.img}
                     setBigImg = {setBigImg} />
                  }
             </div>
         </div>
         <div className="good-main__description">
           <div className="good-main__title-and-logo">
             <p className="good-main__title">{good.subtitle + " " + good.title}</p>
             {good.logoImg ? <img src={good.logoImg} alt={good.categoryName} className="good-main__logo"/> : null}
           </div>
           <p className="good-main__articul non-visible">Артикул: {good.articul}</p>
           <div className="horizontal-shape non-visible" style={{marginBottom:"4rem"}}></div>
           <div className="good-main__long-descrription">{good.desc}</div>
           <div className="horizontal-shape" style={{marginTop:"4rem", marginBottom:"3rem"}}></div>
           <div className="good-main__price-and-garanty">
              <p className="good-main__price">{good.price} <i style = {{fontSize:"21px"}}className="fas fa-ruble-sign"></i> / Шт</p>
              <p className="good-main__garanty">Гарантия {good.garanty} {garanty}</p>
           </div>
           <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M4.373 6.85729L1.0306 3.3827L0 4.45406L4.373 9L12 1.07136L10.9694 0L4.373 6.85729Z" fill="#2EAB33"/>
           </svg>
           <span style = {{marginLeft:"0.5rem", color:"#6B6B6B", fontSize:"12px"}}>Есть в наличии</span>

           <div className="good-main__btns">

              <div className="good-main__plus-minus">
                <div className="good-main__minus-btn" onClick={() => changeGoodCount("-")}>
                      <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="1" x2="10" y2="1" stroke="#9C9C9C" strokeWidth="2"/>
                      </svg>
                </div>
                <div className="good-main__count">{goodCount}</div>
                <div className="good-main__plus-btn" onClick={() => changeGoodCount("+")}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 5H10M5 0L5 10" stroke="#9C9C9C" strokeWidth="2"/>
                  </svg>
                </div>
              </div>

              {
                isBtnToCartVisible
                  ?
                  <button className="good-main__one-click-btn one-click-btn one-click-btn2" onClick = {() => Router.push("/cart").then(() => window.scrollTo (0, 0))}>
                     <span>Перейти в корзину</span>
                  </button>
                  :
                  <button className="call-btn good-main__in-cart-btn" disabled = {disabledButton} onClick = {addBtnHandler}>
                     <span>В корзину</span>
                  </button>
              }


              <div className="good-main__one-click-btn one-click-btn" onClick={() => setModalOpen(true)}><span>Купить в 1 клик</span></div>
              {isModalOpen ?
                <ModalWithAlertProvider
                                  setModalOpen={setModalOpen}
                                  title = "Оформление заказа"
                                  modalType = {4}
                                  data = {[
                                    good.subtitle + " " + good.title  + ". Количество: "  + goodCount,
                                    "Общая стоимость: " + goodCount*good.price + " руб."
                                  ]}
                               />
                 : null}
           </div>

           <div className="horizontal-shape non-visible" style={{marginTop:"3rem", marginBottom:"3.4rem"}}></div>

           <div className="good-main__masters">
             <div className="good-main__emoji">
                <img src="/img/master.png" alt="master"/>
             </div>
             <div className="good-main__masters-about">
                 <p className="good-main__masters-title">Доверьте замену картриджей нашим специалистам</p>
                 <p className="good-main__masters-subtitle">Мастер доставит и поменяет вам картриджи</p>
             </div>
           </div>

           <div className="horizontal-shape" style={{marginTop:"3.4rem"}}></div>

         </div>
      </div>




      <style jsx>{`
         .good-page__main{
           display:flex;
           justify-content:space-between;
           margin-bottom:2.6rem;
         }

         .good-main__imgs{
           width:45%;
         }

         .good-main__description{
           width:51.5%;
         }

         .good-main__big-img{
           height:45rem;
           border: 1px solid #E3E3E3;
           display:flex;
           align-items:center;
           justify-content:Center;
         }

         .good-main__big-img img {
           height:25rem;
         }

         .good-main__small-imgs{
           display:flex;
           align-items:center;
           margin-top:-1px;
           flex-wrap:wrap;
         }

         .good-main__small-img{
           width:calc(100% / 3);
           height:15rem;
           border: 1px solid #E3E3E3;
           display:flex;
           align-items:center;
           justify-content:center;
         }

         .good-main__small-img{
           border-right:none;
         }

         .good-main__small-img:last-child{
           border-right: 1px solid #E3E3E3;
         }

         .good-main__small-img img{
           height:50%;
         }

          .good-main__title-and-logo{
            display:flex;
            align-items:start;
            justify-content:space-between;
          }

          .good-main__title{
            width:60%;
            font-weight: 600;
            font-size: 20px;
            line-height: 27px;
            color: #424242;
            margin-top:0;
          }

          .good-main__logo{
            width:6rem;
          }

          .good-main__articul{
            font-size: 12px;
            line-height: 16px;
            color: #A7A7A7;
            margin-bottom:3rem;
            margin-top:0;
          }

          .horizontal-shape{
            width:100%;
            height:1px;
            background:#d9d9d9;
          }

          .good-main__long-descrription{
            font-size: 13px;
            line-height: 18px;
            color: #424242;
            width:100%;
            max-width:35rem;
            height:5rem;
          }

          .good-main__price-and-garanty{
            display:flex;
            align-items:center;
            justify-content:space-between;
          }

          .good-main__price{
            font-weight: bold;
            font-size: 24px;
            color: #424242;
            margin-top:0;
            margin-bottom:1rem;
          }

          .good-main__garanty{
            font-weight: 600;
            font-size: 12px;
            color: #424242;
            margin-top:0;
          }

          .good-main__btns{
            margin-top:1.9rem;
            display:flex;
            justify-content:space-between;
            flex-wrap:wrap;
          }

          .good-main__plus-minus{
            display:flex;
            height:4rem;
            background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%), #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
            border-radius: 3px;
          }

          .good-main__minus-btn, .good-main__plus-btn, .good-main__count{
            width:4rem;
            height:4rem;
            display:flex;
            align-items:center;
            justify-content:center;
          }

          .good-main__minus-btn, .good-main__plus-btn{
            cursor:pointer;
          }

          .good-main__count{
            font-size: 13px;
            line-height: 18px;
            color: #424242;
          }

          .good-main__in-cart-btn{
            height:4rem;
            border-radius:0.3rem;
            font-size: 13px;
            color: #FFFFFF;
            font-weight:normal;
            width:35%;
          }

          .good-main__one-click-btn{
            height:4rem;
            border: 2px solid #4862D2;
            border-radius: 5px;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size: 13px;
            line-height: 18px;
            color: #424242;
            cursor:pointer;
            width:35%;
            position:relative;
            outline:none;
            background:none;
          }

          .good-main__masters{
            display:flex;
            align-items:center;
          }

          .good-main__emoji{
            width:78px!important;
            height:78px!important;
            border-radius:50%;
            margin-right:3rem;
            border: 1px solid #D9D9D9;
            display:flex;
            align-items:center;
            justify-content:center;
          }

          .good-main__masters-about{
            width:calc(100% - 10.8rem)
          }

          .good-main__masters-title{
            font-weight: bold;
            font-size: 11px;
            line-height: 15px;
            color: #424242;
          }

          .good-main__masters-subtitle{
            font-size: 10px;
            line-height: 14px;
            color: #424242;
          }

          .call-btn{
             width:21rem;
             display:flex;
             align-items:center;
             justify-content:center;
             font-weight: 600;
             transition:0.3s;
             position:relative;
             cursor:pointer;
             height:4rem;
             font-size: 13px;
             color: #FFFFFF;
             font-weight:normal;
             width:30%;
             outline:none;
             border:none;
          }

          .call-btn:disabled{
            opacity:0.5;
            pointer-events:none;
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
            font-size: 13px;
            color: #FFFFFF;
          }

          .call-btn:active :before{
            background: linear-gradient(180deg, #191792 -32.22%, #6089F3 100%);
            box-shadow:none;
          }

          .one-click-btn:after{
            content:"";
            position:absolute;
            top:-1px;
            right:-1px;
            left:-1px;
            bottom:-1px;
            z-index:0;
            opacity:0;
            transition:0.3s;
            background: #4862D2;
            border-radius:0.5rem;
          }

          .one-click-btn span{
            position:relative;
            z-index:1;
            transition:0.3s;
          }

          .mobile{
            display:none;
          }

          @media (hover:hover){
            .call-btn:hover:after{
              opacity:0;
            }
            .call-btn:hover:before{
              opacity:1;
            }

            .one-click-btn:hover:after{
              opacity:1;
            }
            .one-click-btn:hover span{
              color:#fff;
            }
          }

          @media screen and (max-width:900px){
            .good-page__main{
              flex-direction:column;
              align-items:center;
            }
            .good-main__imgs{
              margin-bottom:3rem;
              width:100%;
              max-width:600px;
            }

            .good-main__big-img img{
              height:20rem;
            }

            .good-main__big-img{
              height:30rem;
            }

            .good-main__title-and-logo{
              display:none;
            }

            .good-main__description{
              width:100%;
            }
            .non-visible{
              display:none;
            }
            .good-main__long-descrription{
              width:100%;
              max-width:none;
            }
            .good-main__masters{
              margin-top:5rem;
            }
            .mobile{
              display:block;
              width:100%;
            }
          }

          @media screen and (max-width:600px){
            .good-main__one-click-btn{
              width:100%;
              margin-top:2rem;
            }

            .good-main__in-cart-btn, .one-click-btn2{
              width:calc(100% - 14rem)
            }

            .one-click-btn2{
              margin-top:0;
            }
          }
      `}</style>
    </>
  )
}

export default GoodMain;
