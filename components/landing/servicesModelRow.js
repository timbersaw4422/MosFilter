const ServicesModelRow = () => {
  return(
    <>
      <div className="model-row">
        <div className="landing-wrapper">
            <h2>Любые марки и модели</h2>
            <p>Обслуживаем фильтры всех марок</p>
            <div className="row">
              <div className="card">
                 <img src="/img/landing/atollS.png" alt="Атолл"/>
              </div>
              <div className="card">
                 <img src="/img/landing/geizerS.png" alt="Гейзер"/>
              </div>
              <div className="card">
                 <img src="/img/landing/barierS.png" alt="Барьер"/>
              </div>
              <div className="card">
                 <img src="/img/landing/akvaforS.png" alt="Аквафор"/>
              </div>
              <div className="card">
                 <img src="/img/landing/aquafilterS.png" alt="Аква фильтр"/>
              </div>
              <div className="card">
                 <img src="/img/landing/prioS.png" alt="Прио"/>
              </div>
              <div className="card">
                 <img src="/img/landing/zepterS.png" alt="Зептер"/>
              </div>
              <div className="card">
                 <img src="/img/landing/wasserS.png" alt="Платинум вассер"/>
              </div>
            </div>
        </div>
      </div>

      <style jsx>{`
        h2{
          font-weight: 600;
          font-size: 30px;
          color: #424242;
          margin-bottom:0;
        }

        p{
          font-weight: 500;
          font-size: 16px;
          color: #424242;
          margin-bottom:60px;
        }

        .card{
          width:24%;
          height:100px;
          margin-bottom:13px;
          position:relative;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .card:after{
          content:"";
          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          background:#fff;
          box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.08);
          border-radius: 5px;
          transition:0.3s;
          z-index:0;
        }

        .card img{
          position:relative;
          z-index:1;
        }

        .row{
          display:flex;
          align-items:center;
          justify-content:space-between;
          flex-wrap:wrap;
          margin-bottom:140px;
        }

        @media(hover:hover){
          .card:hover:after{
            transform:scale(1.05);
          }
        }

        @media screen and (max-width:1050px){
          .card{
            width:48%;
          }
        }

        @media screen and (max-width:550px){
          .card{
            width:100%;
          }
          .row{
            margin-bottom:50px;
          }
        }

        `}</style>
    </>
  )
}

export default ServicesModelRow;
