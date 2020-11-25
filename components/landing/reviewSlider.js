import Slider from "react-slick";
import {Component} from "react";
import Arrow from "./arrow";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={"arrow-left"}
      style={{ ...style, display: "flex", alignItems:"center", justifyContent:"center",
               height:"6rem", width:"6rem", position:"absolute", background:"#fff",
             bottom:"-6rem", right:"1.5rem", boxShadow:"8px 8px 15px rgba(0, 0, 0, 0.08)", cursor:"pointer"}}
      onClick={onClick}>
      <Arrow fill ="#004990"/>

      <style jsx>{`
        .arrow-left{
          transition:0.2s;
        }

        @media (hover:hover){
          .arrow-left:hover{
            transform:scale(1.1);
            z-index:10;
          }
        }
        `}</style>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={"arrow-right"}
      style={{ ...style, display: "flex", alignItems:"center", justifyContent:"center",
               height:"6rem", width:"6rem", position:"absolute", background:"#5388BB",
             bottom:"-6rem", right:"7.5rem", boxShadow:"8px 8px 15px rgba(0, 0, 0, 0.08)", cursor:"pointer"}}
      onClick={onClick}
    >
      <Arrow fill ="#fff" rotate="180deg"/>

      <style jsx>{`
        .arrow-right{
          transition:0.2s;
        }

        @media (hover:hover){
          .arrow-right:hover{
            z-index:10;
            transform:scale(1.1);
          }
        }
        `}</style>
    </div>
  );
}

class CustomArrows extends React.Component{
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay:false,
      autoplaySpeed:5000,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },

      ]
    };

    this.clickHandler = (img) => {
      this.props.setModalType("REVIEW");
      this.props.setModalOpen(true);
      this.props.setModalPayload(img);
    }

    return (
      <>
        <div className="wrapper" style={{ width:"98%", margin:"0 auto", marginTop:"3rem"}}>
          <Slider {...settings}>
            <div>
              <div className="review-page">

                 <div className="review" onClick={() => this.clickHandler(1)}>
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review1.png" alt="review" className="review__img"/>
                      <p className="review__name">Павел</p>
                   </div>
                   <p className="review__text">Спасибо Иван, очень приятно с вами иметь дело) ещё в скором времени обращусь к вам по другой квартире</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

                 <div className="review" onClick={() => this.clickHandler(2)}>
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review2.png" alt="review" className="review__img"/>
                      <p className="review__name">Шевченко Наталья</p>
                   </div>
                   <p className="review__text">Спасибо огромное мастеру Ивану за отличную работу по замене картриджей фильтра, за его внимательное...</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

                 <div className="review" onClick={() => this.clickHandler(3)}>
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review3.png" alt="review" className="review__img"/>
                      <p className="review__name">Татьяна</p>
                   </div>
                   <p className="review__text">Спасибо огромное за установку фильтра. Вы настоящий профессионал своего дела...</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

                 <div className="review" onClick={() => this.clickHandler(4)}>
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review4.png" alt="review" className="review__img"/>
                      <p className="review__name">Ольга</p>
                   </div>
                   <p className="review__text">Я довольна Вашей работой! Спасибо! Вас рекомендую своим знакомым. Вода — это жизнь!</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

              </div>
            </div>

            <div>
              <div className="review-page">

                 <div className="review" onClick={() => this.clickHandler(5)}>
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review5.png" alt="review" className="review__img"/>
                      <p className="review__name">Егор</p>
                   </div>
                   <p className="review__text">Спасибо за установку фильтра барьер. Всё было быстро и качественно!</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

                 <div className="review" onClick={() => this.clickHandler(6)}>
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review6.png" alt="review" className="review__img"/>
                      <p className="review__name">Ирина</p>
                   </div>
                   <p className="review__text">Ваня, спасибо за всё! Менять фильтры будем только у вас</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

                 <div className="review" onClick={() => this.clickHandler(7)}>
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review7.png" alt="review" className="review__img"/>
                      <p className="review__name">Ольга</p>
                   </div>
                   <p className="review__text">Хочется поблагодарить Ивана за установку фильтра, теперь пьём чистую воду! Всё было сделано быстро ...</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

                 <div className="review" onClick={() => this.clickHandler(8)}>
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review15.png" alt="review" className="review__img"/>
                      <p className="review__name">Евгения</p>
                   </div>
                   <p className="review__text">Здравствуйте! Мастером очень довольна, уже не в первый раз он нам меняет фильтр, никаких нареканий ...</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

              </div>
            </div>

            <div>
              <div className="review-page">

                 <div className="review" onClick={() => this.clickHandler(9)}>
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review9.png" alt="review" className="review__img"/>
                      <p className="review__name">Елена Викторона</p>
                   </div>
                   <p className="review__text">Здравствуйте. Всё прошло быстро и безболезненно, как врач и обещал. Мы с моим краником и фильтрами ...</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

                 <div className="review" onClick={() => this.clickHandler(10)}>
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review10.png" alt="review" className="review__img"/>
                      <p className="review__name">Наталья</p>
                   </div>
                   <p className="review__text">Мне всё понравилось, получилось быстро и качественно. Приятно, что взяли надо мной шефство и готовы напоминать о замене...</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

                 <div className="review" onClick={() => this.clickHandler(11)}>
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review11.png" alt="review" className="review__img"/>
                      <p className="review__name">Эльвира</p>
                   </div>
                   <p className="review__text">Работа мастера без нареканий, вода хороша, ничего не течёт разьяснения по промывке фильтры ясные и всё прошло успешно! Спасибо!</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

                 <div className="review" onClick={() => this.clickHandler(12)}>
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review12.png" alt="review" className="review__img"/>
                      <p className="review__name">Елена</p>
                   </div>
                   <p className="review__text">Добрый день! Сегодня нам заменили фильтры Аквафор Трио. Всё понравилось, будем обращаться в следующий раз только к вам...</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

              </div>
            </div>

            <div>
              <div className="review-page">

                 <div className="review" onClick={() => this.clickHandler(13)}>
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review13.png" alt="review" className="review__img"/>
                      <p className="review__name">Анатолий</p>
                   </div>
                   <p className="review__text">Заранее были проинформированы о времени приезда. Работа выполнена быстро, качественно. Всем рекомендуем!</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

                 <div className="review" onClick={() => this.clickHandler(14)}>
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review14.png" alt="review" className="review__img"/>
                      <p className="review__name">Даниил</p>
                   </div>
                   <p className="review__text">Спасибо, всё отлично:) главное вы есть в вотсапе и приезжаете вовремя:) с фильтром, надеюсь тоже всё в порядке</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

                 <div className="review" onClick={() => this.clickHandler(15)}>
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review15.png" alt="review" className="review__img"/>
                      <p className="review__name">Инна</p>
                   </div>
                   <p className="review__text">Добрый вечер, Иван! Да, всё прекрасно! Спасибо на работу..</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

              </div>
            </div>

          </Slider>
        </div>

        <style jsx>{`
          .wrapper{
            padding-bottom:24rem;
          }

          .review-page{
            display:flex;
            align-items:center;
            justify-content:space-between;
            flex-wrap:wrap;
            position:relative;
            z-index:10;
            padding:0 1.5rem;
          }

          .review{
            background: linear-gradient(180deg, #FFFFFF 2.04%, #FCFDFF 100%);
            box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.08);
            padding:5rem 8rem 7rem 5rem;
            margin-bottom:6rem;
            width:47.5%;
          }

          .review__img-and-name{
            margin-bototm:4rem;
            display:flex;
            align-items:center;
          }

          .review__img{
            width:6.2rem;
            height:6.2rem;
            border-radius:50%;
            display:block;
            margin-right:3rem;
          }

          .review__name{
            font-weight: 600;
            font-size: 22px;
            color: #424242;
          }

          .review__text{
            font-size: 16px;
            line-height: 150%;
            color: #424242;
            margin-bottom:0;
            height:120px;
          }

          .review__btn{
            font-size: 14px;
            align-items: flex-end;
            color: #FF652E;
            display:flex;
            align-items:Center;
            cursor:pointer;
          }

          .review__btn span{
            margin-right:4.5rem;
          }

          @media screen and (max-width:1150px){
            .wrapper{
              padding-bottom:12rem;
            }
          }

          @media screen and (max-width:1000px){
            .review{
              width:100%;
            }
          }
        `}</style>
      </>
    );
  }
}

export default CustomArrows;
