import ReviewItem from "./reviewItem";

const AllReviews = () => {
  return(
    <div className="all-reviews">
       <h2 className="all-reviews__title">«Мос — фильтр»  |  Последние отзывы</h2>
       <p className="all-reviews__text">За 8 лет своей деятельности мы помогли десяткам тысяч людей по всей в Москве.
       Большинство клиентов остаются с нами по сей день. Вы можете убедиться в этом прочитав их честные отзывы. </p>




       <style jsx>{`
         .all-reviews__title{
           font-weight: 600;
           font-size: 24px;
           color: #424242;
           margin-top:4rem;
           margin-bottom:4rem;
         }

         .all-reviews__text{
           font-size: 14px;
           line-height: 19px;
           color: #424242;
           width:65%;
         }
       `}</style>
    </div>
  )
}

export default AllReviews;
