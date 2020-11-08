import Arrow from "./arrow";

const LandingAbout = () => {
  return(
    <>
      <div className="about">
        <div className="landing-wrapper">
          <h2 className="title">О сервисной службе</h2>

          <div className="subtitle-and-whatsapp">
              <p className="subtitle">Наша сервисная служба занимается заменой картриджей и ремонтом
                фильтров для воды Гейзер. Мы работаем по данному направлению
                8 лет и за время своего существования обслужили более 30 000
                клиентов во всех районах Москвы и Подмосковья.
              </p>

              <div className="whatsapp">
                <span>Написать в WhatsApp</span>
                <Arrow fill="#FF652E"/>
              </div>
          </div>

          <div className="advantages">
            <div className="advantages__left"></div>
            <div className="advantages__right">
              <div className="advantage">
                <img src="/img/landing/ad1.png" alt="Официальная гарантия" className="advantage__img"/>
                <p className="advantage__title">Официальная гарантия</p>
                <p className="advantage__text">Всем клиентам мы предоставляем официальную гарантию на 1 год,
                   которая распространяется как на продукцию так и на выполненные работы.</p>
              </div>
              <div className="advantage">
                <img src="/img/landing/ad2.png" alt="Официальная гарантия" className="advantage__img"/>
                <p className="advantage__title">Оперативность</p>
                <p className="advantage__text">Выезд мастера осуществляется в течение 1-2 дней после заявки.
                    Мы никогда не опаздываем и не срываем сроков. </p>
              </div>
              <div className="advantage">
                <img src="/img/landing/ad3.png" alt="Официальная гарантия" className="advantage__img"/>
                <p className="advantage__title">Цены от поставщика</p>
                <p className="advantage__text">Мы работаем напрямую с производителем поэтому у нас самые
                   низкие цены на оригинальную продукцию по Москве</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .about{
          padding-bottom:18rem;
        }

        .title{
          font-weight: 600;
          font-size: 30px;
          line-height: 37px;
          color: #424242;
          margin-bottom: 5.8rem;
        }

        .landing-wrapper{
          padding-top:2.5rem;
          border-top:1px solid #E3E3E3;
        }

        .subtitle-and-whatsapp{
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-bottom:9.5rem;
        }

        .subtitle{
          font-weight: 500;
          font-size: 16px;
          line-height: 160%;
          color: #424242;
          max-width:56rem;
        }

        .whatsapp{
          display:flex;
          align-items:Center;
          cursor:pointer;
        }

        .whatsapp span{
          font-weight: 600;
          font-size: 16px;
          color: #FF652E;
          margin-right:3.2rem;
        }

        .advantages{
          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        .advantages__left, .advantages__right{
          width:46%;
          height:63rem;
        }

        .advantages__left{
          background:url('/img/categories/man1.png') center / cover ;
        }

        .advantages__right{
          display:flex;
          flex-direction:column;
          justify-content:space-between;
        }

        .advantage__title{
          font-weight: 600;
          font-size: 20px;
          color: #424242;
          margin:3rem 0 2rem 0;
        }

        .advantage__text{
          font-size: 16px;
          line-height: 150%;
          color: #424242;
          margin:0;
        }


        `}</style>
    </>
  )
}

export default LandingAbout
