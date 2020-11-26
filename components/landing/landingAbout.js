import Arrow from "./arrow";

const LandingAbout = () => {
  return(
    <>
      <div className="about">

      <svg width="752" height="875" viewBox="0 0 752 875" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M346.876 11.8665C339.148 19.6263 334.819 30.059 334.819 40.9248C334.819 51.7907 339.148 62.2234 346.876 69.9832L583.081 302.45C622.588 341.509 649.868 390.911 661.682 444.783C673.495 498.655 669.344 554.732 649.722 606.351C630.101 657.969 595.833 702.957 550.992 735.969C506.151 768.981 452.622 788.629 396.767 792.577C340.913 796.525 285.081 784.607 235.907 758.24C186.733 731.873 146.285 692.166 119.369 643.837C92.4541 595.508 80.2033 540.59 84.0733 485.609C87.9434 430.629 107.772 377.897 141.201 333.683L202.261 391.404C174.5 433.864 163.585 484.893 171.599 534.764C179.613 584.635 205.994 629.86 245.713 661.817C285.433 693.773 335.713 710.227 386.967 708.041C438.222 705.855 486.867 685.183 523.629 649.964C543.098 630.93 558.549 608.294 569.094 583.358C579.638 558.423 585.066 531.681 585.066 504.672C585.066 477.664 579.638 450.922 569.094 425.987C558.549 401.051 543.098 378.415 523.629 359.381L405.526 243.147C401.649 239.331 397.046 236.304 391.98 234.239C386.914 232.174 381.484 231.111 376 231.111C370.517 231.111 365.087 232.174 360.021 234.239C354.955 236.304 350.352 239.331 346.475 243.147C342.597 246.963 339.521 251.494 337.423 256.479C335.325 261.465 334.245 266.809 334.245 272.206C334.245 277.602 335.325 282.946 337.423 287.932C339.521 292.918 342.597 297.448 346.475 301.264L464.577 417.497C486.819 440.864 498.957 471.826 498.427 503.84C497.896 535.853 484.739 566.41 461.734 589.05C438.73 611.69 407.682 624.64 375.154 625.162C342.625 625.684 311.165 613.737 287.423 591.848C264.045 568.668 250.926 537.332 250.926 504.672C250.926 472.013 264.045 440.677 287.423 417.497C291.501 413.795 294.755 409.302 296.981 404.301C299.206 399.3 300.356 393.899 300.356 388.439C300.356 382.979 299.206 377.579 296.981 372.577C294.755 367.576 291.501 363.083 287.423 359.381L169.321 243.147C165.506 239.316 160.939 236.288 155.897 234.249C150.856 232.21 145.446 231.202 139.996 231.287C128.903 231.317 118.252 235.567 110.269 243.147C57.6449 294.884 21.7946 360.82 7.25415 432.613C-7.2863 504.406 0.136518 578.831 28.5833 646.472C57.0301 714.112 105.223 771.929 167.064 812.608C228.906 853.287 301.618 875 376 875C450.383 875 523.095 853.287 584.936 812.608C646.778 771.929 694.97 714.112 723.417 646.472C751.863 578.831 759.286 504.406 744.746 432.613C730.205 360.82 694.355 294.884 641.731 243.147L405.927 11.8665C398.043 4.26038 387.442 0 376.402 0C365.361 0 354.761 4.26038 346.876 11.8665Z" fill="#004990" fillOpacity="0.02"/>
        <path d="M384.031 477.206L392.036 474.824L399.241 470.853L402.443 468.471C403.475 467.647 404.414 466.715 405.244 465.691L408.046 462.912C408.983 461.816 409.789 460.617 410.448 459.338C412.003 457.225 413.343 454.964 414.45 452.588L416.852 444.647C416.852 444.647 416.852 441.868 416.852 440.676C417.049 439.36 417.049 438.022 416.852 436.706C416.852 426.175 412.635 416.076 405.129 408.63C397.623 401.183 387.442 397 376.826 397H372.824H368.821C366.042 397.368 363.34 398.172 360.816 399.382L353.611 402.956L350.409 405.338L347.207 408.118L344.806 411.294C343.759 412.146 342.935 413.235 342.404 414.471C340.919 416.766 339.582 419.154 338.401 421.618C337.242 424.006 336.434 426.546 336 429.162C336 429.162 336 431.941 336 433.529V441.471C336 441.471 336 444.25 336 445.441C336.428 448.185 337.236 450.858 338.401 453.382C339.508 455.758 340.849 458.019 342.404 460.132C342.92 461.489 343.741 462.712 344.806 463.706L347.207 466.485L350.409 469.265L353.611 471.647L360.816 475.618L368.821 478H384.831L384.031 477.206Z" fill="#004990" fillOpacity="0.02"/>
      </svg>

        <div className="landing-wrapper">
          <h2 className="title">О сервисной службе</h2>

          <div className="subtitle-and-whatsapp">
              <p className="subtitle">Наша сервисная служба занимается заменой картриджей и ремонтом
                фильтров для воды Гейзер. Мы работаем по данному направлению
                8 лет и за время своего существования обслужили более 30 000
                клиентов во всех районах Москвы и Подмосковья.
              </p>

              <div className="whatsapp" onClick = {() => window.open("https://wa.me/79325306046", "_blank")}>
                <span>Написать в WhatsApp</span>
                <Arrow fill="#FF652E"/>
              </div>
          </div>

          <div className="advantages">
            <div className="advantages__left"></div>
            <div className="advantages__right">
              <div className="advantage">
                <img src="/img/landing/ad1.png" alt="Официальная гарантия" className="advantage__img"/>
                <p className="advantage__title">Официальная гарантия</p>
                <p className="advantage__text">Всем клиентам мы предоставляем официальную гарантию на 1 год,
                   которая распространяется как на продукцию так и на выполненные работы.</p>
              </div>
              <div className="advantage">
                <img src="/img/landing/ad2.png" alt="Официальная гарантия" className="advantage__img"/>
                <p className="advantage__title">Оперативность</p>
                <p className="advantage__text">Выезд мастера осуществляется в течение 1-2 дней после заявки.
                    Мы никогда не опаздываем и не срываем сроков. </p>
              </div>
              <div className="advantage">
                <img src="/img/landing/ad3.png" alt="Официальная гарантия" className="advantage__img"/>
                <p className="advantage__title">Цены от поставщика</p>
                <p className="advantage__text">Мы работаем напрямую с производителем поэтому у нас самые
                   низкие цены на оригинальную продукцию по Москве</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .about{
          padding-bottom:18rem;
          position:relative;
        }

        svg{
          position:absolute;
          top:10rem;
          right:0;
        }

        .title{
          font-weight: 600;
          font-size: 30px;
          line-height: 37px;
          color: #424242;
          margin-bottom: 5.8rem;
        }

        .landing-wrapper{
          padding-top:2.5rem;
          border-top:1px solid #E3E3E3;
        }

        .subtitle-and-whatsapp{
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-bottom:9.5rem;
        }

        .subtitle{
          font-weight: 500;
          font-size: 16px;
          line-height: 160%;
          color: #424242;
          max-width:56rem;
        }

        .whatsapp{
          display:flex;
          align-items:Center;
          cursor:pointer;
        }

        .whatsapp span{
          font-weight: 600;
          font-size: 16px;
          color: #FF652E;
          margin-right:3.2rem;
        }

        .advantages{
          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        .advantages__left, .advantages__right{
          width:46%;
          height:63rem;
        }

        .advantages__left{
          background:url('/img/categories/man1.png') center / cover ;
        }

        .advantages__right{
          display:flex;
          flex-direction:column;
          justify-content:space-between;
        }

        .advantage__title{
          font-weight: 600;
          font-size: 20px;
          color: #424242;
          margin:3rem 0 2rem 0;
        }

        .advantage__text{
          font-size: 16px;
          line-height: 150%;
          color: #424242;
          margin:0;
        }

        @media screen and (max-width:1150px){
          .about{
            padding-bottom:8rem;
          }
        }

        @media screen and (max-width:850px){
          .subtitle-and-whatsapp{
            flex-direction:column;
            align-items:flex-start;
            margin-bottom: 4rem;
          }

          .subtitle{
            width:100%;
            max-width:100%;
            margin-bottom:4rem;
          }

          .advantages{
            display:block;
          }

          .advantages__left, .advantages__right{
            width:100%;
          }

          .advantages__left{
            margin-bottom:4rem;
          }

          .advantages__right{
            height:auto;
          }

          .advantage{
            margin-bottom:4rem;
          }

        }


        `}</style>
    </>
  )
}

export default LandingAbout
