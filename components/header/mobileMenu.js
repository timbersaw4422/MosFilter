import Link from "next/link";
import WhatsApp from "../whatsApp";

const MobileMenu = ({isMenuOpen, setMenuOpen}) => {

  const transform = !isMenuOpen ? "translateX(100%)" : "translateX(0)";

  const scrollHandler = e => {
    e.stopPropagation();
  }

  return(
    <>
      <div className="mobile-menu" onScroll={scrollHandler}>
         <p className="mobile-menu__paragraph with-mb2">Рассчитайте стоимость ваших картриджей онлайн</p>
         <div className="mobile-menu__btn btn-blue">Рассчитать</div>
         <p className="mobile-menu__title">Меню сайта</p>
         <p className="mobile-menu__shape"></p>
         <p className="mobile-menu__subtitle">Обслуживаемые марки:</p>
         <div className="close-menu" onClick = {() => setMenuOpen(false)}>
           <Link href="/categories/[category]" as="/categories/atoll"><a className="mobile-menu__link">Atoll</a></Link>
           <Link href="/categories/[category]" as="/categories/geizer"><a className="mobile-menu__link">Гейзер</a></Link>
           <Link href="/categories/[category]" as="/categories/aquaphor"><a className="mobile-menu__link">Аквафор</a></Link>
           <Link href="/categories/[category]" as="/categories/barier"><a className="mobile-menu__link">Барьер</a></Link>
           <Link href="/categories/[category]" as="/categories/platinum-wasser"><a className="mobile-menu__link">Platinum-wasser</a></Link>
           <Link href="/categories/[category]" as="/categories/others"><a className="mobile-menu__link">Я не знаю марку своего фильтра</a></Link>
         </div>
         <p className="mobile-menu__shape" style={{marginTop:"3rem"}}></p>
         <p className="mobile-menu__subtitle">Страницы:</p>
         <div className="close-menu" onClick = {() => setMenuOpen(false)}>
           <Link href="/"><a className="mobile-menu__link">Главная</a></Link>
           <Link href="/about"><a className="mobile-menu__link">О компании</a></Link>
           <Link href="/reviews"><a className="mobile-menu__link">Отзывы</a></Link>
           <Link href="/forbusiness"><a className="mobile-menu__link">Для бизнеса</a></Link>
           <Link href="/payment"><a className="mobile-menu__link">Оплата и доставка</a></Link>
           <Link href="/posts"><a className="mobile-menu__link">Статьи</a></Link>
           <Link href="/contacts"><a className="mobile-menu__link">Контакты</a></Link>
         </div>
         <p className="mobile-menu__shape" style={{marginTop:"3rem"}}></p>
         <p className="mobile-menu__subtitle">Контакты:</p>
         <div className="header__phone">
             <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7821 8.97138C14.6997 8.38775 14.2573 7.93275 13.6878 7.79713C11.4742 7.26863 10.9193 5.97013 10.8257 4.52987C10.4331 4.4555 9.73478 4.375 8.5494 4.375C7.36401 4.375 6.66567 4.4555 6.27312 4.52987C6.17949 5.97013 5.62459 7.26863 3.41101 7.79713C2.84151 7.93363 2.39914 8.38775 2.31668 8.97138L1.88977 11.9831C1.73945 13.0436 2.50394 14 3.56735 14H13.5315C14.594 14 15.3593 13.0436 15.209 11.9831L14.7821 8.97138ZM8.5494 11.8055C7.35113 11.8055 6.37963 10.8255 6.37963 9.618C6.37963 8.4105 7.35113 7.4305 8.5494 7.4305C9.74767 7.4305 10.7192 8.4105 10.7192 9.618C10.7192 10.8255 9.74681 11.8055 8.5494 11.8055ZM17.0962 3.5C17.0756 2.1875 13.796 0.000875 8.5494 0C3.30192 0.000875 0.0223605 2.1875 0.00260405 3.5C-0.0171524 4.8125 0.0206426 6.5205 2.1801 6.23612C4.70635 5.90275 4.55087 5.00413 4.55087 3.71962C4.55087 2.82362 6.60554 2.6075 8.5494 2.6075C10.4933 2.6075 12.5471 2.82362 12.5479 3.71962C12.5479 5.00413 12.3925 5.90275 14.9187 6.23612C17.0773 6.5205 17.1159 4.8125 17.0962 3.5Z" fill="#3F3F3F"/>
             </svg>
             <a href="tel:+74957446181" className="header__phone-title">+7 (495) 744 - 61 - 81</a>
         </div>
         <div className="header__location">
             <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.92725 4.48572C6.48224 4.48572 6.04722 4.61768 5.67721 4.86491C5.3072 5.11214 5.01882 5.46355 4.84852 5.87468C4.67822 6.28581 4.63366 6.73821 4.72048 7.17467C4.8073 7.61113 5.02159 8.01204 5.33626 8.32671C5.65093 8.64138 6.05184 8.85567 6.48829 8.94248C6.92475 9.0293 7.37715 8.98474 7.78829 8.81445C8.19942 8.64415 8.55082 8.35576 8.79805 7.98575C9.04529 7.61574 9.17725 7.18073 9.17725 6.73572C9.17645 6.13922 8.93915 5.56739 8.51736 5.1456C8.09558 4.72382 7.52374 4.48651 6.92725 4.48572ZM6.92725 7.86072C6.70474 7.86072 6.48724 7.79474 6.30223 7.67112C6.11723 7.5475 5.97303 7.3718 5.88788 7.16624C5.80273 6.96067 5.78046 6.73447 5.82386 6.51624C5.86727 6.29801 5.97442 6.09756 6.13175 5.94022C6.28909 5.78289 6.48954 5.67574 6.70777 5.63233C6.926 5.58893 7.1522 5.6112 7.35777 5.69635C7.56333 5.7815 7.73903 5.9257 7.86265 6.1107C7.98627 6.29571 8.05225 6.51321 8.05225 6.73572C8.05185 7.03396 7.9332 7.31988 7.7223 7.53077C7.51141 7.74167 7.22549 7.86032 6.92725 7.86072Z" fill="#C83434"/>
                <path d="M13.0082 6.09748C12.676 3.00523 10.0802 0.617981 6.9265 0.617981C5.8229 0.617822 4.73983 0.916339 3.79214 1.48187C2.84446 2.04741 2.0675 2.85888 1.54365 3.83022C1.0198 4.80157 0.768593 5.89658 0.816674 6.99914C0.864755 8.10169 1.21033 9.17067 1.81675 10.0927L1.8025 10.0695L6.0535 16.5952C6.14803 16.7398 6.27701 16.8587 6.42886 16.9411C6.5807 17.0235 6.75064 17.0669 6.92341 17.0673C7.09617 17.0678 7.26634 17.0253 7.41861 16.9436C7.57087 16.862 7.70047 16.7439 7.79575 16.5997L7.798 16.596L12.049 10.0702C12.6986 9.07693 13.043 7.91509 13.0397 6.72823C13.0397 6.50623 13.0277 6.28723 13.0052 6.07123L13.0075 6.09823L13.0082 6.09748ZM11.1077 9.45523L6.92725 15.873L2.74675 9.45523C2.12645 8.49501 1.85297 7.35162 1.97164 6.21465C2.09032 5.07767 2.59403 4.01541 3.39925 3.20398C4.30225 2.30098 5.5495 1.74223 6.92725 1.74223C8.305 1.74223 9.55225 2.30098 10.4552 3.20398C11.2605 4.01541 11.7642 5.07767 11.8829 6.21465C12.0015 7.35162 11.728 8.49501 11.1077 9.45523Z" fill="#C83434"/>
             </svg>
             <p className="header__location-title">г. Москва</p>
         </div>
         <p className="mobile-menu__shape" style={{marginTop:"2rem"}}></p>
         <WhatsApp />
         <p className="mobile-menu__rights">
           2020 © Все права защищены. <br/>
           «Мос — фильтр» Магазин фильтров для воды.
         </p>
      </div>



      <style jsx>{`
        .mobile-menu{
          padding:11rem 2.5rem 1rem 2.5rem;
          position:fixed;
          top:0;
          right:0;
          bottom:0;
          width:320px;
          z-index:-10;
          background:#fff;
          transform: ${transform};
          transition:0.3s;
          transition-timing-function:ease-in-out;
          overflow-y:scroll;
          opacity:0;
        }

        .mobile-menu__paragraph{
          font-size: 12px;
          color: #424242;
          text-align: center;
        }

        .with-mb2{
          margin-bottom:2rem;
        }

        .btn-blue{
          margin:0 auto 5rem auto;
          width:17rem;
          height:3.5rem;
          border-radius: 5px;
        }

        .mobile-menu__title{
          font-weight: 600;
          font-size: 16px;
          color: #424242;
          text-align:center;
          margin-bottom:1.5rem;
        }

        .mobile-menu__subtitle{
          font-weight: 600;
          font-size: 14px;
          color: #424242;
          margin-top:2.7rem;
        }

        .mobile-menu__link{
          font-size: 12px;
          color: #424242;
          margin-top:3rem;
          text-decoration:none;
          display:block;
        }

        .mobile-menu__shape{
          background: #C4C4C4;
          height:1px;
        }

        .header__location, .header__phone{
          display:flex;
          align-items:center;
          margin-top:2rem;
        }

        .header__phone{
          margin-top:4rem;
        }

        .header__location-title, .header__phone-title{
          font-weight: bold;
          font-size: 15px;
          color: #4B4B4B;
          margin-left:1.5rem;
          text-decoration:none;
        }

        .header__phone-title{
          cursor:pointer;
        }

        .mobile-menu__rights{
          font-size: 12px;
          color: #424242;
          margin-top:4rem;
        }

        @media screen and (max-width:1200px){
          .mobile-menu{
            z-index:98;
            opacity:1;
          }
        }

        @media screen and (max-width:500px){
          .mobile-menu{
            width:100vw;
          }
        }

        `}</style>
    </>
  )
}

export default MobileMenu;
