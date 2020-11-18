import Slider from "react-slick";
import {Component} from "react";
import Arrow from "./arrow";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems:"center", justifyContent:"center",
               height:"6rem", width:"6rem", position:"absolute", background:"#fff",
             bottom:"-6rem", right:"0rem", boxShadow:"8px 8px 15px rgba(0, 0, 0, 0.08)", cursor:"pointer"}}
      onClick={onClick}>
      <Arrow fill ="#004990"/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems:"center", justifyContent:"center",
               height:"6rem", width:"6rem", position:"absolute", background:"#5388BB",
             bottom:"-6rem", right:"6rem", boxShadow:"8px 8px 15px rgba(0, 0, 0, 0.08)", cursor:"pointer"}}
      onClick={onClick}
    >
      <Arrow fill ="#fff" rotate="180deg"/>
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
    return (
      <>
        <div className="wrapper" style={{ width:"98%", margin:"0 auto", marginTop:"3rem"}}>
          <Slider {...settings}>
            <div>
              <div className="review-page">

                 <div className="review">
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review15.png" alt="review" className="review__img"/>
                      <p className="review__name">Татьяна</p>
                   </div>
                   <p className="review__text">В данной фирме обслуживаюсь не первый год, ребята молодцы! Продолжайте в том же духе!</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

                 <div className="review">
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review15.png" alt="review" className="review__img"/>
                      <p className="review__name">Татьяна</p>
                   </div>
                   <p className="review__text">В данной фирме обслуживаюсь не первый год, ребята молодцы! Продолжайте в том же духе!</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

                 <div className="review">
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review15.png" alt="review" className="review__img"/>
                      <p className="review__name">Татьяна</p>
                   </div>
                   <p className="review__text">В данной фирме обслуживаюсь не первый год, ребята молодцы! Продолжайте в том же духе!</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

                 <div className="review">
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review15.png" alt="review" className="review__img"/>
                      <p className="review__name">Татьяна</p>
                   </div>
                   <p className="review__text">В данной фирме обслуживаюсь не первый год, ребята молодцы! Продолжайте в том же духе!</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

              </div>
            </div>

            <div>
              <div className="review-page">

                 <div className="review">
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review15.png" alt="review" className="review__img"/>
                      <p className="review__name">Татьяна</p>
                   </div>
                   <p className="review__text">В данной фирме обслуживаюсь не первый год, ребята молодцы! Продолжайте в том же духе!</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

                 <div className="review">
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review15.png" alt="review" className="review__img"/>
                      <p className="review__name">Татьяна</p>
                   </div>
                   <p className="review__text">В данной фирме обслуживаюсь не первый год, ребята молодцы! Продолжайте в том же духе!</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

                 <div className="review">
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review15.png" alt="review" className="review__img"/>
                      <p className="review__name">Татьяна</p>
                   </div>
                   <p className="review__text">В данной фирме обслуживаюсь не первый год, ребята молодцы! Продолжайте в том же духе!</p>
                   <div className="review__btn">
                      <span>Посмотреть снимок отзыва</span>
                      <Arrow fill="#FF652E"/>
                   </div>
                 </div>

                 <div className="review">
                   <div className="review__img-and-name">
                      <img src="/img/reviews/review15.png" alt="review" className="review__img"/>
                      <p className="review__name">Татьяна</p>
                   </div>
                   <p className="review__text">В данной фирме обслуживаюсь не первый год, ребята молодцы! Продолжайте в том же духе!</p>
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
            height:7.5rem;
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
        `}</style>
      </>
    );
  }
}

export default CustomArrows;
