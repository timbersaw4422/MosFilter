const AsideNavItem = ({text}) => {
  return(
    <div className="aside-nav__item">
        <h3 className="aside-nav__text">{text}</h3>
        <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.49831 5.50784C5.49864 5.67445 5.44054 5.8359 5.33411 5.96419L1.76453 10.2424C1.64335 10.388 1.46921 10.4796 1.28044 10.497C1.09166 10.5144 0.903697 10.4561 0.757904 10.3351C0.61211 10.2141 0.520426 10.0402 0.503021 9.85161C0.485616 9.66307 0.543915 9.47534 0.665094 9.32973L3.86344 5.50784L0.779321 1.68596C0.720019 1.61303 0.675734 1.5291 0.649011 1.43902C0.622287 1.34893 0.613653 1.25446 0.623605 1.16104C0.633556 1.06761 0.661896 0.977064 0.706997 0.89461C0.752098 0.812158 0.81307 0.739419 0.886409 0.680577C0.959814 0.615277 1.04593 0.565822 1.13936 0.535309C1.2328 0.504796 1.33153 0.493885 1.42938 0.503256C1.52724 0.512628 1.6221 0.542081 1.70802 0.58977C1.79395 0.637461 1.86908 0.702361 1.92873 0.780403L5.37694 5.05863C5.46655 5.1906 5.50928 5.34876 5.49831 5.50784Z" fill="#424242"/>
        </svg>


        <style jsx>{`
           .aside-nav__item{
             width:100%;
             height:6rem;
             border: 1px solid #E3E3E3;
             position:relative;
             cursor:pointer;
             display:flex;
             align-items:center;
             justify-content:space-between;
             background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%), #FFFFFF;
           }

           .aside-nav__item:after{
             content:"";
             position:absolute;
             height:100%;
             width:0.5rem;
             background: #1971BD;
             opacity:0;
             transition:0.3s;
             top:0;
             left:0;
           }

           .aside-nav__text{
             margin-left:1.6rem;
             font-size: 13px;
             color: #424242;
           }

           svg{
             margin-right:2.5rem;
           }

           @media(hover:hover){
             .aside-nav__item:hover:after{
               opacity:1;
             }
           }

        `}</style>
    </div>
  )
}

export default AsideNavItem;
