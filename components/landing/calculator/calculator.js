import CalculatorChoise from "./calculatorChoise";
import LandingButton from "../landingButton";
import {useState, useRef} from "react";
import {reachGoal} from "../../../analytics/analytics";

const Calculator = ({initialBrand, initialOption1, goods, setModalType, setModalOpen, isOption4, setModalPayload, globalBrand}) => {

  const [option1, setOption1] = useState(initialOption1);
  const [option2, setOption2] = useState("В пределах МКАД");
  const [option3, setOption3] = useState("Меняю самостоятельно");
  const [option4, setOption4] = useState("Оригинал");
  const [activeModel, setActiveModel] = useState(goods[0].id);

  const modelOptions = goods.map(good => {
    return {
      id:good.id, text:good.title
    }
  });

  let isCLickedOnCalculator = useRef(false);
  const calculatorClickHandler = () => {
    if (!isCLickedOnCalculator.current) reachGoal(`clickCalculator${globalBrand}`);
    isCLickedOnCalculator.current = true;
  }
  // modelOptions.push({id:10000, text:"Другая модель"});

  const calculatePrice = () => {
    let price=0;
    let type;

    goods.forEach(good =>{
      if (good.id === activeModel) price += good.price;
    });

    // добавить для варианта другая модель
    //if (activeModel === 10000) price +=

    if (option2 === "В пределах МКАД") type = 1; else type = 2;

    if (option3 === "Меняет мастер"){
      if (type === 1) price += 1200; else price += 1500;
    }
    else {
      if (type === 1) price += 300; else price += 500;
    }

     return price;
  }

  const price = calculatePrice();

  const calculatorChoises = [
    {id:1, title: "Выберите модель вашего фильтра", placeholder:initialOption1, setOption:setOption1, initialOption1:initialOption1,
    options:modelOptions, height:"30rem", setActiveModel:setActiveModel
    },
    {id:2, title: "Ваше местоположение", placeholder:"В пределах МКАД", setOption:setOption2, setActiveModel:null,
    options:[
      {id:1, text:"В пределах МКАД"},{id:2, text:"За пределами МКАД"}
    ]
    },
    {id:3, title: "Замена картриджей", placeholder:"Меняю самостоятельно", setOption:setOption3, setActiveModel:null,
    options:[
      {id:1, text:"Меняю самостоятельно"},{id:2, text:"Меняет мастер"}
    ]
    }
  ];

  if (isOption4) calculatorChoises.push({id:4, title: "Картриджи",  placeholder:"Оригинал", setOption:setOption4,
    options:[
      {id:1, text:"Оригинал"},{id:2, text:"Аналоги"}
    ]
  });

  return(
    <div className="calculator">
      <h2 className="calculator__caption">Онлайн-калькулятор</h2>

      <div className="calculator__wrapper">
         <h3 className="calculator__text">Расчитайте стоимость замены картриджей для вашего фильтра</h3>
         <div className="calculator__shape"></div>
         <div className="calculator__main">
            <div className="calculator__left" onClick={calculatorClickHandler}>
               {calculatorChoises.map(item => <CalculatorChoise
                 initialOption1={item.initialOption1}
                 title = {item.title}
                 key = {item.id}
                 placeholder= {item.placeholder}
                 options={item.options}
                 setOption = {item.setOption}
                 height={item.height || null}
                 setActiveModel={item.setActiveModel}
                 />) }

            </div>

            <div className="calculator__right">
                <div className="calculator__option always-visible">
                  <span>Стоимость: </span>
                  <span className="calculator__price">{price} <i style = {{fontSize:"22px", fontWeight:"400"}}className="fas fa-ruble-sign"></i></span>
                </div>

                <LandingButton
                    text="Заказать"
                    css={{maxWidth:"250px", height:"50px", marginBottom:"0rem"}}
                    clickHandler = {() => {
                      setModalOpen(true);
                      setModalType("JUST-NUMBER");
                      setModalPayload({
                        modalType:13,
                        title:option1,
                        place:option2,
                        type:option3,
                        price
                      });
                    }}
                    valid={true}
                    />
            </div>
         </div>
      </div>




      <style jsx>{`
        .calculator{
          border-top:1px solid #E3E3E3;
          padding-top:2rem;
          margin-bottom:18rem;
        }
        .calculator__main{
          display:flex;
          justify-content:space-between;
          position:relative;
          z-index:10;
        }

        .calculator__caption{
          font-weight: 600;
          font-size: 30px;
          line-height: 37px;
          color: #424242;
          margin-bottom:3.5rem;
        }

        .calculator__wrapper{
          padding:3rem;
          background: #F9FAFC;
          border: 1px solid #B7CCE0;
          box-shadow: 9px 10px 17px rgba(0, 0, 0, 0.03);
          position:relative;
        }

        .calculator__text{
          font-weight: 500;
          font-size: 22px;
          color: #626262;
          margin-top:1.5rem;
          margin-bottom:8rem;
          position:relative;
        }

        .calculator__text:after{
          content:"";
          position:absolute;
          width:calc(100% + 6rem);
          height:1px;
          background: #B7CCE0;
          top:6rem;
          left:-3rem;
        }

        .calculator__left{
          display:flex;
          width:63%;
          flex-wrap:wrap;
        }

        .calculator__right{
          width:35%;
          border-left:1px solid #B7CCE0;
          padding-left:5rem;
        }

        .calculator__option{
          margin-top:0;
          font-weight: normal;
          font-size: 13px;
          line-height: 20px;
          color: #424242;
          height:4rem;
        }

        .calculator__option span{
          font-weight:600;
        }

        .calculator__btn{
          display:Flex;
          align-items:center;
          justify-content:center;
          width:15rem;
          height:3.5rem;
          background: linear-gradient(180deg, #6089F3 0%, #191792 100%);
          box-shadow: 0px 4px 10px rgba(62, 83, 197, 0.51);
          border-radius: 0.5rem;
          color: #FFFFFF;
          cursor:pointer;
        }

        .calculator__price{
          font-weight: bold;
          font-size: 24px;
          color: #004990;
        }

        svg{
          position:absolute;
          bottom:0;
          right:0;
          opacity:0.03;
        }

        .call-btn{
           width:15.3rem;
           height:3.5rem;
           display:flex;
           align-items:center;
           justify-content:center;
           font-weight: 600;
           transition:0.3s;
           position:relative;
           cursor:pointer;
           margin-top:2.6rem;
        }

        .call-btn:before, .call-btn:after{
          content:"";
          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          z-index:0;
          border-radius: 0.5rem;
          box-shadow: 0px 4px 10px rgba(45, 82, 214, 0.41);
          transition:0.3s;
        }

        .call-btn:after{
          opacity:1;
          background: linear-gradient(180deg, #6089F3 0%, #191792 100%);
        }

        .call-btn:before{
          opacity:0;
          background: linear-gradient(180deg, #191792 0%, #6089F3 100%);
          border: 2px solid #2B54BE;
        }

        .call-btn span{
          position:relative;
          z-index:1;
          font-weight: 600;
          font-size: 13px;
          color: #FFFFFF;
        }

        .call-btn:active :before{
          background: linear-gradient(180deg, #191792 -32.22%, #6089F3 100%);
          box-shadow:none;
        }

        .always-visible{
          margin-bottom:2rem;
        }

        @media (hover:hover){
          .call-btn:hover:after{
            opacity:0;
          }
          .call-btn:hover:before{
            opacity:1;
          }
        }

        @media screen and (max-width:1280px){
          .calculator__right{
            padding-top:2.5rem;
          }
        }

        @media screen and (max-width:800px){
          .calculator__left{
            width:50%;
          }
          .calculator__right{
            width:50%;
          }
          .calculator__right{
            padding-top:0;
          }
        }

        @media screen and (max-width:1150px){
          .calculator{
            margin-bottom:8rem;
          }
        }

        @media screen and (max-width:900px){
          .calculator__text:after{
            top:10rem;
          }
          .calculator__text{
            margin-bottom:10rem;
          }
        }

        @media screen and (max-width:500px){
          .calculator__left{
            width:100%;
          }
          .calculator__right{
            width:100%;
            padding-left:0;
            border-left:none;
          }
          .calculator__option:not(.always-visible){
            display:none;
          }
          .calculator__main{
            flex-direction:column;
          }
          .call-btn{
            width:100%;
          }
          .calculator__wrapper{
            padding:1.8rem 1.8rem 3.8rem 1.8rem;
            overflow:hidden;
          }
          .calculator__caption{
            font-size:24px;
            margin-top:6rem;
          }
          .calculator__text{
            font-size:18px;
          }

        }

      `}</style>
    </div>
  )
}

export default Calculator;
