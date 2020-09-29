import ReviewItem from "../reviews/reviewItem";
import ModalWithAlertProvider from "../modal/modalWithAlertProvider";
import {useState} from "react";

const ForBusiness = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  return(
    <div className="business">

      {isModalOpen ? <ModalWithAlertProvider
                      setModalOpen={setModalOpen}
                      title = "Получить коммерческое предложение"
                      modalType = {10}
                      subtitle2="Заполните и отправьте форму, в ближайшее время на ваш email будет высланно письмо с коммерческим предложением."
                   />
                   : null}

       <h2 className="business__title">«Мос — фильтр»  |  Для бизнеса</h2>

       <div className="business-flex">
          <div className="business-flex__left">
              <p className="business__text">Наша компания предлагает <strong>комплексное или частичное обслуживание фильтров </strong>и систем водоочистки для малого
              и среднего бизнеса в Москве и Подмосковье по выгодной цене. Быстрая и качественная замена картриджей в фильтрах, установка и ремонт
              систем обратного осмоса. Работая с нами всё будет заебись.</p>
              <div className="horizontal-shape" style= {{marginTop:"4rem"}}></div>
              <h3 className="business__subtitle">Корпоративным клиентам мы предлагаем:</h3>
              <p className="about__paragraph with-point">Плановая замена картриджей в фильтрах</p>
              <p className="about__paragraph with-point">Установка систем обратного осмоса</p>
              <p className="about__paragraph with-point">Любые ремонтные работы</p>
              <p className="about__paragraph with-point">Обслуживание систем водоподготовки</p>
              <div className="service-btns">
                <div className="service-btn service-btn1"onClick = {() => setModalOpen(true)}><span>Получить коммерческое предложение</span></div>
                <div className="service-btn service-btn2"onClick = {() => window.open("https://wa.me/79325306046", "_blank")}><span>Задать вопрос специалисту</span></div>
              </div>
          </div>
          <div className="business-flex__right">
                <svg width="121" height="141" viewBox="0 0 121 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M55.8109 1.90822C54.5674 3.15596 53.8709 4.83351 53.8709 6.58071C53.8709 8.32791 54.5674 10.0055 55.8109 11.2532L93.8152 48.6331C100.172 54.9138 104.561 62.8574 106.462 71.5198C108.362 80.1823 107.694 89.1993 104.537 97.4994C101.38 105.799 95.8668 113.033 88.6521 118.342C81.4374 123.65 72.8249 126.809 63.8382 127.444C54.8514 128.079 45.8684 126.162 37.9565 121.923C30.0447 117.683 23.5367 111.298 19.2062 103.527C14.8756 95.7559 12.9045 86.9252 13.5272 78.0845C14.1499 69.2438 17.3402 60.7649 22.7188 53.6553L32.543 62.9367C28.0764 69.7641 26.3203 77.9695 27.6097 85.9885C28.899 94.0076 33.1436 101.28 39.5343 106.418C45.9249 111.557 54.0148 114.202 62.2614 113.851C70.508 113.499 78.3348 110.175 84.2495 104.512C87.3821 101.452 89.8681 97.8118 91.5647 93.8023C93.2612 89.7928 94.1346 85.4928 94.1346 81.1499C94.1346 76.807 93.2612 72.507 91.5647 68.4975C89.8681 64.4879 87.3821 60.848 84.2495 57.7874L65.2474 39.0974C64.6235 38.4838 63.8829 37.9971 63.0678 37.665C62.2527 37.333 61.3791 37.162 60.4968 37.162C59.6146 37.162 58.741 37.333 57.9259 37.665C57.1108 37.9971 56.3702 38.4838 55.7463 39.0974C55.1225 39.711 54.6276 40.4395 54.29 41.2412C53.9523 42.0429 53.7786 42.9022 53.7786 43.7699C53.7786 44.6377 53.9523 45.497 54.29 46.2987C54.6276 47.1004 55.1225 47.8288 55.7463 48.4424L74.7485 67.1324C78.3271 70.8896 80.28 75.8683 80.1947 81.016C80.1093 86.1637 77.9923 91.077 74.291 94.7175C70.5898 98.358 65.5943 100.44 60.3606 100.524C55.127 100.608 50.0652 98.6872 46.2452 95.1674C42.4838 91.4401 40.3731 86.4015 40.3731 81.1499C40.3731 75.8983 42.4838 70.8596 46.2452 67.1324C46.9013 66.5371 47.4248 65.8146 47.783 65.0104C48.1411 64.2063 48.326 63.3378 48.326 62.4599C48.326 61.582 48.1411 60.7136 47.783 59.9094C47.4248 59.1052 46.9013 58.3827 46.2452 57.7874L27.2431 39.0974C26.6293 38.4813 25.8945 37.9945 25.0833 37.6667C24.2722 37.3388 23.4017 37.1767 22.5249 37.1903C20.7401 37.1952 19.0264 37.8785 17.742 39.0974C9.27497 47.4165 3.50683 58.0188 1.16734 69.5629C-1.17215 81.1071 0.0221481 93.0743 4.5991 103.951C9.17605 114.827 16.93 124.124 26.8801 130.665C36.8301 137.206 48.529 140.697 60.4968 140.697C72.4647 140.697 84.1636 137.206 94.1136 130.665C104.064 124.124 111.818 114.827 116.394 103.951C120.971 93.0743 122.166 81.1071 119.826 69.5629C117.487 58.0188 111.719 47.4165 103.252 39.0974L65.312 1.90822C64.0434 0.685177 62.3378 0.00012207 60.5614 0.00012207C58.7851 0.00012207 57.0795 0.685177 55.8109 1.90822Z" fill="#0F4C81"/>
                      <path d="M42.8843 31.7866L44.1769 31.4052L45.3403 30.7695L45.8574 30.388C46.024 30.2561 46.1757 30.1069 46.3098 29.943L46.7622 29.498C46.9134 29.3226 47.0436 29.1306 47.15 28.9259C47.4011 28.5875 47.6176 28.2255 47.7963 27.8452L48.1841 26.5738C48.1841 26.5738 48.1841 26.1288 48.1841 25.938C48.216 25.7273 48.216 25.5131 48.1841 25.3023C48.1841 23.6163 47.5032 21.9993 46.2911 20.8072C45.079 19.615 43.4351 18.9452 41.7209 18.9452H41.0746H40.4282C39.9795 19.0041 39.5432 19.1328 39.1356 19.3266L37.9723 19.8988L37.4552 20.2802L36.9381 20.7252L36.5504 21.2338C36.3813 21.3701 36.2483 21.5446 36.1626 21.7423C35.9227 22.1099 35.7068 22.4921 35.5162 22.8866C35.3291 23.269 35.1985 23.6757 35.1284 24.0945C35.1284 24.0945 35.1284 24.5395 35.1284 24.7938V26.0652C35.1284 26.0652 35.1284 26.5102 35.1284 26.7009C35.1976 27.1402 35.3281 27.5681 35.5162 27.9723C35.6949 28.3526 35.9115 28.7146 36.1626 29.053C36.2459 29.2703 36.3785 29.466 36.5504 29.6252L36.9381 30.0702L37.4552 30.5152L37.9723 30.8966L39.1356 31.5323L40.4282 31.9137H43.0136L42.8843 31.7866Z" fill="#0F4C81"/>
                </svg>

                <div>
                   <h2 style={{
                     fontSize:"30px",
                     margin:"0 0",
                     fontSize:"26px",
                     color:"#424242",
                     fontFamily:'Geometria Medium',
                     letterSpacing:"1px"
                   }}>MOS - FILTER</h2>
                   <h2 style={{
                     textTransform:"uppercase",
                     marginTop:"0px",
                     fontSize:"11px",
                     color:"#424242",
                     fontFamily:'Geometria Medium'
                   }}>Обслуживание для бизнеса</h2>
                </div>
          </div>
       </div>

       <div className="horizontal-shape" style= {{marginTop:"2rem"}}></div>
       <h3 className="business__subtitle">Какому бизнесу подходят наши услуги:</h3>
       <div className="business__cards">

         <div className="business__card">
           <div className="card__left">
              <img src="/img/business/business1.png" alt="" className="card__img"/>
           </div>
           <div className="card__right">
              <p className="card__title">Бьюти-индустрия</p>
              <p className="card__text">• Салоны красоты</p>
              <p className="card__text">• Барбершопы</p>
              <p className="card__text">• Частные кабинеты</p>
              <p className="card__text">• Тату студии</p>
           </div>
         </div>

         <div className="business__card">
           <div className="card__left">
              <img src="/img/business/business2.png" alt="" className="card__img"/>
           </div>
           <div className="card__right">
              <p className="card__title">Медицина</p>
              <p className="card__text">• Медицинские центры</p>
              <p className="card__text">• Медицинские кабинеты</p>
              <p className="card__text">• Стоматологии</p>
              <p className="card__text">• Студии массажа</p>
           </div>
         </div>

         <div className="business__card">
           <div className="card__left">
              <img src="/img/business/business3.png" alt="" className="card__img"/>
           </div>
           <div className="card__right">
              <p className="card__title">Общепит</p>
              <p className="card__text">• Кофешопы</p>
              <p className="card__text">• Кафе и рестораны</p>
              <p className="card__text">• Фастфуд</p>
              <p className="card__text">• Кальянные</p>
           </div>
         </div>

         <div className="business__card">
           <div className="card__left">
              <img src="/img/business/business4.png" alt="" className="card__img"/>
           </div>
           <div className="card__right">
              <p className="card__title">Торговля и офисы</p>
              <p className="card__text">• Торговые центры</p>
              <p className="card__text">• Магазины</p>
              <p className="card__text">• Офисы</p>
           </div>
         </div>

         <div className="business__card">
           <div className="card__left">
              <img src="/img/business/business5.png" alt="" className="card__img"/>
           </div>
           <div className="card__right">
              <p className="card__title">Спорт и досуг</p>
              <p className="card__text">• Фитнес-центры</p>
              <p className="card__text">• Йога-студии</p>
              <p className="card__text">• Бассейны</p>
              <p className="card__text">• Спа-спалоны</p>
           </div>
         </div>

       </div>
       <div className="horizontal-shape" style= {{marginTop:"6.5rem"}}></div>

       <h3 className="business__subtitle">Мы гарантируем нашим клиентам:</h3>
       <p className="about__paragraph"><span className="blue">1.</span> Профессиональный и комплексный подход</p>
       <p className="about__paragraph"><span className="blue">2.</span> Своевременное оказание услуг</p>
       <p className="about__paragraph"><span className="blue">3.</span> Гибкое ценообразование формирующеся исходя из состава работ</p>
       <p className="about__paragraph"><span className="blue">4. </span>Полную отчётность</p>
       <p className="about__paragraph"><span className="blue">5. </span>Официальную гарантию на продукцию и услуги</p>
       {
       //<div className="horizontal-shape" style= {{marginTop:"6.4rem"}}></div>


       //<h3 className="business__subtitle">Отзывы корпоративных клиентов</h3>
       // <div className="business__reviews">
       //     <ReviewItem
       //     photo = "/img/reviews/review1.png"
       //     title = "Павел | Замена картриджей на фильтре Аквафор Морион DWM-10"
       //     text = "Спасибо Иван, очень приятно с вами иметь дело) ещё в скором времени обращусь к вам по другой квартире"/>
       //     <ReviewItem
       //     photo = "/img/reviews/review1.png"
       //     title = "Павел | Замена картриджей на фильтре Аквафор Морион DWM-10"
       //     text = "Спасибо Иван, очень приятно с вами иметь дело) ещё в скором времени обращусь к вам по другой квартире"/>
       // </div>
      }
       <div className="horizontal-shape" style= {{marginTop:"6rem"}}></div>

       <h3 className="business__subtitle">Наши клиенты</h3>






       <style jsx>{`

         .service-btns{
           display:flex;
           justify-content:space-between;
           margin:4rem 0;
           flex-wrap:wrap;
         }

         .service-btn{
           height:4.5rem;
           display:flex;
           align-items:center;
           justify-content:center;
           font-weight: 600;
           font-size: 14px;
           color: #424242;
           border: 2px solid #4862D2;
           border-radius: 0.5rem;
           cursor:pointer;
         }

         .service-btn1{
           width:55%;
         }

         .service-btn2{
           width:43%;
         }

          .business__button{
            border:1px solid red;
          }
          .business__title{
            font-weight: 600;
            font-size: 24px;
            line-height: 33px;
            color: #424242;
            margin-top:4rem;
            margin-bottom:4rem;
          }

          .business-flex{
            display:flex;
            justify-content:space-between;
          }

          .business-flex__left{
            width:65%;
          }

          .business-flex__right{
            text-align:center;
            margin-top:5rem;
          }

          .business__text{
            font-size: 14px;
            line-height: 19px;
            color: #424242;
          }

          .horizontal-shape{
            background: #DDDDDD;
            width:100%;
            height:1px;
          }

          svg{
            margin-bottom:3rem;
          }

          .business__subtitle{
            margin-top:6rem;
            margin-bottom:4rem;
            font-weight: 600;
            font-size: 20px;
            line-height: 27px;
            color: #424242;
          }

          .about__paragraph{
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 22px;
            color: #424242;
            position:relative;
          }

          .with-point{
            padding-left:2.7rem;
          }

          .with-point:before{
            position:absolute;
            content:"";
            width:0.8rem;
            height:0.8rem;
            border-radius:50%;
            background: radial-gradient(103.33% 90% at 50% 10%, #6089F3 0%, #191792 51.26%, #6089F3 100%), #FFFFFF;
            top:0.6rem;
            left:0;
          }

          .business__cards{
            display:flex;
            flex-wrap:wrap;
            justify-content:space-between;
          }

          .business__card{
            background: #FFFFFF;
            border: 2px solid #FFFFFF;
            box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.13);
            border-radius: 0.5rem;
            width:calc(50% - 0.7rem);
            margin-bottom:1.5rem;
            display:flex;
            align-items:center;
            justify-content:space-between;
            overflow:hidden;
            position:relative;
          }

          .card__right{
            width:50%;
            padding-left:3rem;
            border-left:1px solid #EFEFEF;;
            padding:4.5rem 3rem 3.8rem 3rem;
          }

          .card__left{
            width:50%;
            display:flex;
            align-items:center;
            justify-content:center;
          }

          .card__title{
            font-weight: 600;
            font-size: 18px;
            line-height: 25px;
            color: #424242;
            margin-top:0;
          }

          .card__text{
            font-size: 12px;
            line-height: 16px;
            color: #424242;
            margin-bottom:1rem;
          }

          .blue{
            color: #4862D2;
            font-weight:bold;
          }

          .business__reviews{
            display:flex;
            justify-content:space-between;
          }

          @media screen and (max-width:900px){
            .business-flex{
              flex-direction:column-reverse;
            }
            .business-flex__left{
              width:100%;
            }
            .business-flex__right{
              margin-bottom:3rem;
            }
            .business__card{
              width:100%;
            }
          }

          @media screen and (max-width:600px){
            .business__title{
              text-align: center;
            }
            .service-btn1{
              width:100%;
              margin-bottom:2rem;
            }
            .service-btn2{
              width:100%;
            }
            .card__left{
              width:30%;
            }
            .card__right{
              width:70%;
            }
            .card__left img{
              width:80%;
            }
          }
       `}</style>
    </div>
  )
}

export default ForBusiness;
