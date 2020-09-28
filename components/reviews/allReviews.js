import ReviewItem from "./reviewItem";
import {useState} from "react";
import ReviewsSliderPoint from "./reviews-slider-point";
import ModalWithAlertProvider from "../modal/modalWithAlertProvider";

const AllReviews = () => {

  const [activePage, setActivePage] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  let translate="translateX(0)";

  if (activePage === 1) translate = "translateX(calc(-20% - 2rem))";
  if (activePage === 2) translate = "translateX(calc(-40% - 4rem))";
  if (activePage === 3) translate = "translateX(calc(-60% - 6rem))";

  const arrowClickHandler = to => {
    if (activePage === 3 && to === 1) setActivePage(0);
    else if (activePage === 0 && to === -1) setActivePage(3);
    else setActivePage(activePage + to);
  }

  const [activeScreen, setActiveScreen] = useState("/img/reviews/screen1.png");

  return(
    <div className="all-reviews">

      {isModalOpen ? <ModalWithAlertProvider
                        setModalOpen={setModalOpen}
                        title = "Заказать обратный звонок"
                        modalType = {6}
                        img={activeScreen}
                     />
                     : null}

       <h2 className="all-reviews__title">«Мос — фильтр»  |  Последние отзывы</h2>
       <p className="all-reviews__text">За 8 лет своей деятельности мы помогли десяткам тысяч людей по всей в Москве.
       Большинство клиентов остаются с нами по сей день. Вы можете убедиться в этом прочитав их честные отзывы. </p>

       <div className="all-reviews__main">
         <div className="all-reviews-track">
             <div className="all-reviews__page">
                 <ReviewItem
                 onChoose={setActiveScreen}
                 screenShot = "/img/reviews/screen1.png"
                 setModalOpen={setModalOpen}
                 photo = "/img/reviews/review1.png"
                 title = "Павел | Замена картриджей на фильтре Аквафор Морион DWM-10"
                 text = "Спасибо Иван, очень приятно с вами иметь дело) ещё в скором времени обращусь к вам по другой квартире"/>
                  <ReviewItem
                  screenShot = "/img/reviews/screen2.png"
                  onChoose={setActiveScreen}
                  setModalOpen={setModalOpen}
                  photo = "/img/reviews/review2.png"
                  title = "Шевченко Наталья | Замена картриджей на фильтре Аквафор Осмо-50"
                  text = "Спасибо огромное мастеру Ивану за отличную работу по замене картриджей фильтра, за его внимательное отношение к клиентам! С уважением, Шевченко Наталья Геннадьевна."/>
                  <ReviewItem
                  screenShot = "/img/reviews/screen3.png"
                  onChoose={setActiveScreen}
                  setModalOpen={setModalOpen}
                  photo = "/img/reviews/review3.png"
                  title = "Татьяна | Покупка и установка осмоса Atoll A-450 Compact"
                  text = "Спасибо огромное за установку фильтра. Вы настоящий профессионал своего дела. Мне пришлось столкнуться с множеством сантехников и нечестных фирм, которые..."/>
                  <ReviewItem
                  screenShot = "/img/reviews/screen4.png"
                  onChoose={setActiveScreen}
                  setModalOpen={setModalOpen}
                  photo = "/img/reviews/review4.png"
                  title = "Ольга | Замена картриджей на фильтре Аквафор Морион DWM-101"
                  text = "Я довольна Вашей работой! Спасибо! Вас рекомендую своим знакомым. Вода — это жизнь!"/>
             </div>
             <div className="all-reviews__page">
                 <ReviewItem
                 screenShot = "/img/reviews/screen5.png"
                 onChoose={setActiveScreen}
                 setModalOpen={setModalOpen}
                 photo = "/img/reviews/review5.png"
                 title = "Егор | Установка фильтра Барьер"
                 text = "Спасибо за установку фильтра барьер. Всё было быстро и качественно!"/>
                 <ReviewItem
                 screenShot = "/img/reviews/screen6.png"
                 onChoose={setActiveScreen}
                 setModalOpen={setModalOpen}
                 photo = "/img/reviews/review6.png"
                 title = "Ирина | Замена картриджей на фильтре Аквафор Кристалл ЭКО "
                 text = "Ваня, спасибо за всё! Менять фильтры будем только у вас"/>
                 <ReviewItem
                 screenShot = "/img/reviews/screen7.png"
                 onChoose={setActiveScreen}
                 setModalOpen={setModalOpen}
                 photo = "/img/reviews/review7.png"
                 title = "Ольга | Установка фильтра Аквафор Морион DWM-101s"
                 text = "Хочется поблагодарить Ивана за установку фильтра, теперь пьём чистую воду! Всё было сделано быстро и профессионально! Спасибо, рекомендую!"/>
                  <ReviewItem
                  screenShot = "/img/reviews/screen8.png"
                  onChoose={setActiveScreen}
                  setModalOpen={setModalOpen}
                  photo = "/img/reviews/review8.png"
                  title = "Евгения | Замена фильтров на осмосе Гейзер Престиж"
                  text = "Здравствуйте! Мастером очень довольна, уже не в первый раз он нам меняет фильтр, никаких нареканий. Приехал по договорённости, без опозданий, всё оперативно и ..."/>
             </div>
             <div className="all-reviews__page">
                 <ReviewItem
                 screenShot = "/img/reviews/screen9.png"
                 onChoose={setActiveScreen}
                 setModalOpen={setModalOpen}
                 photo = "/img/reviews/review9.png"
                 title = "Елена Викторона | Установка системы обратного осмоса Atoll A-550 Патриот"
                 text = "Здравствуйте. Всё прошло быстро и безболезненно, как врач и обещал. Мы с моим краником и фильтрами остались довольны. Будем рады Вас видеть, через пол года, как мастер и говорил."/>
                 <ReviewItem
                 screenShot = "/img/reviews/screen10.png"
                 onChoose={setActiveScreen}
                 setModalOpen={setModalOpen}
                 photo = "/img/reviews/review10.png"
                 title = "Наталья | Установка системы обратного осмоса Atoll A-450 Compact"
                 text = "Мне всё понравилось, получилось быстро и качественно. Приятно, что взяли надо мной шефство и готовы напоминать о замене..."/>
                 <ReviewItem
                 screenShot = "/img/reviews/screen11.png"
                 onChoose={setActiveScreen}
                 setModalOpen={setModalOpen}
                 photo = "/img/reviews/review11.png"
                 title = "Эльвира | Замена картриджей на фильтре Atoll 550-std"
                 text = "Работа мастера без нареканий, вода хороша, ничего не течёт разьяснения по промывке фильтры ясные и всё прошло успешно! Спасибо!"/>
                 <ReviewItem
                 screenShot = "/img/reviews/screen12.png"
                 onChoose={setActiveScreen}
                 setModalOpen={setModalOpen}
                 photo = "/img/reviews/review12.png"
                 title = "Елена | Замена картриджей на фильтре Aquafilter RX5"
                 text = "Добрый день! Сегодня нам заменили фильтры Аквафор Трио. Всё понравилось, будем обращаться в следующий раз только к вам..."/>
             </div>
             <div className="all-reviews__page">
                 <ReviewItem
                 screenShot = "/img/reviews/screen13.png"
                 onChoose={setActiveScreen}
                 setModalOpen={setModalOpen}
                 photo = "/img/reviews/review13.png"
                 title = "Анатолий| Замена картриджей в фильтре Аквафор Кристалл Осмо"
                 text = "Заранее были проинформированы о времени приезда. Работа выполнена быстро, качественно. Всем рекомендуем!"/>
                  <ReviewItem
                  screenShot = "/img/reviews/screen14.png"
                  onChoose={setActiveScreen}
                  setModalOpen={setModalOpen}
                  photo = "/img/reviews/review14.png"
                  title = "Даниил | Установка системы обратного осмоса Atoll A-550 Патриот"
                  text = "Спасибо, всё отлично:) главное вы есть в вотсапе и приезжаете вовремя:) с фильтром, надеюст тоже всё в порядке"/>
                  <ReviewItem
                  screenShot = "/img/reviews/screen15.png"
                  onChoose={setActiveScreen}
                  setModalOpen={setModalOpen}
                  photo = "/img/reviews/review15.png"
                  title = "Инна | Покупка картриджей для Аквафор Морион DWM-10"
                  text = "Добрый вечер, Иван! Да, всё прекрасно! Спасибо на работу."/>
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
              <ReviewsSliderPoint id={3} setActivePage={setActivePage} activePage={activePage}/>
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
           width:100%;
           max-width:60rem;
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
           width:20%;
           margin-left:2rem;
         }

         .all-reviews-track{
           width:500%;
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

         @media screen and (max-width:600px){
           .all-reviews__title{
             text-align: center;
           }
         }


       `}</style>
    </div>
  )
}

export default AllReviews;
