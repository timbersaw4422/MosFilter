import Logo from "../header/logoWithoutH1";
import Link from "next/link";

const AboutCartridgesAtoll = () => {

  let links= [
    {id:1, text:"Комплекты картриджей", link:"/cartridges/atoll"},
    {id:2, text:"Замена картриджей", link:"/replacement/atoll"},
    {id:3, text:"Ремонт фильтра", link:"/repair/atoll"},
    {id:4, text:"Фильтры для воды", link:"/filters/atoll"},
    {id:5, text:"Установка фильтра", link:"/installation/atoll"}
  ];

  return(
    <div className="about-cartridges-atoll">

        <div className="about-brand">
            <div className="about-brand__left">
               <img src="/img/logos/atoll.png" alt="atoll-logo" className="about-brand-logo"/>
            </div>

            <div className="about-brand__right">
                <h3 className="about-brand__title without-margin-top">Покупка картриджей Atoll</h3>
                <p className="about-brand__text">Покупка готового набора сменных картриджи для фильтров Atoll делает вашу жизнь проще.
                Во-первых комплект уже содержит все необходимые фильтрующие элементы. Во-вторых мы можете быть уверены в качестве продукци.
                Оригинальные картриджи Atoll от официального производителя гарантируют бесперебойную работу вашего фильтра.</p>
                <p className="about-brand__text">Готовый комплект фильтров Атолл освобождает вас от покупки неподходящих картриджей.
                Так же в наборе фильтров есть всё необходимое для их самостоятельной замены: подробная инструкция по замене
                и специальный инструмент. </p>
            </div>
        </div>

        <div className="about-brand">
            <div className="about-brand__left"></div>

            <div className="about-brand__right">
                <h3 className="about-brand__title with-margin-top">Как происходит фильтрация</h3>
                <p className="about-brand__text">В основе фильтров осмоса Atoll находится мембрана, через которую просачиваются только молекулы воды.
                Но что бы не засорять мембрану крупными взвесями содержащимися в воде, вода должна пройти предварительные стадии очистки,
                через так называемые предфильтры. При правильной эксплуатации фильтра мы рекомендуем менять мембрану раз в полтора года. </p>
                <p className="about-brand__text">На превом этапе вода посупает  в механический модуль с пористым пропиленовым картриджем который
                полностью очищает воду от крупных механических взвесей. </p>
                <p className="about-brand__text">На втором и третьем этапе вода поступает в модули с картриджами из активированного угля которые
                окончательно подготавливают воду к поступлению к мембране, затем в минерализатор  где очищенная жидкость обретает естественный цвет,
                вкус и запах. </p>
            </div>
        </div>

        <div className="about-brand flex-end">
              <div className="about-brand__left">
                 <Logo color="#424242" fill="#0F4C81"/>
              </div>

              <div className="about-brand__right with-margin-top">
                  <h2 className="about-brand__title">Купить картриджи Atoll</h2>
                  <p className="about-brand__text">Интернет-магазин фильтров для воды «Mos—filter» - является официальным дилером фильтров Атолл.
                  В нашем ассортименте вы найдёте все существующие на данным момент комплекты картриджей Atoll, по цене от производителя с
                  быстрой доставкой по Москве и МО..</p>
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

          .about-cartridges-atoll{
            margin-top:7rem;
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

export default AboutCartridgesAtoll;
