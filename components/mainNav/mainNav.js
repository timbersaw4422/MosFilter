import MainNavBtn from "./mainNavBtn";

const MainNav = () => {
  return(
    <section className="main-nav">
       <MainNavBtn width="16%" text="Главная" link="/"/>
       <MainNavBtn width="16%" text="Компания" link="/"/>
       <MainNavBtn width="16%" text="Услуги" link="/"/>
       <MainNavBtn width="16%" text="Для бизнеса" link="/"/>
       <MainNavBtn width="16%" text="Оплата и доставка" link="/"/>
       <MainNavBtn width="16%" text="Контакты" margin="none" link="/"/>


       <style jsx>{`
         .main-nav{
           margin-top:3rem;
           height:5rem;
           position:relative;
           display:flex;
           align-items:center;
           justify-content:space-between;
           margin-bottom:5rem;
           background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%), #FFFFFF;
           border: 1px solid #E2E2E2;
           box-sizing: border-box;
           box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.05);
           border-radius: 1rem;
         }


       `}</style>
    </section>
  )
}

export default MainNav;
