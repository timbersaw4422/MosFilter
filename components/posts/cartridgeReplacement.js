import CallToAction from "./callToAction";
import Link from "next/link";

const HowToChooseFilter = () => {
  return(
    <div className="post-body">
      <img src="/img/posts/cartridgesReplacement/1.png" alt="" className="post-body__img"/>
      <h2 className="post-body__title">Как часто менять картриджи?</h2>
      <p className="post-body__text">Не важно какой марки у вас фильтр (Аквафор, Атолл, Гейзер, любой другой) рано или поздно приходится
      менять картриджи, так как они имеют определённый ресурс. В данной статье мы постараемся ответить на вопрос: Как часто необходимо менять
      картриджи в фильтре для воды?</p>
      <div className="horizontal-shape"></div>

      <img src="/img/posts/cartridgesReplacement/2.png" alt="" className="post-body__img"/>
      <h3 className="post-body__subtitle">Как понять что пора менять картриджи?</h3>
      <p className="post-body__text"><span className="number">1. </span>Падает давление из крана </p>
      <p className="post-body__text"><span className="number">2. </span>Появился странный привкус </p>
      <p className="post-body__text"><span className="number">3. </span>Ощущается неприятный запах  </p>
      <p className="post-body__text"><span className="number">4. </span>Стала появляться накипь на бытовых проборах </p>
      <p className="post-body__text"><span className="number">5. </span>Ухудшились вкусовые качества приготавливаемой пищи </p>
      <div className="horizontal-shape"></div>

      <img src="/img/posts/cartridgesReplacement/3.jpg" alt="" className="post-body__img"/>
      <h3 className="post-body__subtitle">От чего зависит срок замены?</h3>
      <p className="post-body__text with-margin-bottom4" >Наша практика обслуживания фильтров по Москве показывает, что срок замены картриджей
      индивидуален и зависит от множества факторов:</p>
      <p className="post-body__text"><span className="number">1. </span>Состояние труб водопровода отдельного района Москвы </p>
      <p className="post-body__text"><span className="number">2. </span>Состояние водопоготовительной станции </p>
      <p className="post-body__text"><span className="number">3. </span>Объём используемой воды </p>
      <p className="post-body__text"><span className="number">4. </span>Количество человек в семье</p>
      <p className="post-body__text"><span className="number">5. </span>Качество используемых картриджей </p>
      <p className="post-body__text"><span className="number">6. </span>Тип вашего фильтра (осмос, проточный) </p>
      <div className="horizontal-shape"></div>

      <h3 className="post-body__subtitle">Итог</h3>
      <p className="post-body__text">Индивидуальный срок замены картриджей может определить только специалист с опытом,
      который сумеет сопоставить все необходимые факторы и точно сказать когда необходимо провести замену.</p>
      <p className="post-body__plusses">Универсальный способ</p>
      <p className="post-body__text with-point with-bold with-margin-top">Проточные фильтр</p>
      <p className="post-body__text with-padding">Регулярная замена всех картриджей раз в 6 месяцев</p>
      <p className="post-body__text with-point with-bold with-margin-top">Системы осмоса</p>
      <p className="post-body__text with-padding">Регулярная замена предфильтров(основные колбы) раз в 6-8 месяцев</p>
      <p className="post-body__text with-padding">Замена мембраны и минерализатора раз в год</p>
      <div className="horizontal-shape"></div>

      <CallToAction title="Довериться специалистам"
                    text="Мы предоставляет своим клиентам профессиональную помощь по замене картриджей и обслуживанию фильтров с гарантией на срок 1 год."
                    buttonText="Задать вопрос"
      />

      <div className="horizontal-shape"></div>
      <Link href="/posts"><a className="post-body__back-link">
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.286 14C16.0609 14.0002 15.8379 13.955 15.6299 13.8669C15.4219 13.7787 15.2329 13.6495 15.074 13.4865L9.9309 8.22838C9.6095 7.8997 9.42896 7.45398 9.42896 6.98923C9.42896 6.52448 9.6095 6.07876 9.9309 5.75008L15.074 0.492001C15.3973 0.172734 15.8303 -0.00392711 16.2798 6.62564e-05C16.7293 0.00405962 17.1593 0.188388 17.4772 0.513351C17.795 0.838315 17.9753 1.27791 17.9792 1.73746C17.9831 2.19701 17.8103 2.63975 17.4981 2.97031L13.567 6.98923L17.4981 11.0082C17.7377 11.2533 17.901 11.5655 17.9671 11.9055C18.0332 12.2454 17.9992 12.5978 17.8695 12.918C17.7398 13.2382 17.5201 13.5119 17.2383 13.7045C16.9564 13.8971 16.625 13.9999 16.286 14ZM6.85706 14C6.6319 14.0002 6.40892 13.955 6.20091 13.8669C5.99291 13.7787 5.80399 13.6495 5.64501 13.4865L0.50194 8.22838C0.180548 7.8997 0 7.45398 0 6.98923C0 6.52448 0.180548 6.07876 0.50194 5.75008L5.64501 0.492001C5.96834 0.172734 6.40139 -0.00392711 6.85089 6.62564e-05C7.30038 0.00405962 7.73037 0.188388 8.04822 0.513351C8.36608 0.838315 8.54637 1.27791 8.55028 1.73746C8.55419 2.19701 8.38139 2.63975 8.0691 2.97031L4.13809 6.98923L8.0691 11.0082C8.30879 11.2533 8.472 11.5655 8.53812 11.9055C8.60424 12.2454 8.57029 12.5978 8.44057 12.918C8.31084 13.2382 8.09117 13.5119 7.80931 13.7045C7.52745 13.8971 7.19607 13.9999 6.85706 14Z" fill="url(#paint0_linear)"/>
            <defs>
            <linearGradient id="paint0_linear" x1="9" y1="0" x2="9" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6089F3"/>
            <stop offset="1" stopColor="#191792"/>
            </linearGradient>
            </defs>
        </svg>
         &nbsp;&nbsp;&nbsp;
         Вернуться к списку статей</a>
      </Link>




      <style jsx>{`
         .post-body{
           margin-top:3rem;
         }

          .post-body__img{
            margin-bottom:6rem;
            display:block;
            max-width:100%;
          }

          .post-body__title{
            font-weight: 600;
            font-size: 24px;
            color: #424242;
            margin:0 0 4rem 0;
          }

          .post-body__subtitle{
            font-weight: 600;
            font-size: 22px;
            line-height: 30px;
            color: #424242;
            margin-bottom:4rem;
            margin-top:0;
          }

          .post-body__text{
            font-size: 16px;
            line-height: 150%;
            color: #424242;
            width:100%;
            max-width:630px;
            position:relative;
          }

          .horizontal-shape{
            height:1px;
            width:100%;
            margin:8rem 0 6rem 0;
            background:#DDDDDD;
          }

          .post-body__plusses{
            font-weight: bold;
            font-size: 18px;
            color: #424242;
            margin-top:4rem;
            margin-bottom:3rem;
          }

          .with-bold{
            font-weight:600;
          }

          .with-point{
            padding-left:5.7rem;
          }

          .with-point:before{
            position:absolute;
            content:"";
            width:0.8rem;
            height:0.8rem;
            border-radius:50%;
            background: radial-gradient(103.33% 90% at 50% 10%, #6089F3 0%, #191792 51.26%, #6089F3 100%), #FFFFFF;
            top:0.6rem;
            left:3rem;
          }

          .with-padding{
            padding-left:3rem;
          }

          .with-margin-top{
            margin-top:3.3rem;
          }

          .post-body__back-link{
            font-weight: 600;
            font-size: 20px;
            color: #424242;
            text-decoration:none;
          }

          .number{
            color: #4862D2;
            font-weight:bold;
          }

          .with-margin-bottom4{
            margin-bottom:4rem;
          }
      `}</style>
    </div>
  )
}

export default HowToChooseFilter;
