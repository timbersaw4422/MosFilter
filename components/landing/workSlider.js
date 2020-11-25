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
             bottom:"-10rem", right:"0rem", boxShadow:"8px 8px 15px rgba(0, 0, 0, 0.08)", cursor:"pointer"}}
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
      className={"arrow-left"}
      style={{ ...style, display: "flex", alignItems:"center", justifyContent:"center",
               height:"6rem", width:"6rem", position:"absolute", background:"#5388BB",
             bottom:"-10rem", right:"6rem", boxShadow:"8px 8px 15px rgba(0, 0, 0, 0.08)", cursor:"pointer"}}
      onClick={onClick}
    >
      <Arrow fill ="#fff" rotate="180deg"/>
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

class CustomArrows extends React.Component{
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay:true,
      autoplaySpeed:5000,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 800,
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
        <div className="wrapper" style={{ width:"98%", margin:"0 auto", marginTop:"3rem"}}>
          <Slider {...settings}>
              <img src="/img/landing/work1.png" alt=""/>
              <img src="/img/landing/work2.png" alt=""/>
              <img src="/img/landing/work3.png" alt=""/>
              <img src="/img/landing/work4.png" alt=""/>
              <img src="/img/landing/work5.png" alt=""/>
              <img src="/img/landing/work6.png" alt=""/>
              <img src="/img/landing/work7.png" alt=""/>
              <img src="/img/landing/work8.png" alt=""/>
              <img src="/img/landing/work9.png" alt=""/>
              <img src="/img/landing/work10.png" alt=""/>
              <img src="/img/landing/work11.png" alt=""/>
              <img src="/img/landing/work12.png" alt=""/>
          </Slider>
        </div>

        <style jsx>{`
          img{
            width:25%;
          }

          .wrapper{
            height:45rem;
          }

          @media screen and (max-width:800px){
            .wrapper{
              height:50rem;
            }
          }
        `}</style>
      </>
    );
  }
}

export default CustomArrows;
