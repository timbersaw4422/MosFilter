const LandingFooter = () => {
  return(
    <>
      <div className="footer">
        <div className="landing-wrapper">

           <div className="footer__left">
             <p className="footer__text">© 2012-2020 Сервисная служба «Мос — Фильтр».
                Для жалоб и предложений директор: +7 (495) 744-61-81
             </p>
             <p className="footer__link"> Политика конфиденциальности</p>
           </div>

           <div className="footer__right">
             <img src="/img/landing/logo.png" alt="Студия разработки Мануфактура" className="logo"/>
           </div>

        </div>
      </div>

      <style jsx>{`
        .landing-wrapper{
          padding:2.5rem 0;
          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        .footer__text{
          font-weight: normal;
          font-size: 12px;
          line-height: 150%;
          color: #424242;
          max-width:35rem;
        }

        .footer__link{
          font-weight: normal;
          font-size: 12px;
          text-decoration-line: underline;
          color: #004990;
          cursor:pointer;
        }

        @media screen and (max-width:600px){
          .landing-wrapper{
            flex-direction:column;
          }
          .footer__left{
            padding-bottom:5rem;
            width:100%;
            background: #F8F8F8;
          }
          .footer__text{
            max-width:100%;
          }
          .footer__right{
            padding-top:2.6rem;
          }
        }
      `}</style>
    </>
  )
}

export default LandingFooter;
