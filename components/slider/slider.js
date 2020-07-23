import SliderItem from "./sliderItem";
import {useState} from "react";
import SliderPoint from "./sliderPoint";

const Slider = () => {

  const [activeSlide, setActiveSlide] = useState(1);

  const sliderItems = [
    {id:0, background:"img/slider/slide1.png"},
    {id:1, background:"img/slider/slide1.png"},
    {id:2, background:"img/slider/slide1.png"}
  ];

  const arrowClickHandler = to => {
    if (activeSlide === sliderItems.length-1 && to === 1) setActiveSlide(0);
    else if (activeSlide === 0 && to === -1) setActiveSlide(sliderItems.length-1);
    else setActiveSlide(activeSlide + to);

  }

  return(
    <>
    <div className="slider-wrapper">
      <div className="slider__track">
        {sliderItems.map((item,id) => <SliderItem
                  key={item.id}
                  background={item.background}
                  transform={id}/>)}
      </div>
    </div>

    <div className="slider__bottom">
        <p className="slider__show-all-btn">Показать все акции</p>
        <div className="slider__nav">
            <img src="img/slider/arrow-left.png" alt="arrow-left"
                 className="slider__arrow slider__arrow-left"
                 onClick={() => arrowClickHandler(-1)}/>
            <div className="slider__points">
               {sliderItems.map(item => <SliderPoint
                   id={item.id}
                   key={item.id}
                   setActiveSlide = {setActiveSlide}
                   activeSlide={activeSlide}/>)}
            </div>
            <img src="img/slider/arrow-right.png" alt="arrow-right"
                 className="slider__arrow slider__arrow-right"
                 onClick={() => arrowClickHandler(1)}/> />
        </div>
   </div>




    <style jsx>{`
      .slider-wrapper{
        border: 1px solid #E7E7E7;
        position:relative;
        height:35rem;
        margin-top:3.7rem;
        position:relative;
        margin-bottom:2rem;
        overflow:hidden;
      }

      .slider__show-all-btn{
        font-size: 14px;
        text-decoration-line: underline;
        color: #1A70BC;
        cursor:pointer;
      }

      .slider__track{
        width:100%;
        height:100%;
        position:relative;
        transform:translateX(-${activeSlide}00%);
        transition:0.5s;
      }

      .slider__bottom{
        display:flex;
        align-items:center;
        justify-content:space-between;
        position:relative;
      }

      .slider__bottom:after{
        content:"";
        position:absolute;
        width:100%;
        height:1px;
        left:0;
        bottom:-2.5rem;
        background: #F0F0F0;
      }

      .slider__nav{
        display:flex;
        align-items:center;
      }

      .slider__arrow{
        cursor:pointer;
      }

      .slider__arrow-left{
        margin-right:2rem;
      }

      .slider__arrow-right{
        margin-left:2rem;
      }

      .slider__points{
        display:flex;
      }
    `}</style>

    </>
  )
}

export default Slider;
