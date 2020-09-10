import Link from "next/link";

const MainNavBtn = ({width, margin, text, link, activeLink}) => {

  const background = activeLink === text
      ? "linear-gradient(180deg, #191792 0%, #6089F3 100%), #FFFFFF;"
      : "#transparent";
  const textColor = activeLink === text
      ? "#fff"
      : "#424242";
  const border = activeLink === text
      ? "#4862D2"
      : "none";

  return(
      <Link href={link}>
      <a className="main-nav__btn">
      <p className="main-nav__text">
         {text}
      </p>



      <style jsx>{`
         .main-nav__btn{
           height:100%;
           width:${width};
           display:flex;
           align-items:center;
           justify-content:center;
           cursor:pointer;
           transition:1s;
           position:relative;
           text-decoration:none;
           border-radius: 1rem;
           background:${background};
           border:${border};
         }

         .main-nav__btn:after{
           content:"";
           position:Absolute;
           top:0;
           left:0;
           right:0;
           bottom:0;
           border: 2px solid #4862D2;
           box-sizing: border-box;
           border-radius: 1rem;
           opacity:0;
           transition:0.5s;
         }

         .main-nav__text{
           font-weight: 600;
           font-size: 15px;
           color: ${textColor};
         }

         svg{
           margin-right:3rem;
         }

         @media(hover:hover){
           .main-nav__btn:hover:after{
             opacity:1;
           }
           .main-nav__btn:hover .main-nav__text{
             color: #282EA5;
           }
         }

         .main-nav__btn:active{
           background: linear-gradient(180deg, #191792 0%, #6089F3 100%), #FFFFFF;
         }

         .main-nav__btn:active .main-nav__text{
           color:#fff;
         }
      `}</style>
    </a>
    </Link>
  )
}

export default MainNavBtn;
