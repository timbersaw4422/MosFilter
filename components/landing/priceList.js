const PriceList = () => {
  return (
    <>
    <div className="price-list">
      <p className="title">Прайс-лист цен</p>
      <div className="item">
        <p className="subtitle">а) Замена картриджей</p>
        <p className="text">• Замена картриджей: 850 ₽</p>
      </div>
      <div className="item">
        <p className="subtitle">б) Монтаж систем</p>
        <p className="text">• Установка фильтра: 1150 ₽</p>
        <p className="text">• Установка крана для фильтра: 850 ₽</p>
      </div>
      <div className="item">
        <p className="subtitle">в) Ремонтные работы</p>
        <p className="text">• Ремонт фильтра: 1150 ₽</p>
        <p className="text">• Замена накопительно бака: 850 ₽</p>
        <p className="text">• Демонтаж фильтра: 850 ₽</p>
      </div>
      <div className="item">
        <p className="subtitle">в) Выезд мастера</p>
        <p className="text">• В пределах МКАД: 350 ₽</p>
        <p className="text">• За МКАД: Расчитывается индивидуально</p>
      </div>
    </div>

    <style jsx>{`
      .price-list{
        padding:8rem 18rem 13rem 8rem;
      }

      .item{
        margin-bottom:50px;
      }

      .title{
        font-weight: bold;
        font-size: 24px;
        color: #424242;
        margin-bottom:50px;
      }

      .subtitle{
        font-weight: 600;
        font-size: 18px;
        color: #424242;
        margin-bottom:25px;
      }

      .text{
        font-weight: 500;
        font-size: 16px;
        line-height: 180%;
        color: #424242;
        margin-bottom:10px;
        padding-left:30px;
      }

      @media screen and (max-width:600px){
        .price-list{
          padding:5rem 2rem 5rem 2rem;
        }
      }
    `}</style>
    </>
  )
}

export default PriceList
