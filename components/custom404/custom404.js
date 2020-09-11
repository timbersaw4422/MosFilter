import Router from "next/router";

const Custom404 = () => {

  const clickHandler = () => {
    Router.push("/").then(() => window.scrollTo (0, 0));
  }

  return(
    <>
      <div className="custom404">
         <h2 className="custom404__title">Ошибка 404</h2>
         <p className="custom404__subtitle">Упс! Кажется что-то пошло не так.</p>
         <p className="custom404__text"> Страница, которую вы запрашиваете, не существует. Возможно она была удалена,
          или вы набрали неверный адрес. Перейдите на главную страницу и попробуйте найти необходимую вам информацию там.</p>
          <div className="custom404__btn" onClick={clickHandler}><span>Перейти на главную</span></div>
         <img className="custom404__img" src="/img/custom404.png" alt=""/>
      </div>

      <style jsx>{`
         .custom404{
           margin-top:8rem;
           position:relative;
           padding-bottom:22rem;
         }

          .custom404__title{
            font-weight: bold;
            font-size: 54px;
            line-height: 150%;
            color: #424242;
            margin-bottom:0;
          }

          .custom404__subtitle{
            font-weight: 300;
            font-size: 36px;
            line-height: 150%;
            color: #424242;
            margin-top:0;
          }

          .custom404__text{
            font-weight: 300;
            font-size: 24px;
            line-height: 150%;
            color: #424242;
            width:100%;
            max-width:67rem;
          }

          .custom404__img{
            position:absolute;
            right:0;
            bottom:0;
          }

          .custom404__btn{
            font-weight: 600;
            font-size: 12px;
            line-height: 16px;
            display:flex;
            align-items:center;
            justify-content:center;
            width:20rem;
            height:4rem;
            border: 2px solid #4862D2;
            border-radius: 2rem;
            cursor:pointer;
            position:relative;
            margin-top:5rem;
          }

          .custom404__btn span{
            position:relative;
            z-index:2;
            color: #424242;
            transition:0.3s;
          }

          .custom404__btn:after{
            content:"";
            position:absolute;
            top:-1px;
            left:-1px;
            right:-1px;
            bottom:-1px;
            background:#4862D2;
            z-index:1;
            transition:0.3s;
            border-radius: 2rem;
            opacity:0;
          }

          @media(hover:hover){
            .custom404__btn:hover:after{
               opacity:1;
            }
            .custom404__btn:hover span{
               color:#fff;
            }
          }
      `}</style>
    </>
  )
}

export default Custom404;
