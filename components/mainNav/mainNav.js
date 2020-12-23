import MainNavBtn from "./mainNavBtn";

const MainNav = ({activeLink}) => {
  return(
    <section className="main-nav">
       <MainNavBtn activeLink = {activeLink} width="16.6%" text="Главная" link="/"/>
       <MainNavBtn activeLink = {activeLink} width="16.6%" text="О компании" link="/about"/>
       <MainNavBtn activeLink = {activeLink} width="16.6%" text="Отзывы" link="/reviews"/>
       {
        // <MainNavBtn activeLink = {activeLink} width="14%" text="Для бизнеса" link="/forbusiness"/>
       }
       <MainNavBtn activeLink = {activeLink} width="16.6%" text="Оплата и доставка" link="/payment"/>
       <MainNavBtn activeLink = {activeLink} width="16.6%" text="Статьи" link="/posts"/>
       <MainNavBtn activeLink = {activeLink} width="16.6%" text="Контакты" margin="none" link="/contacts"/>


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

         @media screen and (max-width:1200px){
           .main-nav{
             display:none;
           }
         }
       `}</style>
    </section>
  )
}

export default MainNav;
