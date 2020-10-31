const LandingModelRow = () => {
  return(
    <>
      <div className="model-row">
        <div className="landing-wrapper">

           <h2 className="title">Весь модельный ряд</h2>

           <p className="subtitle">Обслуживаем модели любого года производства</p>

           <div className="row">
             <div className="card">
               <div className="card__background">
                 <img src="/img/landing/geizer1.png" alt="Проточные фильтры Гейзер" className="card__img"/>
               </div>
               <div className="card__title">Стационарные фильтры</div>
             </div>
             <div className="card">
               <div className="card__background">
                 <img src="/img/landing/geizer2.png" alt="Системы обратного осмоса Гейзер" className="card__img"/>
               </div>
               <div className="card__title">Системы обратного осмоса</div>
             </div>
           </div>

        </div>
      </div>


      <style jsx>{`
        .model-row{
          margin-bottom:16rem;
        }

        .title{
          font-weight: 600;
          font-size: 30px;
          color: #424242;
          margin-bottom: 0;
        }

        .subtitle{
          font-weight: 500;
          font-size: 16px;
          color: #424242;
          margin-bottom:7rem;
        }

        .row{
          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        .card{
          width:48%;
        }

        .card__background{
          width:100%;
          height:14rem;
          background:#004990;
          position:relative;
          overflow:hidden;
        }

        .card__img{
          position:absolute;
          bottom:0;
          right:5rem;
        }

        .card__title{
          font-weight: 600;
          font-size: 20px;
          color: #424242;
          margin-top:1.5rem;
        }
        `}</style>
    </>
  )
}

export default LandingModelRow
