import LandingGood from "./landingGood";

const LandingCatalog = () => {
  return(
    <>
      <div className="landing-catalog">
         <h2 className="catalog__title"> Каталог картриджей</h2>

         <div className="catalog__tabs">
             <div className="catalog__tab catalog__tab1">Для проточных фильтров</div>
             <div className="catalog__tab catalog__tab2">Для систем обратного осмоса</div>
             <div className="catalog__tab catalog__tab3">Все комплекты</div>
         </div>

         <div className="landing-goods">
             <LandingGood />
             <LandingGood />
             <LandingGood />
             <LandingGood />
             <LandingGood />

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
