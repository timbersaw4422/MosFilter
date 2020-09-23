import Logo from "../header/logoWithoutH1";
import Link from "next/link";

const AboutFiltersGeizer = () => {

  let links= [
    {id:1, text:"Комплекты картриджей", link:"/cartridges/geizer"},
    {id:2, text:"Замена картриджей", link:"/replacement/geizer"},
    {id:3, text:"Ремонт фильтра", link:"/repair/geizer"},
    {id:4, text:"Фильтры для воды", link:"/filters/geizer"},
    {id:5, text:"Установка фильтра", link:"/installation/geizer"}
  ];

  return(
    <div className="about-filters-atoll">

        <div className="about-brand">
            <div className="about-brand__left">
               <img src="/img/logos/geizer.png" alt="atoll-logo" className="about-brand-logo"/>
            </div>

            <div className="about-brand__right">
                <h3 className="about-brand__title without-margin-top">Покупка фильтра Гейзер</h3>
                <p className="about-brand__text">Покупка фильтра для воды — это неотъемлемая часть жизни в большом городе.
                Накипь на бытовых приборах, плюс непригодная в употребление водопроводная вода ставят перед жителями мегаполисов
                вопрос о покупке бытового фильтра. И в этом вопросе, фильтры Гейзер — идеальный выбор. </p>
                <p className="about-brand__text"><span className="fw-600">1. Фильтры Гейзер </span> честно входят в тройку самых покупаемых фильтров в России.
                Клиенты ценят данную марку за непревзойдённую надёжнось и качество получаемой воды.  </p>
                <p className="about-brand__text"><span className="fw-600">2. Данные марка </span> производится в России, а значит в наличии всегда
                имеются комплектующие и расходники.  </p>
                <p className="about-brand__text"><span className="fw-600">3. Демократичные цены </span> позволят любому желающему наслаждаться чистой
                водой у себя в квартире или на даче.</p>
            </div>
        </div>

        <div className="about-brand flex-end">
              <div className="about-brand__left">
                 <Logo color="#424242" fill="#0F4C81"/>
              </div>

              <div className="about-brand__right with-margin-top">
                  <h2 className="about-brand__title">Купить фильтр Гейзер в Москве</h2>
                  <p className="about-brand__text">Интернет-магазин фильтров для воды «Mos—filter» является официальным дилером марки Гейзер.
                  В ассортименте нашего магазины вы найдёте всё необходимое для установки и обслуживания фильтров
                  Гейзер по цене завода изготовителя. </p>
              </div>
        </div>

        <div className="about-brands__links">
          {links.map(link => <Link key={link.id} href={link.link}><a className="about-brands__link">{link.text}</a></Link>)}
        </div>


        <style jsx>{`
          .about-brand{
            display:flex;
            align-items:center;
          }

          .about-brand__left{
            width:30%;
          }

          .about-brand__right{
            width:70%;
          }

          .about-brand__title{
            font-weight: 600;
            font-size: 20px;
            color: #424242;
            margin-bottom:3rem;
          }

          .about-brand__text{
            font-size: 14px;
            line-height: 19px;
            color: #333333;
            margin-bottom:0;
            margin-top:2rem;
          }

          .about-brand__text span {
            font-weight:600;
          }

          .flex-end{
            align-items:flex-end;
          }

          .about-brands__links{
            display:flex;
            align-items:center;
            justify-content:space-between;
            padding-top:4rem;
            margin-top:8rem;
            border-top:1px solid #f0f0f0;
          }

          .about-brands__link{
            font-weight: bold;
            font-size: 16px;
            color: #ADADAD;
            text-decoration:none;
            margin-right:2rem;
          }

          .with-margin-top{margin-top:6rem;}

          .with-margin-top{
            margin-top:6rem;
          }

          .fw-600{
            font-weight:600;
          }

          @media screen and (max-width:900px){
            .about-brand{
              flex-direction:column-reverse;
            }
            .about-brand__right{
              width:100%;
              margin-bottom:3rem;
            }
            .about-brand__left{
              width:auto;
            }
            .flex-end{
              align-items:center;
            }
          }

          @media screen and (max-width:700px){
            .about-brands__links{
              flex-wrap:wrap;
              justify-content:center;
            }
            .about-brands__link{
              margin-bottom:2rem;
            }
          }

        `}</style>
    </div>
  )
}

export default AboutFiltersGeizer;
