import CalculatorChoise from "./calculatorChoise";
import ModalWithAlertProvider from "../modal/modalWithAlertProvider";
import {useState} from "react";

const Calculator = () => {

  const [option1, setOption1] = useState("Atoll");
  const [option2, setOption2] = useState("Проточный фильтр");
  const [option3, setOption3] = useState("Меняю самостоятельно");
  const [option4, setOption4] = useState("В пределах МКАД");

  const calculatePrice = () => {
    let price=0;
    let type=""
    if (option2 === "Проточный фильтр") type = 1; else type = 2;
    switch (option1){
      case "Atoll":{
        if (type === 1) price += 1500; else price += 3000; break;
      }
      case "Гейзер":{
        if (type === 1) price += 1200; else price += 3000; break;
      }
      case "Аквафор":{
        if (type === 1) price += 1250; else price += 3800; break;
      }
      case "Аквафор":{
        if (type === 1) price += 1600; else price += 3300; break;
      }
      case "Барьер":{
        if (type === 1) price += 1600; else price += 3300; break;
      }
      case "Platinum-wasser":{
        price += 3200;break;
      }
      case "Затрудняюсь ответить":{
        price += 1200;break;
      }

      default:break;
    }

    if (option3 === "Меняет мастер"){
      if (option4 === "В пределах МКАД") price += 1200; else price += 1300;
    }
    else {
      if (option4 === "В пределах МКАД") price += 300; else price += 400;
    }

     return price;
  }

  const price = calculatePrice();

  const calculatorChoises = [
    {id:1, title: "Выберите марку вашего фильтра", placeholder:"Atoll", setOption:setOption1,
    options:[
      {id:1, text:"Atoll"},{id:2, text:"Гейзер"},{id:3, text:"Барьер"},{id:4, text:"Аквафор"},
      {id:5, text:"Platinum-wasser"},{id:6, text:"Затрудняюсь ответить"}
    ]
    },
    {id:2, title: "Выберите модель вашего фильтра", placeholder:"Проточный фильтр", setOption:setOption2,
    options:[
      {id:1, text:"Проточный фильтр"},{id:2, text:"Обратный осмос"}
    ]
    },
    {id:3, title: "Замена картриджей", placeholder:"Меняю самостоятельно", setOption:setOption3,
    options:[
      {id:1, text:"Меняю самостоятельно"},{id:2, text:"Меняет мастер"}
    ]
    },
    {id:4, title: "Местоположение",  placeholder:"В пределах МКАД", setOption:setOption4,
    options:[
      {id:1, text:"В пределах МКАД"},{id:2, text:"За пределами МКАД"}
    ]
    }
  ];

  const [isModalOpen, setModalOpen] = useState(false);

  return(
    <div className="calculator">
      <h2 className="calculator__caption">Онлайн-калькулятор расчёта стоимости замены картриджей</h2>

      <div className="calculator__wrapper">
         <h3 className="calculator__text">Расчитайте стоимость картриджей для вашего фильтра</h3>
         <div className="calculator__shape"></div>
         <div className="calculator__main">
            <div className="calculator__left">
               {calculatorChoises.map(item => <CalculatorChoise
                 title = {item.title}
                 key = {item.id}
                 placeholder= {item.placeholder}
                 options={item.options}
                 setOption = {item.setOption}
                 />) }

            </div>

            <div className="calculator__right">
                <p className="calculator__option"><span>Марка фильтра: </span> {option1}</p>
                <p className="calculator__option"><span>Тип фильтра: </span> {option2}</p>
                <p className="calculator__option"><span>Замена картриджей: </span> {option3}</p>
                <p className="calculator__option"><span>Местоположение: </span> {option4}</p>
                <p className="calculator__option always-visible"><span>Стоимость: </span> <span className="calculator__price">{price} &#8381;</span></p>
                <div className="call-btn" onClick = {() => setModalOpen(!isModalOpen)}>
                   <span>Оформить заказ </span>
                </div>
                {isModalOpen ?
                  <ModalWithAlertProvider
                                    setModalOpen={setModalOpen}
                                    title = "Оформление заказа"
                                    modalType = {3}
                                    data={[option1, option2, option3, option4, price]}
                                 />
                   : null}
            </div>
         </div>


         <svg width="266" height="355" viewBox="0 0 266 355" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M153.603 -0.748508C150.181 2.68557 148.264 7.30255 148.264 12.1112C148.264 16.9199 150.181 21.5369 153.603 24.9709L258.2 127.849C275.694 145.134 287.774 166.997 293.005 190.838C298.237 214.679 296.398 239.496 287.71 262.339C279.021 285.183 263.846 305.093 243.99 319.702C224.133 334.311 200.43 343.006 175.696 344.754C150.963 346.501 126.239 341.227 104.464 329.558C82.689 317.889 64.7776 300.317 52.859 278.929C40.9405 257.541 35.5155 233.237 37.2293 208.906C38.943 184.574 47.7234 161.238 62.5266 141.671L89.5651 167.215C77.2719 186.006 72.4387 208.589 75.9874 230.659C79.536 252.729 91.218 272.743 108.807 286.886C126.395 301.028 148.66 308.31 171.357 307.342C194.053 306.375 215.594 297.227 231.873 281.641C240.494 273.217 247.336 263.199 252.006 252.164C256.675 241.129 259.078 229.295 259.078 217.342C259.078 205.389 256.675 193.555 252.006 182.52C247.336 171.485 240.494 161.467 231.873 153.043L179.575 101.604C177.858 99.9157 175.819 98.5761 173.576 97.6621C171.333 96.7482 168.928 96.2778 166.5 96.2778C164.072 96.2778 161.668 96.7482 159.424 97.6621C157.181 98.5761 155.143 99.9157 153.426 101.604C151.709 103.293 150.347 105.298 149.417 107.505C148.488 109.711 148.01 112.076 148.01 114.464C148.01 116.852 148.488 119.217 149.417 121.424C150.347 123.63 151.709 125.635 153.426 127.324L205.724 178.763C215.573 189.104 220.948 202.806 220.713 216.973C220.478 231.141 214.652 244.664 204.465 254.683C194.278 264.702 180.53 270.433 166.125 270.664C151.721 270.895 137.79 265.608 127.277 255.921C116.924 245.663 111.115 231.796 111.115 217.342C111.115 202.888 116.924 189.021 127.277 178.763C129.082 177.124 130.523 175.136 131.509 172.923C132.494 170.709 133.003 168.319 133.003 165.903C133.003 163.487 132.494 161.097 131.509 158.883C130.523 156.67 129.082 154.682 127.277 153.043L74.9784 101.604C73.2892 99.9088 71.2668 98.569 69.0344 97.6667C66.802 96.7643 64.4062 96.3182 61.993 96.3556C57.0809 96.369 52.3642 98.2497 48.8294 101.604C25.5262 124.5 9.65106 153.68 3.21228 185.452C-3.22651 217.224 0.0604534 250.161 12.6572 280.095C25.254 310.029 46.5947 335.616 73.9793 353.618C101.364 371.621 133.562 381.23 166.5 381.23C199.438 381.23 231.636 371.621 259.021 353.618C286.406 335.616 307.746 310.029 320.343 280.095C332.94 250.161 336.227 217.224 329.788 185.452C323.349 153.68 307.474 124.5 284.171 101.604L179.752 -0.748508C176.261 -4.11458 171.567 -6 166.678 -6C161.789 -6 157.095 -4.11458 153.603 -0.748508Z" fill="#0F4C81"/>
             <path d="M118.027 81.4838L121.584 80.434L124.786 78.6843L126.209 77.6346C126.668 77.2716 127.085 76.861 127.454 76.4098L128.699 75.1851C129.116 74.7024 129.474 74.174 129.767 73.6104C130.458 72.6791 131.054 71.6828 131.545 70.6361L132.613 67.1368C132.613 67.1368 132.613 65.9121 132.613 65.3872C132.701 64.8072 132.701 64.2176 132.613 63.6376C132.613 58.9973 130.739 54.5471 127.403 51.2659C124.067 47.9847 119.542 46.1413 114.825 46.1413H113.046H111.267C110.032 46.3034 108.831 46.6577 107.709 47.1911L104.508 48.7658L103.085 49.8156L101.661 51.0403L100.594 52.44C100.129 52.8152 99.7629 53.2954 99.527 53.8397C98.8667 54.8513 98.2725 55.9032 97.748 56.989C97.2329 58.0414 96.8736 59.1608 96.6808 60.3133C96.6808 60.3133 96.6808 61.538 96.6808 62.2379V65.7371C96.6808 65.7371 96.6808 66.9619 96.6808 67.4868C96.8712 68.6959 97.2303 69.8734 97.748 70.986C98.2399 72.0327 98.8358 73.029 99.527 73.9604C99.7563 74.5583 100.121 75.0969 100.594 75.535L101.661 76.7598L103.085 77.9845L104.508 79.0343L107.709 80.7839L111.267 81.8337H118.382L118.027 81.4838Z" fill="#0F4C81"/>
         </svg>
      </div>




      <style jsx>{`
        .calculator__main{
          display:flex;
          justify-content:space-between;
          position:relative;
          z-index:10;
        }

        .calculator__caption{
          font-weight: 600;
          font-size: 20px;
          line-height: 27px;
          color: #4F4F4F;
          margin-bottom:3.5rem;
        }

        .calculator__wrapper{
          padding:3rem;
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%), #FFFFFF;
          box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.13);
          border-radius: 5px;
          position:relative;
        }

        .calculator__text{
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
          color: #424242;
          margin-bottom:1.7rem;
          margin-top:0;
        }

        .calculator__shape{
          width:24rem;
          height:1px;
          background: #B4B4B4;
          margin-bottom:3.5rem;
        }

        .calculator__left{
          display:flex;
          width:63%;
          flex-wrap:wrap;
        }

        .calculator__right{
          width:35%;
          border-left:1px solid #DBDBDB;
          padding-left:5rem;
        }

        .calculator__option{
          margin-top:0;
          font-weight: normal;
          font-size: 12px;
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
          font-size: 16px;
          color: #4862D2;
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
          font-size: 12px;
          color: #FFFFFF;
        }

        .call-btn:active :before{
          background: linear-gradient(180deg, #191792 -32.22%, #6089F3 100%);
          box-shadow:none;
        }

        @media (hover:hover){
          .call-btn:hover:after{
            opacity:0;
          }
          .call-btn:hover:before{
            opacity:1;
          }
        }

        @media screen and (max-width:800px){
          .calculator__left{
            width:50%;
          }
          .calculator__right{
            width:50%;
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
          }
          .calculator__caption{
            display:none;
          }
        }

      `}</style>
    </div>
  )
}

export default Calculator;
