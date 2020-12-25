import {useState} from "react";
import {reachGoal} from "../../analytics/analytics";

const StockSlide = (props) =>{

  const [fill, setFill] = useState("#004990");

  return(
    <>
      <div className="slide">
           <div className="slide-content">
               <p className="slide__subtitle">{props.subtitle}</p>
               <p className="slide__title"><img src="/img/landing/stock-image.png" alt="Гейзер"/>{props.title}</p>
               <p className="slide__text">• Бесплатная доставка <br/> + Санация фильтра в подарок</p>
               <div className="old-and-new-price">
                 <p className="new-price">Цена со скидкой <br/> <span>{props.newPrice} <i style = {{fontSize:"21px"}}className="fas fa-ruble-sign"></i></span></p>
                 <p className="old-price">Старая цена <br/> <span>{props.oldPrice} <i style = {{fontSize:"15px"}}className="fas fa-ruble-sign"></i></span></p>
               </div>

               <a href="tel:+74957446181" className="slide__btn-outer" onClick={() => reachGoal(`clickStock${props.globalBrand}`)}>
                 <div className="slide__btn"
                    onMouseEnter={() => setFill("#fff")} onMouseLeave={() => setFill("#004990")}>
                    <span>Участвовать в акции</span>
                    <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M-6.11317e-07 5.08388L10.9071 5.08389L8.01315 8.17439L8.78624 9L13 4.5L8.78625 5.85296e-07L8.01315 0.825614L10.9071 3.91612L-5.09227e-07 3.91612L-6.11317e-07 5.08388Z" fill={fill}/>
                    </svg>
                 </div>
               </a>
           </div>

           <div className="slide__circle-outer">
             <div className="slide__circle-inner"></div>
           </div>

           <img src={props.img} alt="" className="slide__img"/>

           <p className="slide__discount">Скидка <br/> <span>{props.discount} </span></p>

      </div>


      <style jsx>{`
        .slide{
          width:20%;
          font-size: 40px;
          padding:9rem 0 12rem 9rem;
          background:#fff;
          position:relative;
          overflow:hidden;
        }

        .slide-content{
          position:Relative;
          z-index:10;
        }

        .slide__subtitle{
          font-weight: bold;
          font-size: 24px;
          color: #505050;
          margin:0 0 2.5rem 0;
        }

        .slide__title{
          margin:0;
          width:35rem;
          height:4.3rem;
          background: #004990;
          margin-bottom:3rem;
          display:flex;
          align-items:center;
          font-weight: 500;
          font-size: 16px;
          color: #FFFFFF;
        }

        .slide__title img {
          margin:0 2rem;
        }

        .slide__text{
          font-weight: normal;
          font-size: 20px;
          color: #424242;
        }

        .old-and-new-price{
          display:flex;
          align-items:Center;
          margin-bottom:4.5rem;
        }

        .old-price, .new-price{
          font-weight: normal;
          font-size: 16px;
          line-height: 25px;
          color: #1F1F1F;
        }

        .new-price{
          margin-right:4.7rem;
        }

        .new-price span{
          font-weight: bold;
          font-size: 24px;
          color: #23549E;
        }

        .old-price span{
          font-weight: bold;
          font-size: 16px;
          text-decoration-line: line-through;
          color: #9E2323;
        }

        .slide__btn{
          width:100%;
          max-width:232px;
          border: 2px solid #004990;
          height:4rem;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
          color: #424242;
          cursor:pointer;
          position:relative;
        }

        .slide__btn span{
          margin-right:2.6rem;
          position:relative;
          z-index:5;
          transition:0.3s;
        }

        .slide__btn-outer{
          text-decoration:none;
          display:block;
        }

        .slide__btn svg{
          position:relative;
          z-index:5;
          transition:0.2s;
        }

        .slide__btn:after{
          content:"";
          position:absolute;
          background:#004990;
          top: 0;right: 0;bottom: 0;left:0;
          z-index:0;
          opacity:0;
          transition:0.3s;
        }

        .slide__circle-outer{
          height:85rem;
          width:85rem;
          background:#fff;
          border-radius:50%;
          border:20px solid #E2EEFB;
          display:flex;
          align-items:center;
          justify-content:center;
          position:absolute;
          top:0;
          right:-10rem;
          z-index:0;
        }

        .slide__circle-inner{
          height:81.5rem;
          width:81.5rem;
          background:#fff;
          border-radius:50%;
          border: 150px solid #C9DEF3;
        }

        .slide__img{
          position:absolute;
          z-index:1;
          width:22.6rem;
          top:15rem;
          right:41.6rem;
          height:200px;
          width:auto;
        }

        .slide__discount{
          font-weight: 600;
          font-size: 24px;
          line-height: 29px;
          text-align: right;
          color: #424242;
          position:absolute;
          bottom:0;
          right:11rem;
          z-index:1;
        }

        .slide__discount span{
          font-weight: 600;
          font-size: 72px;
          line-height: 88px;
          text-align: right;
          color: #DD2C2C;
        }

        @media(hover:hover){
          .slide__btn:hover:after{
            opacity:1;
          }
          .slide__btn:hover span{
            color:#fff;
          }
          .slide__btn:hover svg{
            transform:translateX(10px);
          }
        }

        @media screen and (max-width:1150px){
          .slide__img{
            top:8rem;
            right:15%;
          }

          .slide__discount{
            right: 18%;
            bottom:5rem;
          }
        }

        @media screen and (max-width:1150px){
          .slide__img{
            right:5%;
          }
          .slide__discount{
            right:8%;
          }
        }

        @media screen and (max-width:750px){
          .old-and-new-price{
            margin-top:16.5rem;
          }

          .slide__img{
            height:11rem;
            width:auto;
            left:2rem;
            top:22rem;
          }

          .slide{
            padding:2rem 2rem 5rem 2rem;
          }

          .slide__circle-outer{
            left:10%;
          }
          .slide__discount{
            top:20rem;
            left:18rem;
            right:auto;
          }
        }

        @media screen and (max-width:500px){
          .slide__subtitle{
            font-size:18px;
            margin:2rem 0 1.7rem 0;
          }
          .slide__text{
            font-size:16px;
          }
        }

        @media screen and (max-width:410px){
          .slide__title{
            width:100%;
          }
          .slide__discount{
            font-size:18px;
            line-height:10px;
            top:21rem;
            left:20rem;
          }
          .slide__discount span{
            font-size:35px;
          }
          .slide__img{
            top:21rem;
          }
          .old-and-new-price{
            margin-top:14.5rem;
            margin-bottom:2rem;
          }
        }
      `}</style>
    </>
  )
}

export default StockSlide;
