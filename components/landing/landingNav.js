import Logo from "../header/logoWithoutH1";
import LandingButton from "./landingButton";
import $ from "jquery";
import {useState} from "react";
import {reachGoal} from "../../analytics/analytics";

const LandingNav = ({deleteCatalogAndServices, globalBrand}) => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const burgerClassNames = ["ham", "hamRotate", "ham4"];
  if (isMenuOpen) burgerClassNames.push("active");

  return(
    <>
      <div className="nav">
        <div className="landing-wrapper">
           <div className="logo">
              <Logo fill = "#0F4C81" color ="#424242" isClickHandler="no" zIndex="99"/>
           </div>

           <ul className="links">
             <li className="link" onClick = {() => {
               $('html, body').animate({
                    scrollTop: $(".calculator").offset().top  // класс объекта к которому приезжаем
                }, 500);
             }}>Калькулятор</li>
             { !deleteCatalogAndServices &&
             <li className="link" onClick = {() => {
               $('html, body').animate({
                    scrollTop: $(".landing-catalog").offset().top  // класс объекта к которому приезжаем
                }, 500);
             }}>Каталог</li>
             }
             { !deleteCatalogAndServices &&
             <li className="link" onClick = {() => {
               $('html, body').animate({
                    scrollTop: $(".services").offset().top  // класс объекта к которому приезжаем
                }, 700);
             }}>Услуги</li>
           }
             <li className="link" onClick = {() => {
               $('html, body').animate({
                    scrollTop: $(".landing-reviews").offset().top  // класс объекта к которому приезжаем
                }, 1000);
             }}>Отзывы</li>
             <li className="link" onClick = {() => {
               $('html, body').animate({
                    scrollTop: $(".contacts").offset().top  // класс объекта к которому приезжаем
                }, 1000);
             }}>Контакты</li>
           </ul>

           <a className="phone-link" href="tel:+74957446181" onClick={() => reachGoal(`freeCallBtn${globalBrand}`)}>
           <LandingButton
               adaptive850={true}
               text="Бесплатный звонок"
               display1000 = "none"
               css={{maxWidth:"200px", height:"40px", marginBottom:"0rem", background:"#004990",
               after:"#fff", hoverColor:"#424242", boxShadow:"none", border:"2px solid #004990", textTransform:"none"}}
               phonelink={true}
               />
           </a>

           <div className="burger" onClick = {() => setMenuOpen(prev => !prev)}>
              <svg className={burgerClassNames.join(" ")} viewBox="0 0 100 100" width="80">
              <path
                   className="line top"
                   d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
              <path
                   className="line middle"
                   d="m 70,50 h -40" />
              <path
                   className="line bottom"
                   d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
              </svg>
           </div>

          <div className="menu" onClick = {() => setMenuOpen(prev => !prev)}>
            <div className="menu__buttons">
               <ul className="menu-left">
                   <li className="menu-link" onClick = {() => {
                     $('html, body').animate({
                          scrollTop: $(".calculator").offset().top  // класс объекта к которому приезжаем
                      }, 500);
                   }}>Калькулятор</li>
                   <li className="menu-link" onClick = {() => {
                     $('html, body').animate({
                          scrollTop: $(".landing-catalog").offset().top  // класс объекта к которому приезжаем
                      }, 500);
                   }}>Каталог</li>
                   <li className="menu-link" onClick = {() => {
                     $('html, body').animate({
                          scrollTop: $(".services").offset().top  // класс объекта к которому приезжаем
                      }, 700);
                   }}>Услуги</li>
                   <li className="menu-link" onClick = {() => {
                     $('html, body').animate({
                          scrollTop: $(".landing-reviews").offset().top  // класс объекта к которому приезжаем
                      }, 1000);
                   }}>Отзывы</li>
                   <li className="menu-link" onClick = {() => {
                     $('html, body').animate({
                          scrollTop: $(".contacts").offset().top  // класс объекта к которому приезжаем
                      }, 1000);
                   }}>Контакты</li>
               </ul>
               <div className="menu-shape"></div>
               <div className="menu-right">
                 <svg style ={{marginBottom:"4.2rem", display:"block"}} onClick = {() => window.open("https://wa.me/79254950004", "_blank")}
                    width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 5.06696C8.44308 5.06696 5.14509 8.36496 5.13951 12.4219C5.13951 13.8114 5.53013 15.1674 6.26674 16.3337L6.43973 16.6127L5.69754 19.3248L8.48214 18.5938L8.75 18.7556C9.87723 19.4252 11.1719 19.7824 12.4944 19.7824H12.5C16.5513 19.7824 19.9386 16.4844 19.9386 12.4275C19.9386 10.4632 19.0904 8.61607 17.7009 7.22656C16.3058 5.83147 14.4643 5.06696 12.5 5.06696ZM16.8248 15.5804C16.6406 16.0993 15.7589 16.5681 15.3348 16.6295C14.6317 16.7355 14.0848 16.6797 12.6842 16.077C10.4688 15.1172 9.01786 12.885 8.90625 12.74C8.79464 12.5949 8.00223 11.5402 8.00223 10.452C8.00223 9.36384 8.57143 8.82812 8.7779 8.60491C8.97879 8.3817 9.21875 8.32589 9.36942 8.32589C9.51451 8.32589 9.66518 8.32589 9.79353 8.33147C9.92745 8.33705 10.1116 8.28125 10.2902 8.71094C10.4743 9.15179 10.9152 10.24 10.971 10.3516C11.0268 10.4632 11.0658 10.5915 10.9877 10.7366C10.5636 11.5848 10.1116 11.5513 10.3404 11.942C11.1942 13.4096 12.048 13.9174 13.3482 14.5703C13.5714 14.6819 13.6998 14.6652 13.8281 14.5145C13.9565 14.3694 14.3806 13.8672 14.5257 13.6496C14.6708 13.4263 14.8214 13.4654 15.0223 13.5379C15.2232 13.6105 16.3114 14.1462 16.5346 14.2578C16.7578 14.3694 16.9029 14.4252 16.9587 14.5145C17.0089 14.6205 17.0089 15.067 16.8248 15.5804ZM22.3214 0H2.67857C1.19978 0 0 1.19978 0 2.67857V22.3214C0 23.8002 1.19978 25 2.67857 25H22.3214C23.8002 25 25 23.8002 25 22.3214V2.67857C25 1.19978 23.8002 0 22.3214 0ZM12.4944 21.2723C11.01 21.2723 9.55357 20.8984 8.26451 20.1953L3.57143 21.4286L4.82701 16.8415C4.05134 15.5022 3.64397 13.9788 3.64397 12.4163C3.64955 7.53906 7.61719 3.57143 12.4944 3.57143C14.8605 3.57143 17.0815 4.49219 18.7556 6.16629C20.4241 7.8404 21.4286 10.0614 21.4286 12.4275C21.4286 17.3047 17.3717 21.2723 12.4944 21.2723Z" fill="#004990"/>
                 </svg>

                 <svg style ={{marginBottom:"4.2rem", display:"block"}} onClick = {() => window.open("https://tlgg.ru/@mos_filter", "_blank")}
                    width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 3C25 1.34315 23.6569 0 22 0H3C1.34315 0 0 1.34315 0 3V22C0 23.6569 1.34315 25 3 25H22C23.6569 25 25 23.6569 25 22V3ZM20.1125 6.61875L17.5688 18.6063C17.3813 19.4563 16.875 19.6625 16.1688 19.2625L14.3316 17.9083C13.1546 17.0408 11.5235 17.1481 10.4704 18.1625L10.425 18.2062C10.081 18.5503 9.6725 18.1752 9.70634 17.6898L9.8436 15.7215C9.89181 15.03 10.2061 14.3842 10.7204 13.9195L17.1 8.15625C17.4125 7.88125 17.0312 7.725 16.6187 8L8.91484 12.8502C8.17174 13.318 7.26097 13.4368 6.42274 13.1752L3.91875 12.3937C3.0875 12.1312 4.06875 11.5625 5.09375 11.1625L19.0375 5.4C19.7313 5.15 20.3375 5.56875 20.1125 6.61875Z" fill="#004990"/>
                 </svg>

                 <svg style ={{marginBottom:"2.8rem", display:"block"}} onClick = {() => window.open("https://www.instagram.com/mos_filter/", "_blank")}
                    width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 9.52344C11.9113 9.52366 11.336 9.69842 10.8466 10.0256C10.3573 10.3528 9.97593 10.8178 9.75081 11.3617C9.52569 11.9056 9.46691 12.5041 9.58188 13.0814C9.69686 13.6587 9.98044 14.189 10.3968 14.6051C10.8131 15.0213 11.3435 15.3047 11.9208 15.4195C12.4982 15.5342 13.0966 15.4752 13.6405 15.2499C14.1843 15.0246 14.6491 14.643 14.9761 14.1536C15.3031 13.6641 15.4777 13.0887 15.4777 12.5C15.4771 11.7106 15.1631 10.9536 14.6048 10.3955C14.0465 9.83739 13.2894 9.52373 12.5 9.52344ZM19.4593 7.23549C19.3077 6.85147 19.0789 6.50269 18.787 6.21077C18.4951 5.91886 18.1463 5.69004 17.7623 5.5385C16.5904 5.07589 13.8002 5.17969 12.5 5.17969C11.1998 5.17969 8.41239 5.07199 7.23717 5.5385C6.85315 5.69004 6.50436 5.91886 6.21245 6.21077C5.92053 6.50269 5.69171 6.85147 5.54018 7.23549C5.07812 8.40737 5.18136 11.2003 5.18136 12.4994C5.18136 13.7985 5.07812 16.5882 5.54241 17.764C5.69394 18.148 5.92276 18.4968 6.21468 18.7887C6.5066 19.0806 6.85538 19.3094 7.2394 19.4609C8.41127 19.9235 11.2015 19.8198 12.5022 19.8198C13.803 19.8198 16.5893 19.9275 17.7645 19.4609C18.1485 19.3094 18.4973 19.0806 18.7892 18.7887C19.0811 18.4968 19.31 18.148 19.4615 17.764C19.9275 16.5921 19.8203 13.7991 19.8203 12.5C19.8203 11.2009 19.9275 8.41183 19.4615 7.23605L19.4593 7.23549ZM12.5 17.0759C11.595 17.0759 10.7103 16.8075 9.95777 16.3047C9.20527 15.8019 8.61876 15.0873 8.27243 14.2511C7.92609 13.415 7.83547 12.4949 8.01203 11.6073C8.18859 10.7197 8.6244 9.90431 9.26435 9.26435C9.90431 8.6244 10.7197 8.18859 11.6073 8.01203C12.4949 7.83547 13.415 7.92609 14.2511 8.27243C15.0873 8.61876 15.8019 9.20527 16.3047 9.95777C16.8075 10.7103 17.0759 11.595 17.0759 12.5C17.0766 13.1011 16.9588 13.6965 16.7291 14.252C16.4994 14.8075 16.1623 15.3122 15.7373 15.7373C15.3122 16.1623 14.8075 16.4994 14.252 16.7291C13.6965 16.9588 13.1011 17.0766 12.5 17.0759ZM17.2645 8.80022C17.0532 8.80033 16.8467 8.73779 16.671 8.62049C16.4952 8.50319 16.3583 8.33642 16.2773 8.14127C16.1964 7.94611 16.1752 7.73134 16.2163 7.52411C16.2575 7.31689 16.3592 7.12652 16.5085 6.97709C16.6579 6.82766 16.8482 6.72588 17.0554 6.68463C17.2626 6.64337 17.4774 6.66449 17.6726 6.74531C17.8678 6.82614 18.0346 6.96303 18.152 7.13869C18.2694 7.31435 18.332 7.52087 18.332 7.73214C18.3326 7.87244 18.3055 8.01147 18.2522 8.14127C18.199 8.27106 18.1206 8.38906 18.0216 8.4885C17.9227 8.58794 17.805 8.66686 17.6755 8.72074C17.5459 8.77461 17.407 8.80238 17.2667 8.80246L17.2645 8.80022ZM22.3214 0H2.67857C1.96817 0 1.28686 0.282206 0.784535 0.784535C0.282206 1.28687 0 1.96817 0 2.67857L0 22.3214C0 23.0318 0.282206 23.7131 0.784535 24.2155C1.28686 24.7178 1.96817 25 2.67857 25H22.3214C23.0318 25 23.7131 24.7178 24.2155 24.2155C24.7178 23.7131 25 23.0318 25 22.3214V2.67857C25 1.96817 24.7178 1.28687 24.2155 0.784535C23.7131 0.282206 23.0318 0 22.3214 0ZM21.3661 16.183C21.2941 17.6133 20.9676 18.8806 19.9235 19.9219C18.8795 20.9632 17.6133 21.2963 16.1847 21.3644C14.7109 21.4475 10.2924 21.4475 8.81864 21.3644C7.38839 21.2924 6.12556 20.9654 5.0798 19.9219C4.03404 18.8783 3.70536 17.6105 3.63728 16.183C3.55413 14.7087 3.55413 10.2896 3.63728 8.81696C3.70926 7.38672 4.03181 6.11942 5.0798 5.07812C6.12779 4.03683 7.39397 3.70759 8.81864 3.63951C10.2924 3.55636 14.7109 3.55636 16.1847 3.63951C17.615 3.7115 18.8817 4.0385 19.9235 5.08203C20.9654 6.12556 21.298 7.39341 21.3661 8.82366C21.4492 10.2924 21.4492 14.7076 21.3661 16.183Z" fill="#004990"/>
                 </svg>
               </div>
            </div>

            <p className="subtitle fs-16" style={{marginBottom:"2.3rem", cursor:"pointer"}} onClick={() => window.open("mailto:info@mos-filter.ru")}>
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 4L10 9L2 4V2L10 7L18 2V4ZM18 0H2C0.89 0 0 0.89 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0Z" fill="#004990"/>
              </svg>
              <span style={{marginLeft:"2.2rem"}}>info@mos-filter.ru</span>
            </p>

            <a className="phone-link" href="tel:+74957446181">

            <p className="subtitle fs-16" style={{marginBottom:"2.3rem", cursor:"pointer"}}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M14.2857 0H1.71429C1.25963 0 0.823594 0.180612 0.502103 0.502103C0.180612 0.823594 0 1.25963 0 1.71429L0 14.2857C0 14.7404 0.180612 15.1764 0.502103 15.4979C0.823594 15.8194 1.25963 16 1.71429 16H14.2857C14.7404 16 15.1764 15.8194 15.4979 15.4979C15.8194 15.1764 16 14.7404 16 14.2857V1.71429C16 1.25963 15.8194 0.823594 15.4979 0.502103C15.1764 0.180612 14.7404 0 14.2857 0ZM13.7004 10.9775L13.1646 13.2989C13.1374 13.417 13.071 13.5223 12.9763 13.5977C12.8815 13.6731 12.764 13.7142 12.6429 13.7143C6.92857 13.7143 2.28571 9.08179 2.28571 3.35714C2.28997 3.23716 2.33261 3.12171 2.40738 3.02778C2.48216 2.93386 2.5851 2.8664 2.70107 2.83536L5.0225 2.29964C5.0621 2.29127 5.10239 2.28661 5.14286 2.28571C5.24645 2.29094 5.34676 2.32381 5.43336 2.3809C5.51997 2.43798 5.58971 2.51721 5.63536 2.61036L6.70679 5.11036C6.73303 5.17776 6.74764 5.24913 6.75 5.32143C6.74128 5.48002 6.67076 5.62887 6.55357 5.73607L5.20036 6.84321C6.02029 8.58104 7.41896 9.97971 9.15679 10.7996L10.2639 9.44643C10.3711 9.32924 10.52 9.25872 10.6786 9.25C10.7509 9.25233 10.8222 9.26694 10.8896 9.29321L13.3896 10.3646C13.4828 10.4102 13.5621 10.48 13.6192 10.5666C13.6763 10.6532 13.7091 10.7535 13.7143 10.8571C13.7136 10.8976 13.7089 10.9379 13.7004 10.9775Z" fill="#004990"/>
              </svg>
              <span style={{marginLeft:"2.2rem"}}>+7 (495) 744 - 61 - 81 <span className="free-call">(звонок бесплатный)</span></span>
            </p>

            </a>

            <p className="subtitle fs-16" >
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.19683 2.18377C3.60334 0.785524 5.51098 0 7.50008 0C9.48918 0 11.3968 0.785524 12.8033 2.18377C14.2098 3.58201 15 5.47843 15 7.45584C15 9.43326 14.2098 11.3297 12.8033 12.7279L7.50008 18L2.19683 12.7279C1.50036 12.0356 0.947876 11.2137 0.570942 10.3091C0.194007 9.40452 0 8.43497 0 7.45584C0 6.47672 0.194007 5.50717 0.570942 4.60259C0.947876 3.698 1.50036 2.87608 2.19683 2.18377ZM7.50008 9.58598C8.06837 9.58598 8.61338 9.36155 9.01521 8.96208C9.41705 8.5626 9.64281 8.02079 9.64281 7.45584C9.64281 6.8909 9.41705 6.34909 9.01521 5.94961C8.61338 5.55014 8.06837 5.32571 7.50008 5.32571C6.93179 5.32571 6.38678 5.55014 5.98494 5.94961C5.58311 6.34909 5.35735 6.8909 5.35735 7.45584C5.35735 8.02079 5.58311 8.5626 5.98494 8.96208C6.38678 9.36155 6.93179 9.58598 7.50008 9.58598Z" fill="#004990"/>
                </svg>
               <span style={{marginLeft:"2.2rem"}}>Москва, ул. Шарикоподшипниковская 38, стр1</span>
            </p>

          </div>

        </div>
      </div>


      <style jsx>{`
        .phone-link{
          text-decoration:none;
        }
        .subtitle span{
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          color: #004990;
        }

        .menu{
          transform:translateX(${isMenuOpen ? "0" : "100%"});
          padding:12rem 5rem 2rem 2rem;
          position:fixed;
          top:0;
          right:0;
          bottom:0;
          width:320px;
          background:#fff;
          z-index:98;
          transition:0.3s;
          overflow-y:scroll;
        }

        .menu__buttons{
          display:flex;
          align-items:Center;
          justify-content:space-between;
          margin-bottom:7rem;
        }

        .menu-left{
          padding:0;
        }

        .menu-right svg{
          cursor:pointer;
        }

        .menu-shape{
          background:#004990;
          height:160px;
          width:1px;
          margin-top:-20px;
        }

        .menu-link{
          list-style-type:none;
          font-size: 14px;
          color: #4B4B4B;
          cursor:pointer;
          margin-bottom:1.8rem;
        }

        .menu::-webkit-scrollbar {
          width:0px;
        }

        .burger{
          display:none;
          position:relative;
          z-index:99;
          transform:translateX(20px);
        }

        .nav{
          padding:2rem 0;
          position:relative;
          z-index:98;
          overflow:hidden;
          background:#fff;
        }

        .landing-wrapper{
          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        .links{
          display:flex;
          align-items:center;
          margin-right: 5rem;
        }

        .link{
          margin-left:2.3rem;
          font-size: 14px;
          color: #4B4B4B;
          list-style-type:none;
          cursor:pointer;
          transition:0.2s;
          position:relative;
        }

        .logo{
          flex-grow:1;
        }

        .ham {
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
            transition: transform 400ms;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .hamRotate.active {
            transform: rotate(45deg);
          }
          .hamRotate180.active {
            transform: rotate(180deg);
          }
          .line {
            fill:none;
            transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
            stroke:#004990;
            stroke-width:5.5;
            stroke-linecap:round;
          }

          .ham4 .top {
            stroke-dasharray: 40 121;
          }
          .ham4 .bottom {
            stroke-dasharray: 40 121;
          }
          .ham4.active .top {
            stroke-dashoffset: -68px;
          }
          .ham4.active .bottom {
            stroke-dashoffset: -68px;
          }

        @media(hover:hover){
          .link:hover{

            color: #004990;
          }
        }

        @media screen and (max-width:1000px){
          .menu, .burger{
            display:block;
          }

          .links{
            display:none;
          }
        }

        @media screen and (max-width:500px){
          .menu{
            width:100%;
          }
        }


        `}</style>
    </>
  )
}

export default LandingNav;
