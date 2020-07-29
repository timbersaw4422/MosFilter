import ReviewItem from "./reviewItem";

const Last2Reviews = () => {
  return(
    <>
    <div className="last-2-reviews">
       <ReviewItem
           photo = "/img/reviews/review1.png"
           title = "Павел | Замена картриджей на фильтре Аквафор Морион DWM-10"
           text = "Спасибо Иван, очень приятно с вами иметь дело) ещё в скором времени обращусь к вам по другой квартире"/>
        <ReviewItem
           photo = "/img/reviews/review2.png"
           title = "Шевченко Наталья | Замена картриджей на фильтре Аквафор Осмо-50"
           text = "Спасибо огромное мастеру Ивану за отличную работу по замене картриджей фильтра, за его внимательное отношение к клиентам! С уважением, Шевченко Наталья Геннадьевна."/>
    </div>

    <a className="all-reviews-link" href="">Смотреть все отзывы</a>

    <style jsx>{`
      .last-2-reviews{
        display:flex;
        justify-content:space-between;
      }
      .all-reviews-link{
        font-size: 16px;
        text-decoration-line: underline;
        color: #424242;
        float:right;
      }
    `}</style>
    </>
  )
}

export default Last2Reviews;
