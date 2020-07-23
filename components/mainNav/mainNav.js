import MainNavBtn from "./mainNavBtn";

const MainNav = () => {
  return(
    <section className="main-nav">
       <MainNavBtn width="20%" text="Каталог"/>
       <MainNavBtn width="16%" text="Компания"/>
       <MainNavBtn width="13%" text="Услуги"/>
       <MainNavBtn width="16%" text="Для бизнеса"/>
       <MainNavBtn width="21%" text="Оплата и доставка"/>
       <MainNavBtn width="14%" text="Контакты" margin="none"/>


       <style jsx>{`
         .main-nav{
           margin-top:3rem;
           height:6rem;
           position:relative;
           border-left:1px solid #fff;
           border-right:1px solid #fff;
           display:flex;
           align-items:center;
           margin-bottom:5rem;
         }

         .main-nav:before, .main-nav:after{
           content:"";
           position:absolute;
           top:0;
           bottom:0;
           background: linear-gradient(180deg, #1974C2 0%, #1B6EB7 100%);
           width:calc(50vw - 50% - 1px);
         }

         .main-nav:before{
           transform:translateX(calc(-100% - 1px));
         }
         .main-nav:after{
           right:0;
           transform:translateX(calc(100% + 1px));
         }
       `}</style>
    </section>
  )
}

export default MainNav;
