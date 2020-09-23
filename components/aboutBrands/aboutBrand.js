import Logo from "../header/logoWithoutH1";
import Link from "next/link";

const AboutBrand = ({category}) => {

  let categoryToLowerCase = "";
  if (category) categoryToLowerCase = category.charAt(0).toLowerCase() + category.substr(1);

  let caption;
  switch(category) {
    case "Atoll": caption = "Атолл";break;
    case "Geizer": caption = "Гейзер";break;
    case "Aquaphor": caption = "Аквафор";break;
    case "Platinum-wasser": caption = "Platinum-wasser";break;
    case "Barier": caption = "Барьер";break;
    case "Others": caption = "Другие марки";break;
    default:break;
  }

  let logoImg = ""; let text="";

  let links= [
    {id:1, text:"Комплекты картриджей", link:`/cartridges/${categoryToLowerCase}`},
    {id:2, text:"Замена картриджей", link:`/replacement/${categoryToLowerCase}`},
    {id:3, text:"Ремонт фильтра", link:`/repair/${categoryToLowerCase}`},
    {id:4, text:"Фильтры для воды", link:`/filters/${categoryToLowerCase}`},
    {id:5, text:"Установка фильтра", link:`/installation/${categoryToLowerCase}`}
  ];

  switch (category){
    case "Atoll":{
      logoImg="/img/logos/atoll.png";
      text = <span><span style={{fontWeight:"600"}}>ATOLL</span> - компания специализируется на производстве фильтров для воды европейского качества.
       Вся продукция компании ATOLL комплектуется и собирается исключительно из экологичных материалов  ведущих производителей из США,
       Европы и России. Фильтры ATOLL не раз доказывали своё превосходство что подтверждается сертификатами NSF и WQA.</span>;
       break;
    }

    case "Geizer":{
      logoImg="/img/logos/geizer.png";
      text =
      <div>
          <p><span style={{fontWeight:"600"}}>Компания «Гейзер»</span> – ведущий производитель фильтров для воды на Российском рынке. Системы очистки «Гейзер»
          стоят в каждой третьей квартире Москвы, они фильтруют воду из любых источников и справляются с любым загрязнением воды. </p>
          <p><span style={{fontWeight:"600"}}>Наличие фильтра дома или на даче «Гейзер» это: </span></p>
          <p style={{margin:0}}>• Всегда чистая питьевая вода;</p>
          <p style={{margin:0}}>• Отсутствие накипи в бытовых приборах;</p>
          <p style={{margin:0}}>• Вкусный кофе и чай;</p>
          <p style={{margin:0}}>• Отказ от бутилированной воды;</p>
          <p style={{margin:0}}>• Отказ от кипячения;</p>
          <p style={{margin:0}}>• Мягкая и нежная кожа после душа или ванны;</p>
          <p style={{margin:0}}>• Крепкое здоровье и долголетие;</p>
          <p>Срок эксплуатации фильтров «Гейзер» достигает 10 лет. Во всех крупных городах работают
          сервысные центры готовые прийти на помощь своим клиентам. Выбирая фильтр марки «Гейзер» в вашем доме всегда будет кристално чистая вода. </p>
       </div>;
       break;
    }

    case "Aquaphor":{
      logoImg="/img/logos/aquaphor.png";
      text =
      <div>
          <p><span style={{fontWeight:"600"}}>Компания «Аквафор»</span> – существует на Российском рынке с 1992. Бытовые фильтры «Аквафор»
          заслужили звание самых надёжных и практичных. Продукция марки «Аквафор» продаётся в 60 странах, у компании имеется собственная научная
          база позволяющая разрабатывать продукцию высочайшего класса.  </p>
          <p><span style={{fontWeight:"600"}}>Миссия компании</span> - создавать лучшие в мире решения для получения воды высочайшего качества,
            доступной каждому жителю планеты.  </p>
       </div>;
       links.splice(0, 1);
       break;
    }

    case "Platinum-wasser":{
      logoImg="/img/logos/platinum-wasser.png";
      text =
      <div>
          <p><span style={{fontWeight:"600"}}>Platinum Wasser</span> –  немецкая компания Wasserhaus GmbH начинавет свою историю в 1990 году с
          небольшого магазина по продаже фильтров для воды в Потсдаме. Большой опыт и понимание потребностей клиента позволило компании создать
          собственное производство высококачественных  фильтров для воды.  </p>
       </div>;
       links.splice(0, 1);
       break;
    }

    case "Barier":{
      logoImg="/img/logos/barier.png";
      text =
      <div>
          <p><span style={{fontWeight:"600"}}>Барьер</span> - рооссийская компания по производству фильтров для воды, от кувшинов до промышленных систем.
           Продкуция компании заслужила народную любовь, имеет свыше 11 наград.  </p>
           <p>Приверженность высоким международным стандартам качества выпускаемой продукции подтверждено независимой сертификацией на
           соответствие требованиям стандартов NSF/ANSI в международной организации IAPMO Research and Testing, Inc.</p>
       </div>;
       links.splice(0, 1);
       break;
    }

    case "Others":{
      links.splice(0, 2);
    }

    default:break;

  }

  const isOthers = category === "Others" ? true : false;

  return (
    <>
     { !isOthers
       ?
       <div className="about-brand">
           <div className="about-brand__left">
              <img src={logoImg} alt={category+"-logo"} className="about-brand-logo"/>
           </div>

           <div className="about-brand__right">
               <h3 className="about-brand__title without-margin-top">Фильтры и картриджи {caption}</h3>
               <div className="about-brand__text">{text}</div>
           </div>
       </div>
       :
       null
     }

      <div className="about-brand flex-end with-margin-top">
            <div className="about-brand__left">
               <Logo color="#424242" fill="#0F4C81"/>
            </div>

            <div className="about-brand__right">
                {!isOthers
                  ?  <h2 className="about-brand__title">Купить картриджи и фильтры {caption}</h2>
                  :  <h2 className="about-brand__title">Купить картриджи для фильтров воды</h2>
                }
                {!isOthers
                  ?  <p className="about-brand__text">Интернет-магазин фильтров для воды «Mos—filter» - является официальным дилером фильтров {category}.
                  В нашем магазине вы найдёт полный ассортимент продукции данной марки, по цене от производителя с быстрой доставкой по Москве и МО.</p>
                  :  <p className="about-brand__text">Интернет-магазин «Mos—filter» занимается заменой картриджей в фильтрах для воды любых марок в Москве и МО.
                  Наши специалисты со знанием дела подберут всё необходимое, произведут профессиональную замену и дадут гарантию.</p>
                }

            </div>

      </div>

      <div className="horizontal-shape"></div>

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
          margin-top:4rem;
        }

        .about-brands__link{
          font-weight: bold;
          font-size: 16px;
          color: #ADADAD;
          text-decoration:none;
          margin-right:2rem;
        }

        .with-margin-top{
          margin-top:6rem;
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
    </>
   )
}

export default AboutBrand;
