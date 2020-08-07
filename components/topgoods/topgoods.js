import Good from "../good/good";

const TopGoods = () => {
  return(
    <div className="top-goods">
      <h2 className="title">Хиты продаж</h2>
      <div className="goods-wrapper">
        <Good width="23.5%" margin="0 1.5% 1.3rem 0" img="/img/goods/1.png" categoryTitle="Система обратного осмоса"
        goodTitle="Atoll A550 STD BOX" price = {15400}/>
        <Good width="23.5%" margin="0 1.5% 1.3rem 0" img="/img/goods/1.png" categoryTitle="Система обратного осмоса"
        goodTitle="Atoll A550 STD BOX" price = {15400}/>
        <Good width="23.5%" margin="0 1.5% 1.3rem 0" img="/img/goods/1.png" categoryTitle="Система обратного осмоса"
        goodTitle="Atoll A550 STD BOX" price = {15400}/>
        <Good width="23.5%" margin="0 1.5% 1.3rem 0" img="/img/goods/1.png" categoryTitle="Система обратного осмоса"
        goodTitle="Atoll A550 STD BOX" price = {15400}/>
        <Good width="23.5%" margin="0 1.5% 1.3rem 0" img="/img/goods/1.png" categoryTitle="Система обратного осмоса"
        goodTitle="Atoll A550 STD BOX" price = {15400}/>
        <Good width="23.5%" margin="0 1.5% 1.3rem 0" img="/img/goods/1.png" categoryTitle="Система обратного осмоса"
        goodTitle="Atoll A550 STD BOX" price = {15400}/>
        <Good width="23.5%" margin="0 1.5% 1.3rem 0" img="/img/goods/1.png" categoryTitle="Система обратного осмоса"
        goodTitle="Atoll A550 STD BOX" price = {15400}/>
        <Good width="23.5%" margin="0 1.5% 1.3rem 0" img="/img/goods/1.png" categoryTitle="Система обратного осмоса"
        goodTitle="Atoll A550 STD BOX" price = {15400}/>

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

      `}</style>
    </div>
  )
}

export default TopGoods;
