import Slider from "react-slick";
import {Component} from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", height:"2rem", width:"1rem", position:"absolute",
             top:"2rem", right:"-1rem"}}
      onClick={onClick}>
      <svg style={{cursor:"pointer"}} width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M1.13526 15.9979C0.87047 15.9985 0.613858 15.9057 0.40997 15.7357C0.295217 15.6399 0.200361 15.5224 0.130833 15.3897C0.0613047 15.257 0.0184714 15.1118 0.00478626 14.9625C-0.0088989 14.8131 0.00683311 14.6625 0.0510809 14.5193C0.0953286 14.3761 0.167222 14.243 0.262645 14.1278L5.33967 8.01564L0.443969 1.89208C0.349833 1.77543 0.279534 1.64122 0.237114 1.49715C0.194694 1.35308 0.180989 1.202 0.196785 1.05259C0.212582 0.90317 0.257569 0.75837 0.329162 0.626506C0.400755 0.494642 0.497541 0.378315 0.613958 0.284212C0.731212 0.180401 0.868525 0.102097 1.01728 0.0542161C1.16604 0.00633482 1.32302 -0.0100901 1.47838 0.00597127C1.63375 0.0220327 1.78413 0.0702341 1.9201 0.14755C2.05608 0.224867 2.1747 0.329629 2.26853 0.455262L7.7422 7.29723C7.90888 7.50127 8 7.75721 8 8.02134C8 8.28547 7.90888 8.54141 7.7422 8.74545L2.07587 15.5874C1.96218 15.7254 1.81777 15.8345 1.65434 15.9058C1.49091 15.9772 1.31308 16.0087 1.13526 15.9979Z" fill="#9F9F9F"/>
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",height:"2rem", width:"1rem", position:"absolute",
             top:"2rem", left:"-1rem"}}
      onClick={onClick}
    >
    <svg style={{cursor:"pointer"}} width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.86474 0.00206365C7.12953 0.00154297 7.38614 0.0943365 7.59003 0.264338C7.70478 0.360067 7.79964 0.477638 7.86917 0.610311C7.9387 0.742986 7.98153 0.888157 7.99522 1.03751C8.0089 1.18687 7.99317 1.33748 7.94892 1.4807C7.90467 1.62393 7.83278 1.75697 7.73736 1.8722L2.66033 7.98436L7.55603 14.1079C7.65017 14.2246 7.72047 14.3588 7.76289 14.5028C7.80531 14.6469 7.81901 14.798 7.80321 14.9474C7.78742 15.0968 7.74243 15.2416 7.67084 15.3735C7.59925 15.5054 7.50246 15.6217 7.38604 15.7158C7.26879 15.8196 7.13147 15.8979 6.98272 15.9458C6.83396 15.9937 6.67698 16.0101 6.52162 15.994C6.36625 15.978 6.21587 15.9298 6.0799 15.8524C5.94392 15.7751 5.8253 15.6704 5.73147 15.5447L0.257805 8.70277C0.0911219 8.49873 6.78157e-07 8.24279 7.01248e-07 7.97866C7.24339e-07 7.71453 0.0911219 7.45859 0.257805 7.25455L5.92413 0.412582C6.03782 0.274583 6.18223 0.165494 6.34566 0.0941685C6.50909 0.0228423 6.68693 -0.00871288 6.86474 0.00206365Z" fill="#9F9F9F"/>
    </svg>
    </div>
  );
}

class CustomArrows extends React.Component{
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay:true,
      autoplaySpeed:3000,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },

      ]
    };
    return (
      <>
      <p className="brands-title">Бренды с которыми мы работаем</p>
      <div className="wrapper" style={{ width:"98%", margin:"0 auto", marginTop:"3rem"}}>
        <Slider {...settings}>
            <img src="/img/brands/brand1.png" alt=""/>
            <img src="/img/brands/brand2.png" alt=""/>
            <img src="/img/brands/brand3.png" alt=""/>
            <img src="/img/brands/brand4.png" alt=""/>
            <img src="/img/brands/brand5.png" alt=""/>
            <img src="/img/brands/brand6.png" alt=""/>
        </Slider>
      </div>

      <style jsx>{`
        .brands-title{
          font-size: 16px;
          color: #727272;
          padding-bottom:1.6rem;
          border-bottom:1px solid #B4B4B4;
          display:none;
          text-align:center;
          margin-top:5rem;
        }

        @media screen and (max-width:600px){
          .brands-title{
            display:block;
          }
        }
      `}</style>
      </>
    );
  }
}

export default CustomArrows;
