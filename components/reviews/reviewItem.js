const ReviewItem = ({photo, title, text}) => {
  return(
    <div className="review-item">
       <div className="review-item__photo-and-title">
           <img src={photo} alt="review"/>
           <p className="review-item__title">{title}</p>
       </div>
       <div className="review-item__text">{text}</div>
       <div className="review-item__btn">Смотреть скриншот</div>

 

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
            color: #424242;
            display:flex;
            align-items:center;
            justify-content:center;
            width:20rem;
            height:4rem;
            border: 2px solid #4862D2;
            border-radius: 2rem;
            cursor:pointer;
          }
       `}</style>
    </div>
  )
}

export default ReviewItem;
