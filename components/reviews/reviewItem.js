import {useState} from "react";

const ReviewItem = ({photo, title, text, setModalOpen, onChoose, screenShot}) => {

  const clickBtnHandler = () => {
    setModalOpen(true);
    onChoose(screenShot);
  }

  return(
    <>
        <div className="review-item">

           <div className="review-item__photo-and-title">
               <img src={photo} alt="review"/>
               <p className="review-item__title">{title}</p>
           </div>
           <div className="review-item__text">{text}</div>
           <div className="review-item__btn" onClick={clickBtnHandler}><span>Смотреть скриншот</span></div>
        </div>


       <style jsx>{`
         .review-item{
           background: #FFFFFF;
           border: 1px solid #EEEEEE;
           box-sizing: border-box;
           border-radius: 0.5rem;
           padding:4rem;
           width:calc(50% - 1rem);
           margin-bottom:2rem;
         }

         .review-item__photo-and-title{
           display:flex;
           align-items:center;
           justify-content:space-between;
           margin-bottom:2.5rem;
         }

          .review-item__title{
            width:70%;
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            color: #424242;
          }

          .review-item__text{
            font-size: 12px;
            line-height: 16px;
            color: #424242;
            height:7rem;
          }

          .review-item__btn{
            font-weight: 600;
            font-size: 12px;
            line-height: 16px;
            display:flex;
            align-items:center;
            justify-content:center;
            width:20rem;
            height:4rem;
            border: 2px solid #4862D2;
            border-radius: 2rem;
            cursor:pointer;
            position:relative;
          }

          .review-item__btn span{
            position:relative;
            z-index:2;
            color: #424242;
            transition:0.3s;
          }

          .review-item__btn:after{
            content:"";
            position:absolute;
            top:-1px;
            left:-1px;
            right:-1px;
            bottom:-1px;
            background:#4862D2;
            z-index:1;
            transition:0.3s;
            border-radius: 2rem;
            opacity:0;
          }

          @media(hover:hover){
            .review-item__btn:hover:after{
               opacity:1;
            }
            .review-item__btn:hover span{
               color:#fff;
            }
          }
       `}</style>
    </>
  )
}

export default ReviewItem;
