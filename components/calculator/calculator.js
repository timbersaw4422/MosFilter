import CalculatorChoise from "./calculatorChoise";

const Calculator = () => {
  return(
    <div className="calculator">
      <h2 className="calculator__caption">Онлайн-калькулятор расчёта стоимости замены картриджей</h2>

      <div className="calculator__wrapper">
         <h3 className="calculator__text">Расчитайте точную стоимость картриджей для вашего фильтра</h3>
         <div className="calculator__shape"></div>
         <div className="calculator__main">
            <div className="calculator__left">
               <CalculatorChoise />
               <CalculatorChoise />
               <CalculatorChoise />
               <CalculatorChoise />
            </div>

            <div className="calculator__right">
                <p className="calculator__option"><span>Марка фильтра: </span> Atoll</p>
                <p className="calculator__option"><span>Тип фильтра: </span> Проточный фильтр</p>
                <p className="calculator__option"><span>Замена картриджей: </span> Самостоятельно</p>
                <p className="calculator__option"><span>Местоположение: </span> В перделах МКАД</p>
                <p className="calculator__option"><span>Стоимость: </span> <span className="calculator__price">1450 ₽</span></p>
                <div className="calculator__btn">Оформить заказ</div>
            </div>
         </div>
      </div>




      <style jsx>{`
        .calculator__main{
          display:flex;
          justify-content:space-between;
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
          margin-bottom:1.7rem;
          font-weight: normal;
          font-size: 12px;
          line-height: 16px;
          color: #424242;
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
        }

        .calculator__price{
          font-weight: bold;
          font-size: 16px;
          color: #4862D2;
        }

      `}</style>
    </div>
  )
}

export default Calculator;
