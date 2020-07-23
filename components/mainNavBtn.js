const MainNavBtn = ({width, margin, text}) => {
  return(
      <div className="main-nav__btn">
      <p className="main-nav__text">
         {text}
      </p>
      <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.99216 4.99831C4.82555 4.99864 4.6641 4.94054 4.53581 4.83411L0.257587 1.26453C0.111972 1.14335 0.0204009 0.969215 0.00301722 0.780437C-0.0143664 0.591658 0.0438616 0.403697 0.164892 0.257904C0.285922 0.11211 0.45984 0.020426 0.648386 0.00302095C0.836931 -0.0143841 1.02466 0.0439153 1.17027 0.165095L4.99216 3.36344L8.81404 0.279322C8.88697 0.22002 8.9709 0.175734 9.06098 0.149011C9.15107 0.122288 9.24554 0.113654 9.33896 0.123605C9.43239 0.133557 9.52294 0.161897 9.60539 0.206998C9.68784 0.252099 9.76058 0.313071 9.81942 0.386409C9.88472 0.459815 9.93418 0.545932 9.96469 0.639365C9.9952 0.732798 10.0061 0.831533 9.99674 0.929385C9.98737 1.02724 9.95792 1.1221 9.91023 1.20802C9.86254 1.29395 9.79764 1.36908 9.7196 1.42873L5.44137 4.87695C5.3094 4.96655 5.15124 5.00928 4.99216 4.99831Z" fill="white"/>
      </svg>



      <style jsx>{`
         .main-nav__btn{
           height:100%;
           width:${width};
           margin-right:${margin || "1px"};
           background: linear-gradient(180deg, #1974C2 0%, #1B6EB7 100%);
           display:flex;
           align-items:center;
           justify-content:space-between;
           cursor:pointer;
           transition:1s;
         }

         .main-nav__text{
           font-weight: bold;
           font-size: 15px;
           color: #FFFFFF;
           margin-left:3rem;
         }

         svg{
           margin-right:3rem;
         }

         @media(hover:hover){
           .main-nav__btn:hover{
             background: linear-gradient(180deg, #1A68AB 0%, #3D85C4 100%);
           }
         }

      `}</style>
    </div>
  )
}

export default MainNavBtn;
