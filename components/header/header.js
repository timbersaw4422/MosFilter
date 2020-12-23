import Logo from "./logo";
import FreeCallBtn from "./freeCallBtn";
import CartIсon from "./cartIcon";
import Burger from "./burger.js";
import MobileMenu from "./mobileMenu";
import {useState} from "react";

const Header = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  return(
    <>
    <section className="header">

         <Logo color="#424242" fill="#0F4C81"/>

         <div className="header__phone">
             <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7821 8.97138C14.6997 8.38775 14.2573 7.93275 13.6878 7.79713C11.4742 7.26863 10.9193 5.97013 10.8257 4.52987C10.4331 4.4555 9.73478 4.375 8.5494 4.375C7.36401 4.375 6.66567 4.4555 6.27312 4.52987C6.17949 5.97013 5.62459 7.26863 3.41101 7.79713C2.84151 7.93363 2.39914 8.38775 2.31668 8.97138L1.88977 11.9831C1.73945 13.0436 2.50394 14 3.56735 14H13.5315C14.594 14 15.3593 13.0436 15.209 11.9831L14.7821 8.97138ZM8.5494 11.8055C7.35113 11.8055 6.37963 10.8255 6.37963 9.618C6.37963 8.4105 7.35113 7.4305 8.5494 7.4305C9.74767 7.4305 10.7192 8.4105 10.7192 9.618C10.7192 10.8255 9.74681 11.8055 8.5494 11.8055ZM17.0962 3.5C17.0756 2.1875 13.796 0.000875 8.5494 0C3.30192 0.000875 0.0223605 2.1875 0.00260405 3.5C-0.0171524 4.8125 0.0206426 6.5205 2.1801 6.23612C4.70635 5.90275 4.55087 5.00413 4.55087 3.71962C4.55087 2.82362 6.60554 2.6075 8.5494 2.6075C10.4933 2.6075 12.5471 2.82362 12.5479 3.71962C12.5479 5.00413 12.3925 5.90275 14.9187 6.23612C17.0773 6.5205 17.1159 4.8125 17.0962 3.5Z" fill="#3F3F3F"/>
             </svg>
             <a href="tel:+74957446181" className="header__phone-title">+7 (495) 744 - 61 - 81</a>
         </div>


         <span className="mobile-vertical-shape"></span>

         <FreeCallBtn />

         <CartIсon />

         <span className="mobile-vertical-shape"></span>

         <Burger isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}/>

       </section>

       <MobileMenu isMenuOpen={isMenuOpen} setMenuOpen = {setMenuOpen}/>



       <style jsx>{`

         .mobile-vertical-shape{
           display:block;
           height:24px;
           width:1px;
           background: #424242;
           z-index:50;
           margin-right:2rem;
           display:none;
         }

         .header{
           display:flex;
           justify-content:space-between;
           align-items: center;
           padding-top:2.5rem;
           position:relative;
           z-index:99;
           background:#fff;
         }

         .header__phone{
           position:relative;
           z-index:10;
           margin-right:2rem;
         }

         .header__location, .header__phone{
           display:flex;
           align-items:center;
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

         .header__vertical__shape{
           height:3.8rem;
           width:1px;
           background:#CCCCCC;;
         }

         .header:before{
           content:"";
           position:absolute;
           top:0;
           left:-2.5%;
           right:-2.5%;
           bottom:-2rem;
           box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
           display:none;
           z-index:0;
           background:#fff;
         }

         @media screen and (max-width:1200px){
           .header__location{
             display:none;
           }
           .header:before{
             display:block;
           }

           .header{
             margin-bottom:5rem;
           }
         }

         @media screen and (max-width:900px){
           .header__phone{
             display:none;
           }
         }

         @media screen and (max-width:700px){
           .mobile-vertical-shape{
             display:block;
           }
         }
      `}</style>
   </>
  )
}

export default Header;
