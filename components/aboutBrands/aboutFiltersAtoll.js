import Logo from "../header/logoWithoutH1";
import Link from "next/link";

const AboutFiltersAtoll = () => {

  let links= [
    {id:1, text:"Комплекты картриджей", link:"/cartridges/atoll"},
    {id:2, text:"Замена картриджей", link:"/replacement/atoll"},
    {id:3, text:"Ремонт фильтра", link:"/repair/atoll"},
    {id:4, text:"Фильтры для воды", link:"/filters/atoll"},
    {id:5, text:"Установка фильтра", link:"/installation/atoll"}
  ];

  return(
    <div className="about-filters-atoll">

        <div className="about-brand">
            <div className="about-brand__left">
               <img src="/img/logos/atoll.png" alt="atoll-logo" className="about-brand-logo"/>
            </div>

            <div className="about-brand__right">
                <h3 className="about-brand__title without-margin-top">Покупка фильтра Atoll</h3>
                <p className="about-brand__text">Покупка фильтра для воды — это неотъемлемая часть жизни в большом городе. Накипь на бытовых приборах,
                плюс непригодная в употребление водопроводная вода ставят перед жителями мегаполисов вопрос о покупке бытового фильтра. И в этом вопросе,
                фильтр Atoll — идеальный выбор. Во-первых, Atoll — бренд проверенный годами. Сотни положительных отзывов, долговечность и качество сборки
                гарантируют бесперебойную подачу чистой воды. Во-вторых, фильтры Атолл производятся в России, а значит в наличии всегда имеются комплектующие
                и расходники. </p>
            </div>
        </div>

        <div className="about-brand flex-end">
              <div className="about-brand__left">
                 <Logo color="#424242" fill="#0F4C81"/>
              </div>

              <div className="about-brand__right with-margin-top">
                  <h2 className="about-brand__title">Купить фильтр Atoll в Москве</h2>
                  <p className="about-brand__text">Интернет-магазин фильтров для воды «Mos—filter»  является официальным дилером фильтров Атолл.
                  В нашем ассортименте вы найдёте все существующие на данным момент комплекты картриджей Atoll, по цене от производителя с быстрой
                  доставкой по Москве и МО.</p>
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
          }

          .about-brand__text span {
            font-weight:600;
          }

          .flex-end{
            align-items:flex-end;
          }

          .horizontal-shape{
            background: #F0F0F0;
            width:100%;
            height:1px;
            margin-top:7rem;
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
          }

          .with-margin-top{margin-top:6rem;}

        `}</style>
    </div>
  )
}

export default AboutFiltersAtoll;
