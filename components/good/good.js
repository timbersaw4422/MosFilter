import Router from "next/router";
import {useState} from "react";

const Good = (props) =>{

  const clickHandler = () => {
    Router.push("/goods/[id]", `/goods/${props.id}`).then(() => window.scrollTo (0, 0));
  }

  const [zIndex, setZIndex] = useState(0);

  const mouseEnterHandler = () => {
     setZIndex(50);
  }

  const mouseLeaveHandler = () => {
     setTimeout(() => {
       setZIndex(0);
     }, 100);
  }

  return(
    <div className="good" onClick = {clickHandler} onMouseEnter={mouseEnterHandler} onMouseLeave = {mouseLeaveHandler}>
          <div className="good-content">
              <img src={props.img} alt="" className="good__img"/>
              <p className="category-title">{props.categoryTitle}</p>
              <h4 className="good__title">{props.goodTitle}</h4>
              <div className="good__on-stock">
                 <img src="/img/checkMark.png" alt="checkMark" className="on-stock-status"/>
                 <span className="on-stock-title">Есть в наличии</span>
              </div>
              <p className="good__price">{props.price}&nbsp;₽</p>
          </div>

          <div className="go-btn">
              <span>Подробнее</span>
          </div>

          <div className="good-after">
          </div>


      <style jsx>{`
         .good{
           width:${props.width};
           background: #FFFFFF;
           margin:${props.margin};
           padding:2rem 1rem 1rem 1rem;
           text-align:center;
           cursor:pointer;
           transition:0.2s;
           position:relative;
           z-index:${zIndex};
         }

         .good-content{
           position:relative;
           z-index:100;
         }

         .good-after{
           position:absolute;
           content:"";
           box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.13);
           top:0;
           left:0;
           right:0;
           bottom:0;
           border-radius: 0.5rem;
           transition:0.3s;
           transform-origin:top;
           background:#fff;
           z-index:1;
           overflow:hidden;
         }

         .good__img{
           width:auto;
           height:12rem;
           margin-bottom:2rem;
         }

         .category-title{
           font-size: 14px;
           line-height: 19px;
           color: #333333;
           margin-bottom:0.5rem;
         }

         .good__title{
           font-weight: 600;
           font-size: 14px;
           line-height: 19px;
           color: #333333;
           margin-top:0;
           margin-bottom:0;
           height:5rem;
         }

         .good__on-stock{
           display:flex;
           justify-content:center;
           align-items:center;
           margin-bottom:4rem;
         }

         .on-stock-title{
           margin-left:0.5rem;
         }

         .good__price{
           font-weight: bold;
           font-size: 22px;
           color: #4E4E4E;
         }

         .go-btn{
            width:60%;
            height:4rem;
            display:flex;
            align-items:center;
            justify-content:center;
            font-weight: 600;
            position:absolute;
            cursor:pointer;
            position:absolute;
            bottom:-5rem;
            left:20%;
            opacity:0;
            transition:0.3s;
            z-index:51;
         }

         .go-btn:before, .go-btn:after{
           content:"";
           position:absolute;
           top:0;
           left:0;
           right:0;
           bottom:0;
           z-index:0;
           border-radius: 0.5rem;
           box-shadow: 0px 4px 10px rgba(45, 82, 214, 0.41);
           transition:0.2s;
         }

         .go-btn:after{
           opacity:1;
           background: linear-gradient(180deg, #6089F3 0%, #191792 100%);
         }

         .go-btn:before{
           opacity:0;
           background: linear-gradient(180deg, #191792 0%, #6089F3 100%);
           border: 2px solid #2B54BE;
         }

         .go-btn span{
           position:relative;
           z-index:1;
           font-weight: 600;
           font-size: 14px;
           color: #FFFFFF;
         }

         .go-btn:active :before{
           background: linear-gradient(180deg, #191792 -32.22%, #6089F3 100%);
           box-shadow:none;
         }

         @media(hover:hover){
           .good:hover .go-btn{
             opacity:1;
           }

           .good:hover .good-after{
             transform:scaleY(1.25)
           }

           .go-btn:hover:after{
             opacity:0;
           }
           .go-btn:hover:before{
             opacity:1;
           }
         }

         @media screen and (max-width:600px){
           .good{
             width:48.5%;
             margin-right:1.5%;
           }
         }

      `}</style>
    </div>
  )
}

export default Good;
