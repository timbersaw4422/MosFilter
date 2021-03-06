import Good from "../good/good";

const TopGoods = () => {
  return(
    <div className="top-goods">
      <h2 className="title">Хиты продаж</h2>
      <div className="goods-wrapper">
        <Good width="23.5%" margin="0 1.5% 1.3rem 0" img="/img/goods/201.png" categoryTitle="Комплект картриджей для"
        goodTitle="Atoll A-550 | 560 STD" price = {3500} id={201} index={20}/>
        <Good width="23.5%" margin="0 1.5% 1.3rem 0" img="/img/goods/301.png" categoryTitle="Комплект картриджей для"
        goodTitle="Гейзер «Био»" price = {2200} id={301} index={21}/>
        <Good width="23.5%" margin="0 1.5% 1.3rem 0" img="/img/goods/307.png" categoryTitle="Комплект картриджей для"
        goodTitle="Гейзер «Нанотек»" price = {3450} id={307} index={22}/>
        <Good width="23.5%" margin="0 1.5% 1.3rem 0" img="/img/goods/307.png" categoryTitle="Комплект картриджей для"
        goodTitle="Гейзер «Престиж»" price = {3000} id={308} index={23}/>
        <Good width="23.5%" margin="0 1.5% 1.3rem 0" img="/img/goods/601.png" categoryTitle="Комплект картриджей для"
        goodTitle="Барьер «Профи Стандарт»" price = {1600} id={601} index={24}/>
        <Good width="23.5%" margin="0 1.5% 1.3rem 0" img="/img/goods/401.png" categoryTitle="Комплект картриджей для"
        goodTitle="Аквафор «Осмо 50 Классика»" price = {2790} id={401} index={25}/>
        <Good width="23.5%" margin="0 1.5% 1.3rem 0" img="/img/goods/607.png" categoryTitle="Комплект картриджей для"
        goodTitle="Барьер «Осмо»" price = {3300} id={607} index={26}/>
        <Good width="23.5%" margin="0 1.5% 1.3rem 0" img="/img/goods/4.png" categoryTitle="Система обратного осмоса"
        goodTitle="Atoll A-550 «Патриот»" price = {8500} id={4} index={27}/>

      </div>


      <style jsx>{`

        .goods-wrapper{
          display:flex;
          align-items:center;
          flex-wrap:wrap;
          margin-right:-1.5%;
        }

        .title{
          font-weight: 600;
          font-size: 20px;
          line-height: 27px;
          color: #424242;
        }

        @media screen and (max-width:600px){
          .title{
            text-align:Center;
            margin-bottom:4rem;
          }
        }

      `}</style>
    </div>
  )
}

export default TopGoods;
