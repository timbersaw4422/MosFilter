const LandingCatalog = () => {
  return(
    <>
      <div className="catalog">
         <h2 className="catalog__title"> Каталог картриджей</h2>
         <div className="catalog__tabs">
             <div className="catalog__tab">Для проточных фильтров</div>
             <div className="catalog__tab">Для систем обратного осмоса</div>
             <div className="catalog__tab">Все комплекты</div>
         </div>
      </div>


      <style jsx>{`
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
        }


        `}</style>
    </>
  )
}

export default LandingCatalog;
