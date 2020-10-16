import Router from "next/router";

const Logo = ({color, fill, marginTop}) => {

  const clickHandler = () => {
    Router.push("/").then(() => window.scrollTo (0, 0));
  }

  return(
    <div className="logo" onClick = {clickHandler}>
        <div>
           <h2 className="logo__title">MOS - FILTER</h2>
           <h1 className = "logo__subtitle">Картриджи и фильтры для воды</h1>
        </div>
        <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.3098 0.840742C12.0488 1.10267 11.9025 1.45483 11.9025 1.82161C11.9025 2.18839 12.0488 2.54055 12.3098 2.80248L20.2878 10.6495C21.6222 11.9679 22.5436 13.6355 22.9426 15.4539C23.3417 17.2724 23.2015 19.1653 22.5387 20.9077C21.876 22.6501 20.7185 24.1687 19.204 25.283C17.6894 26.3973 15.8815 27.0605 13.9949 27.1938C12.1084 27.3271 10.2226 26.9248 8.56173 26.0348C6.90083 25.1447 5.53465 23.8044 4.62556 22.173C3.71647 20.5417 3.30269 18.6879 3.4334 16.832C3.56412 14.9762 4.23384 13.1962 5.36295 11.7037L7.4253 13.6521C6.48764 15.0854 6.11899 16.8079 6.38966 18.4913C6.66034 20.1747 7.55138 21.7013 8.89294 22.78C10.2345 23.8587 11.9328 24.4141 13.6639 24.3403C15.3951 24.2665 17.0381 23.5687 18.2798 22.3799C18.9374 21.7374 19.4593 20.9733 19.8154 20.1316C20.1715 19.2899 20.3549 18.3872 20.3549 17.4755C20.3549 16.5638 20.1715 15.6612 19.8154 14.8195C19.4593 13.9778 18.9374 13.2137 18.2798 12.5712L14.2908 8.64768C14.1598 8.51887 14.0043 8.41669 13.8332 8.34698C13.6621 8.27727 13.4787 8.24139 13.2935 8.24139C13.1083 8.24139 12.9249 8.27727 12.7538 8.34698C12.5827 8.41669 12.4272 8.51887 12.2962 8.64768C12.1653 8.77649 12.0614 8.92941 11.9905 9.09771C11.9196 9.26601 11.8832 9.44639 11.8832 9.62855C11.8832 9.81072 11.9196 9.9911 11.9905 10.1594C12.0614 10.3277 12.1653 10.4806 12.2962 10.6094L16.2853 14.5329C17.0365 15.3216 17.4465 16.3668 17.4286 17.4474C17.4106 18.528 16.9662 19.5595 16.1892 20.3237C15.4123 21.0879 14.3636 21.5251 13.2649 21.5427C12.1662 21.5603 11.1036 21.157 10.3017 20.4181C9.51212 19.6357 9.06902 18.578 9.06902 17.4755C9.06902 16.3731 9.51212 15.3153 10.3017 14.5329C10.4395 14.4079 10.5494 14.2563 10.6245 14.0875C10.6997 13.9186 10.7385 13.7363 10.7385 13.552C10.7385 13.3677 10.6997 13.1854 10.6245 13.0166C10.5494 12.8478 10.4395 12.6961 10.3017 12.5712L6.31271 8.64768C6.18386 8.51835 6.02961 8.41616 5.85933 8.34733C5.68905 8.2785 5.50632 8.24448 5.32224 8.24732C4.94758 8.24835 4.58782 8.3918 4.3182 8.64768C2.54076 10.3941 1.32988 12.6197 0.838765 15.0431C0.347649 17.4665 0.598361 19.9788 1.55918 22.262C2.51999 24.5452 4.14775 26.4968 6.2365 27.87C8.32525 29.2431 10.7812 29.976 13.2935 29.976C15.8058 29.976 18.2617 29.2431 20.3505 27.87C22.4392 26.4968 24.067 24.5452 25.0278 22.262C25.9886 19.9788 26.2393 17.4665 25.7482 15.0431C25.2571 12.6197 24.0462 10.3941 22.2688 8.64768L14.3043 0.840742C14.038 0.583996 13.68 0.440186 13.3071 0.440186C12.9342 0.440186 12.5761 0.583996 12.3098 0.840742Z" fill={fill}/>
          <path d="M9.59616 7.11297L9.86751 7.0329L10.1117 6.89944L10.2203 6.81937C10.2553 6.79169 10.2871 6.76037 10.3153 6.72596L10.4102 6.63254C10.442 6.59572 10.4693 6.55542 10.4916 6.51243C10.5444 6.44139 10.5898 6.3654 10.6273 6.28556L10.7087 6.01866C10.7087 6.01866 10.7087 5.92524 10.7087 5.88521C10.7154 5.84097 10.7154 5.796 10.7087 5.75176C10.7087 5.39782 10.5658 5.05838 10.3113 4.80811C10.0569 4.55784 9.71179 4.41724 9.35194 4.41724H9.21626H9.08057C8.98637 4.42959 8.89478 4.45662 8.80922 4.49731L8.56501 4.61741L8.45646 4.69749L8.34792 4.7909L8.26651 4.89766C8.23103 4.92628 8.20311 4.96291 8.18511 5.00443C8.13475 5.08159 8.08942 5.16182 8.04942 5.24464C8.01013 5.32491 7.98272 5.41029 7.96802 5.4982C7.96802 5.4982 7.96802 5.59161 7.96802 5.64499V5.9119C7.96802 5.9119 7.96802 6.00532 7.96802 6.04535C7.98254 6.13758 8.00993 6.22739 8.04942 6.31226C8.08694 6.39209 8.13239 6.46808 8.18511 6.53912C8.2026 6.58473 8.23044 6.62581 8.26651 6.65923L8.34792 6.75265L8.45646 6.84606L8.56501 6.92613L8.80922 7.05959L9.08057 7.13966H9.6233L9.59616 7.11297Z" fill={fill}/>
        </svg>



        <style jsx>{`
          .logo{
            font-family: 'Geometria Medium';
            margin-top:${marginTop || 0};
            z-index:50;
            cursor:pointer;
            display:flex;
            align-items:center;
            flex-grow:1;
          }
          svg{
            margin-left:0.5rem;
          }



          .logo__title{
            margin:0 0;
            font-size:30px;
            color:${color};
          }

          .logo__subtitle{
            text-transform:uppercase;
            margin-top:0px;
            font-size:9px;
            color:${color};
            margin-top:-3px;
            letter-spacing:1.1px;
          }

          @media screen and (max-width:500px){
            .logo__title{
              font-size:14px;
            }

            .logo__subtitle{
              position:absolute;
              opacity:0;
            }

            .logo{
              flex-direction:row-reverse;
              text-align:left;
              justify-content:flex-end;
            }
            svg{
              margin-left:0;
              margin-right:0.5rem;
            }
          }
       `}</style>

    </div>
  )
}

export default Logo;
