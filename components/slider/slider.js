import SliderItem from "./sliderItem";
import {useState} from "react";
import SliderPoint from "./sliderPoint";
import ModalWithAlertProvider from "../modal/modalWithAlertProvider";


const Slider = () => {

  const [activeSlide, setActiveSlide] = useState(1);

  const sliderItems = [
    {id:0, background:"/img/slider/1.jpg", title:"Система обратного осмоса + установка Atoll A-550 STD"},
    {id:1, background:"/img/slider/4.jpg", title:"Комлект картриджей для фильтров Atoll A-550 | 560 STD"},
    {id:2, background:"/img/slider/2.jpg", title:"Комлект картриджей для фильтров Барьер «Осмо»"},
    {id:3, background:"/img/slider/3.jpg", title:"Комлект картриджей для фильтров Гейзер «Престиж»"}
  ];

  const arrowClickHandler = to => {
    if (activeSlide === sliderItems.length-1 && to === 1) setActiveSlide(0);
    else if (activeSlide === 0 && to === -1) setActiveSlide(sliderItems.length-1);
    else setActiveSlide(activeSlide + to);
  }

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  return(
    <>

    {isModalOpen ? <ModalWithAlertProvider
                      setModalOpen={setModalOpen}
                      title = "Участие в акции"
                      subtitle = {sliderItems[activeSlide].title}
                      modalType = {2}
                      height="62rem"
                   />
                   : null}

    <h2 className="slider__caption">Акции месяца</h2>

    <div className="slider-wrapper">
      <div
           className="slider__arrow slider__arrow-left"
           onClick={() => arrowClickHandler(-1)}>
           <img src="/img/slider/arrow-left.png" alt="arrow-left"/>
      </div>

      <div
           className="slider__arrow slider__arrow-right"
           onClick={() => arrowClickHandler(1)}>
           <img src="/img/slider/arrow-right.png" alt="arrow-left"/>
      </div>


      <div className="slider__track">
        {sliderItems.map((item,id) => <SliderItem
                  key={item.id}
                  background={item.background}
                  title = {item.title}
                  setModalOpen = {setModalOpen}
                  setModalTitle = {setModalTitle}
                  transform={id}/>)}
      </div>
    </div>

    <div className="slider__bottom">
        <div className="slider__nav">
            <div className="slider__points">
               {sliderItems.map(item => <SliderPoint
                   id={item.id}
                   key={item.id}
                   setActiveSlide = {setActiveSlide}
                   activeSlide={activeSlide}/>)}
            </div>
        </div>
   </div>




    <style jsx>{`
      .slider-wrapper{
        border: 1px solid #E7E7E7;
        position:relative;
        height:36rem;
        margin-top:1.5rem;
        position:relative;
        margin-bottom:2rem;
        overflow:hidden;
      }

      .slider__caption{
        margin-top:0;
        font-weight: 600;
        font-size: 16px;
        color: #424242;
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
        z-index:1;
      }

      .slider__bottom{
        display:flex;
        align-items:center;
        justify-content:center;
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
        position:absolute;
        z-index:10;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width:5rem;
        height:5rem;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        top:15.5rem;
      }

      .slider__arrow-left{
        left:2rem;
      }

      .slider__arrow-right{
        right:2rem;
      }

      .slider__points{
        display:flex;
      }
    `}</style>

    </>
  )
}

export default Slider;
