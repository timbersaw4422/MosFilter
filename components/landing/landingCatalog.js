import LandingGood from "./landingGood";
import {useState} from "react";

const LandingCatalog = ({goods, setModalOpen, setModalType, setActiveGood}) => {

  const [type, setType] = useState(3);
  let displayedGoods;
  if (type === 3) displayedGoods = goods;
  else if (type === 1) displayedGoods = goods.filter(good => good.type==="проточный");
  else displayedGoods = goods.filter(good => good.type === "осмос");



  return(
    <>
      <div className="landing-catalog">
         <h2 className="catalog__title"> Каталог картриджей</h2>

         <div className="catalog__tabs">
             <div className="catalog__tab catalog__tab1" onClick = {() => setType(1)}>Для проточных фильтров</div>
             <div className="catalog__tab catalog__tab2" onClick = {() => setType(2)}>Для систем обратного осмоса</div>
             <div className="catalog__tab catalog__tab3" onClick = {() => setType(3)}>Все комплекты</div>
         </div>

         <div className="landing-goods">
             {displayedGoods.map(good => <LandingGood
               key={good.id}
               id={good.id}
               title={good.title}
               subtitle={good.subtitle}
               price={good.price}
               img={good.img}
               discount={good.discount}
               setModalOpen={setModalOpen}
               setModalType={setModalType}
               setActiveGood={setActiveGood}
               />)}
         </div>


      </div>


      <style jsx>{`

        .landing-catalog{
          padding-bottom:15rem;
        }

        .catalog__title{
          font-weight: 600;
          font-size: 30px;
          color: #424242;
          padding-top:5rem;
          margin-top:0;
          border-top:1px solid #E3E3E3;
          margin-bottom:6rem;
        }

        .catalog__tabs{
          display:flex;
          background: #FFFFFF;
          border: 1px solid #004990;
          margin-bottom:6rem;
          width:85%;
        }

        .catalog__tab{
          height:5rem;
          display:flex;
          align-items:center;
          justify-content:center;
          background: #FFFFFF;
          font-weight: 500;
          font-size: 18px;
          color: #004990;
          cursor:pointer;
        }

        .catalog__tab1{
          width:35%;
          border-right:1px solid #004990;
        }

        .catalog__tab2{
          width:40%;
          border-right:1px solid #004990;
        }

        .catalog__tab3{
          width:25%;
        }

        .catalog__tab${type}{
          background: #004990;
          color:#fff;
        }

        .landing-goods{
          width:90%;
          display:flex;
          align-items:center;
          flex-wrap:wrap;
        }

        `}</style>
    </>
  )
}

export default LandingCatalog;
