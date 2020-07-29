import ReviewItem from "./reviewItem";
import {useState} from "react";
import ReviewsSliderPoint from "./reviews-slider-point";

const AllReviews = () => {

  const [activePage, setActivePage] = useState(0);
  let translate="translateX(0)";

  if (activePage === 1) translate = "translateX(calc(-25% - 2rem))";
  if (activePage === 2) translate = "translateX(calc(-50% - 4rem))";

  const arrowClickHandler = to => {
    if (activePage === 2 && to === 1) setActivePage(0);
    else if (activePage === 0 && to === -1) setActivePage(2);
    else setActivePage(activePage + to);
  }

  return(
    <div className="all-reviews">
       <h2 className="all-reviews__title">«Мос — фильтр»  |  Последние отзывы</h2>
       <p className="all-reviews__text">За 8 лет своей деятельности мы помогли десяткам тысяч людей по всей в Москве.
       Большинство клиентов остаются с нами по сей день. Вы можете убедиться в этом прочитав их честные отзывы. </p>

       <div className="all-reviews__main">
         <div className="all-reviews-track">
             <div className="all-reviews__page">
                 <ReviewItem
                 photo = "/img/reviews/review1.png"
                 title = "Павел | Замена картриджей на фильтре Аквафор Морион DWM-10"
                 text = "Спасибо Иван, очень приятно с вами иметь дело) ещё в скором времени обращусь к вам по другой квартире"/>
                  <ReviewItem
                  photo = "/img/reviews/review2.png"
                  title = "Шевченко Наталья | Замена картриджей на фильтре Аквафор Осмо-50"
                  text = "Спасибо огромное мастеру Ивану за отличную работу по замене картриджей фильтра, за его внимательное отношение к клиентам! С уважением, Шевченко Наталья Геннадьевна."/>
                  <ReviewItem
                  photo = "/img/reviews/review3.png"
                  title = "Татьяна | Покупка и установка осмоса Atoll A-450 Compact"
                  text = "Спасибо огромное за установку фильтра. Вы настоящий профессионал своего дела. Мне пришлось столкнуться с множеством сантехников и нечестных фирм, которые..."/>
                  <ReviewItem
                  photo = "/img/reviews/review4.png"
                  title = "Ольга | Замена картриджей на фильтре Аквафор Морион DWM-101"
                  text = "Я довольна Вашей работой! Спасибо! Вас рекомендую своим знакомым. Вода — это жизнь!"/>
                  <ReviewItem
                  photo = "/img/reviews/review5.png"
                  title = "Светлана | Покупка и установка фильтра Atoll A-550 STD"
                  text = "Спасибо большое мастер довольно быстро всё починил исправил поменял и объяснил. Очень довольны. Будем обращаться в Вашу фирму и дальше."/>
                  <ReviewItem
                  photo = "/img/reviews/review4.png"
                  title = "Ирина | Замена картриджей на фильтре Аквафор Кристалл ЭКО "
                  text = "Ваня, спасибо за всё! Менять фильтры будем только у вас"/>
             </div>
             <div className="all-reviews__page">
                 <ReviewItem
                 photo = "/img/reviews/review1.png"
                 title = "Павел | Замена картриджей на фильтре Аквафор Морион DWM-10"
                 text = "Спасибо Иван, очень приятно с вами иметь дело) ещё в скором времени обращусь к вам по другой квартире"/>
                  <ReviewItem
                  photo = "/img/reviews/review2.png"
                  title = "Шевченко Наталья | Замена картриджей на фильтре Аквафор Осмо-50"
                  text = "Спасибо огромное мастеру Ивану за отличную работу по замене картриджей фильтра, за его внимательное отношение к клиентам! С уважением, Шевченко Наталья Геннадьевна."/>
                  <ReviewItem
                  photo = "/img/reviews/review3.png"
                  title = "Татьяна | Покупка и установка осмоса Atoll A-450 Compact"
                  text = "Спасибо огромное за установку фильтра. Вы настоящий профессионал своего дела. Мне пришлось столкнуться с множеством сантехников и нечестных фирм, которые..."/>
                  <ReviewItem
                  photo = "/img/reviews/review4.png"
                  title = "Ольга | Замена картриджей на фильтре Аквафор Морион DWM-101"
                  text = "Я довольна Вашей работой! Спасибо! Вас рекомендую своим знакомым. Вода — это жизнь!"/>
                  <ReviewItem
                  photo = "/img/reviews/review5.png"
                  title = "Светлана | Покупка и установка фильтра Atoll A-550 STD"
                  text = "Спасибо большое мастер довольно быстро всё починил исправил поменял и объяснил. Очень довольны. Будем обращаться в Вашу фирму и дальше."/>
                  <ReviewItem
                  photo = "/img/reviews/review4.png"
                  title = "Ирина | Замена картриджей на фильтре Аквафор Кристалл ЭКО "
                  text = "Ваня, спасибо за всё! Менять фильтры будем только у вас"/>
             </div>
             <div className="all-reviews__page">
                 <ReviewItem
                 photo = "/img/reviews/review1.png"
                 title = "Павел | Замена картриджей на фильтре Аквафор Морион DWM-10"
                 text = "Спасибо Иван, очень приятно с вами иметь дело) ещё в скором времени обращусь к вам по другой квартире"/>
                  <ReviewItem
                  photo = "/img/reviews/review2.png"
                  title = "Шевченко Наталья | Замена картриджей на фильтре Аквафор Осмо-50"
                  text = "Спасибо огромное мастеру Ивану за отличную работу по замене картриджей фильтра, за его внимательное отношение к клиентам! С уважением, Шевченко Наталья Геннадьевна."/>
                  <ReviewItem
                  photo = "/img/reviews/review3.png"
                  title = "Татьяна | Покупка и установка осмоса Atoll A-450 Compact"
                  text = "Спасибо огромное за установку фильтра. Вы настоящий профессионал своего дела. Мне пришлось столкнуться с множеством сантехников и нечестных фирм, которые..."/>
                  <ReviewItem
                  photo = "/img/reviews/review4.png"
                  title = "Ольга | Замена картриджей на фильтре Аквафор Морион DWM-101"
                  text = "Я довольна Вашей работой! Спасибо! Вас рекомендую своим знакомым. Вода — это жизнь!"/>
                  <ReviewItem
                  photo = "/img/reviews/review5.png"
                  title = "Светлана | Покупка и установка фильтра Atoll A-550 STD"
                  text = "Спасибо большое мастер довольно быстро всё починил исправил поменял и объяснил. Очень довольны. Будем обращаться в Вашу фирму и дальше."/>
                  <ReviewItem
                  photo = "/img/reviews/review4.png"
                  title = "Ирина | Замена картриджей на фильтре Аквафор Кристалл ЭКО "
                  text = "Ваня, спасибо за всё! Менять фильтры будем только у вас"/>
             </div>


         </div>
       </div>

       <div className="all-reviews__nav">
           <div
                className="slider__arrow slider__arrow-left"
                onClick={() => arrowClickHandler(-1)}>
                <img src="/img/slider/arrow-left.png" alt="arrow-left"/>
           </div>

           <div className="nav__points">
              <ReviewsSliderPoint id={0} setActivePage={setActivePage} activePage={activePage}/>
              <ReviewsSliderPoint id={1} setActivePage={setActivePage} activePage={activePage}/>
              <ReviewsSliderPoint id={2} setActivePage={setActivePage} activePage={activePage}/>
           </div>

           <div
                className="slider__arrow slider__arrow-right"
                onClick={() => arrowClickHandler(1)}>
                <img src="/img/slider/arrow-right.png" alt="arrow-left"/>
           </div>
       </div>



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
           margin-bottom:5rem;
         }

         .all-reviews__main{
            width:100%;
            position:Relative;
            overflow:hidden;
         }

         .all-reviews__page{
           display:flex;
           justify-content:space-between;
           flex-wrap:wrap;
           width:25%;
           margin-left:2rem;
         }

         .all-reviews-track{
           width:400%;
           display:flex;
           transition:0.5s;
           transform:${translate};
           margin-left:-2rem;
         }

         .all-reviews__nav{
           margin-top:4rem;
           display:flex;
           align-items:center;
           justify-content:space-between;
         }

         .nav__points{
           display:flex;
           align-items:center;
           justify-content:center;
         }

         .slider__arrow{
           cursor:pointer;
           background: #FFFFFF;
           box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
           width:5rem;
           height:5rem;
           border-radius:50%;
           display:flex;
           align-items:center;
           justify-content:center;
         }

       `}</style>
    </div>
  )
}

export default AllReviews;
