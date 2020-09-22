import CallToAction from "./callToAction";
import Link from "next/link";

const HowToChooseFilter = () => {
  return(
    <div className="post-body">
      <img src="/img/posts/howToChooseFilter/1.png" alt="" className="post-body__img"/>
      <h2 className="post-body__title">Какой фильтр для воды выбрать</h2>
      <p className="post-body__text">Столкнувшись с проблемой качества московской водопроводной воды, люди задаются вопросом - как выбрать фильтр для воды
      под мойку? Как не прогадать с качеством и не переплатить. В данной статье мы разберём основные типы фильтров их предназначение, плюсы и минусы.</p>
      <div className="horizontal-shape"></div>

      <img src="/img/posts/howToChooseFilter/2.png" alt="" className="post-body__img"/>
      <h3 className="post-body__subtitle">1. Фильтры кувшины</h3>
      <p className="post-body__text">Простые в эксплуатации фильтры кувшины предназначены частично защитить воду от хлора, органики,
      механических примесей. Кроме этого в зависимости от наполнителя картриджа данный тип фильтра может сделать воду мягче и насытить полезными
      минеральными веществами. </p>
      <p className="post-body__plusses">Плюсы</p>
      <p className="post-body__text with-point with-bold with-margin-top">Компактность</p>
      <p className="post-body__text with-padding">Данный тип фильтра занимает мало места, его можно хранить на кухонном столе или в холодильнике.
      Вы можете взять его с собой на дачу или в поход. Не смотря на то что данные фильтр считаются не эффективными, с простой очисткой воды они
      справляются прекрасно.</p>
      <p className="post-body__text with-point with-bold with-margin-top">Низкая стоимость</p>
      <p className="post-body__text with-padding">Средняя цена на такой фильтр составляет 1000 ₽</p>

      <p className="post-body__plusses">Минусы</p>
      <p className="post-body__text with-point with-bold with-margin-top">Недостаточная фильтрация</p>
      <p className="post-body__text with-padding">Фильтры-кувшины не фильтруют соли металлов, не справляются с органикой и хлоркой.</p>
      <p className="post-body__text with-point with-bold with-margin-top">Малый объём при частом обслуживании</p>
      <p className="post-body__text with-padding">Средний объём фильтруемой воды в сутки ~10 литров. При ресурсе картриджа в 300 литров за
      год обслуживание такого фильтра обойдётся владельцам в 2 - 2.5 тысячи рублей. Поэтому если у вас большая семья стоит присмотреться к более
      совершенным системам водоочистки.</p>
      <div className="horizontal-shape"></div>

      <img src="/img/posts/howToChooseFilter/3.png" alt="" className="post-body__img"/>
      <h3 className="post-body__subtitle">2. Проточные фильтры</h3>
      <p className="post-body__text">Системы начального уровня полной очистки водопроводной воды, абсорбриуют хлор, органику,
      механические примяси и соли тяжелых металлов. В редких случаях дополнительно могут иметь наполнитель для минерализации и умягчения воды  </p>
      <p className="post-body__plusses">Плюсы</p>
      <p className="post-body__text with-point with-bold with-margin-top">Качественная очистка воды</p>
      <p className="post-body__text with-padding">Многоступенчатая система фильтрации позволяет данному типу фильтров достойно  очищать воду от самых вредных
      бактерий, солей и примясей, а так же справляется с хлористыми соединениями и ржавчиной.</p>
      <p className="post-body__text with-point with-bold with-margin-top">Низкая стоимость</p>
      <p className="post-body__text with-padding">Средняя цена на такой фильтр составляет 3 500 - 5 000 ₽</p>

      <p className="post-body__plusses">Минусы</p>
      <p className="post-body__text with-point with-bold with-margin-top">Не может противостоять мелким бактериям</p>
      <p className="post-body__text with-padding">Неспособность противостоять мелким органическим соединениям бактериям и вирусам,
      по причине отсутствия мембраны</p>
      <p className="post-body__text with-point with-bold with-margin-top">Низкий ресурс картриджей</p>
      <p className="post-body__text with-padding">Быстрая засоряемость картриджей не позволяет фильтру долгое время давать изначальное
      качество воды. В среднем замена фильтрущих элементов проводится раз в 6 месяцев.</p>
      <div className="horizontal-shape"></div>

      <img src="/img/posts/howToChooseFilter/4.png" alt="" className="post-body__img"/>
      <h3 className="post-body__subtitle">3. Системы обратного осмоса</h3>
      <p className="post-body__text">Усовершенствованные проточные фильтры, отличающиеся как качеством получаемой воды, так и комплектацией.
      Дополнительно имеют мембранный картридж, накопительный бак до 20 литров и модуль-минерализатор для доведения воды до идеального
      химического состава. </p>
      <p className="post-body__plusses">Плюсы</p>
      <p className="post-body__text with-point with-bold with-margin-top">Полная очистка воды</p>
      <p className="post-body__text with-padding">Системы обратного осмоса фильтруют воду на 97% не давая попасть в вашу пищу не одному
      веществу кроме молекул воды.</p>
      <p className="post-body__text with-point with-bold with-margin-top">Качество сборки</p>
      <p className="post-body__text with-padding">Практически все современные фильтры выполненны из технологичных материалов и при правильной
      эксплуатации работают безотказно на протяжении многих лет</p>

      <p className="post-body__plusses">Минусы</p>
      <p className="post-body__text with-point with-bold with-margin-top">Габариты</p>
      <p className="post-body__text with-padding">Системы обратного осмоса могут занимать достаточно много места на небольшой кухне</p>
      <p className="post-body__text with-point with-bold with-margin-top">Требуют специалиста для обслуживания</p>
      <p className="post-body__text with-padding">Для безотказной работы системы, замену фильтрующих элементов следует доверять специалисту. </p>
      <div className="horizontal-shape"></div>

      <CallToAction title="Выбрать фильтр под мойку"
                    text="Интернет-магазин фильтров для воды «Mos—filter» - предоставляет своим клиентам ассортимент фильтров для воды которые по нашему опыту доказали свою нажёжность и качество. "
                    buttonText="Подобрать фильтр"
                    link="/"
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
      `}</style>
    </div>
  )
}

export default HowToChooseFilter;
