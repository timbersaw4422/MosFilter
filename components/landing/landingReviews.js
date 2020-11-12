import SliderNav from "./sliderNav";
import Arrow from "./arrow";

const LandingReviews = () => {
  return(
    <>
    <div className="landing-reviews">

      <svg className="reviews-background" width="1032" height="1151" viewBox="0 0 1032 1151" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M294.857 896.794C305.808 896.771 316.247 892.456 323.93 884.772C331.613 877.089 335.929 866.651 335.951 855.699L333.308 524.298C332.992 468.743 348.633 414.521 378.373 368.074C408.113 321.628 450.701 284.91 501.076 262.285C551.45 239.66 607.493 232.08 662.543 240.444C717.593 248.808 769.337 272.766 811.624 309.47C853.91 346.173 884.962 394.079 901.089 447.495C917.216 500.91 917.74 557.589 902.598 610.795C887.457 664 857.286 711.496 815.673 747.637C774.059 783.777 722.752 807.043 667.849 814.669L665.488 730.678C715.142 720.285 758.943 691.919 788.541 650.989C818.138 610.058 831.463 559.425 825.974 508.742C820.485 458.06 796.566 410.872 758.778 376.175C720.989 341.478 671.975 321.699 621.077 320.607C593.851 320.3 566.919 325.38 541.831 335.556C516.743 345.732 493.995 360.803 474.897 379.901C455.799 398.999 440.728 421.747 430.552 446.835C420.376 471.923 415.295 498.855 415.603 526.081L416.925 691.782C416.968 697.222 418.083 702.617 420.205 707.659C422.327 712.702 425.414 717.293 429.292 721.17C433.169 725.048 437.76 728.136 442.803 730.258C447.845 732.379 453.241 733.494 458.681 733.537C464.121 733.581 469.499 732.552 474.508 730.51C479.518 728.469 484.06 725.454 487.876 721.638C491.692 717.822 494.707 713.28 496.749 708.27C498.79 703.261 499.819 697.883 499.775 692.443L498.454 526.742C499.249 494.492 512.559 464.015 535.572 441.753C558.584 419.491 589.494 407.189 621.77 407.446C654.045 407.704 685.156 420.501 708.526 443.133C731.897 465.765 745.695 496.458 747.004 528.724C747.145 561.646 734.264 593.08 711.17 616.174C688.076 639.268 656.642 652.149 623.72 652.009C618.219 651.743 612.741 652.62 607.631 654.582C602.521 656.545 597.889 659.551 594.029 663.412C590.168 667.272 587.162 671.904 585.199 677.014C583.237 682.124 582.36 687.602 582.626 693.103L583.947 858.804C583.936 864.211 585.024 869.581 587.147 874.587C589.27 879.594 592.383 884.132 596.296 887.926C604.161 895.749 614.698 900.275 625.703 900.56C699.497 901.187 771.471 879.914 832.518 839.43C893.565 798.946 940.943 741.071 968.657 673.127C996.371 605.183 1003.18 530.223 988.212 457.73C973.248 385.237 937.187 318.469 884.59 265.872C831.994 213.276 765.225 177.214 692.732 162.25C620.24 147.286 545.28 154.091 477.336 181.806C409.392 209.52 351.517 256.897 311.033 317.945C270.549 378.992 249.275 450.965 249.903 524.76L253.101 855.038C253.298 865.992 257.781 876.5 265.588 884.307C273.395 892.114 283.903 896.597 294.857 896.794Z" fill="#0F4C81" fillOpacity="0.03"/>
          <path d="M483.785 822.198L476.44 818.222L468.537 815.935L464.588 815.356C463.276 815.208 461.953 815.203 460.642 815.34L456.695 815.324C455.259 815.436 453.841 815.715 452.47 816.153C449.876 816.548 447.33 817.199 444.867 818.096L437.554 822.012C437.554 822.012 435.588 823.978 434.746 824.82C433.676 825.611 432.73 826.557 431.938 827.628C424.492 835.074 420.333 845.197 420.375 855.77C420.418 866.343 424.658 876.5 432.165 884.006L434.995 886.837L437.825 889.667C440.05 891.372 442.53 892.714 445.17 893.643L452.791 896.21L456.74 896.79L460.97 897.089L464.914 896.541C466.256 896.679 467.609 896.491 468.858 895.993C471.532 895.42 474.166 894.678 476.742 893.77C479.251 892.9 481.619 891.676 483.775 890.133C483.775 890.133 485.74 888.168 486.863 887.045L492.479 881.43C492.479 881.43 494.444 879.464 495.286 878.622C496.924 876.379 498.242 873.918 499.203 871.309C500.101 868.846 500.751 866.299 501.146 863.705C501.741 862.381 502.024 860.936 501.975 859.48L502.242 855.817L501.943 851.587L501.364 847.638L499.077 839.737L495.101 832.392L483.78 821.07L483.785 822.198Z" fill="#0F4C81" fillOpacity="0.03"/>
      </svg>

      <div className="landing-wrapper">


          <p className="subtitle">Нам доверяют</p>
          <h2 className="title">Последние отзывы наших клиентов</h2>
          <div className="review-page">

             <div className="review">
               <div className="review__img-and-name">
                  <img src="/img/reviews/review15.png" alt="review" className="review__img"/>
                  <p className="review__name">Татьяна</p>
               </div>
               <p className="review__text">В данной фирме обслуживаюсь не первый год, ребята молодцы! Продолжайте в том же духе!</p>
               <div className="review__btn">
                  <span>Посмотреть снимок отзыва</span>
                  <Arrow fill="#FF652E"/>
               </div>
             </div>

             <div className="review">
               <div className="review__img-and-name">
                  <img src="/img/reviews/review15.png" alt="review" className="review__img"/>
                  <p className="review__name">Татьяна</p>
               </div>
               <p className="review__text">В данной фирме обслуживаюсь не первый год, ребята молодцы! Продолжайте в том же духе!</p>
               <div className="review__btn">
                  <span>Посмотреть снимок отзыва</span>
                  <Arrow fill="#FF652E"/>
               </div>
             </div>

             <div className="review">
               <div className="review__img-and-name">
                  <img src="/img/reviews/review15.png" alt="review" className="review__img"/>
                  <p className="review__name">Татьяна</p>
               </div>
               <p className="review__text">В данной фирме обслуживаюсь не первый год, ребята молодцы! Продолжайте в том же духе!</p>
               <div className="review__btn">
                  <span>Посмотреть снимок отзыва</span>
                  <Arrow fill="#FF652E"/>
               </div>
             </div>

             <div className="review">
               <div className="review__img-and-name">
                  <img src="/img/reviews/review15.png" alt="review" className="review__img"/>
                  <p className="review__name">Татьяна</p>
               </div>
               <p className="review__text">В данной фирме обслуживаюсь не первый год, ребята молодцы! Продолжайте в том же духе!</p>
               <div className="review__btn">
                  <span>Посмотреть снимок отзыва</span>
                  <Arrow fill="#FF652E"/>
               </div>
             </div>

          </div>

          <SliderNav />
      </div>
    </div>

    <style jsx>{`
      .landing-reviews{
        position:relative;
        overflow:hidden;
      }

      .landing-wrapper{
        border-top:1px solid #E3E3E3;
        padding-top:3.6rem;
      }

      .reviews-background{
        position:absolute;
        z-index:0;
        right:0;
        top:5rem;
      }

      .subtitle{
        font-weight: 600;
        font-size: 16px;
        text-transform: uppercase;
        color: #B9B9B9;
      }

      .title{
        font-weight: 600;
        font-size: 30px;
        line-height: 37px;
        color: #424242;
        margin-bottom:6rem;
      }

      .review-page{
        display:flex;
        align-items:center;
        justify-content:space-between;
        flex-wrap:wrap;
        position:relative;
        z-index:10;
      }

      .review{
        background: linear-gradient(180deg, #FFFFFF 2.04%, #FCFDFF 100%);
        box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.08);
        padding:5rem 8rem 7rem 5rem;
        margin-bottom:6rem;
        width:47.5%;
      }

      .review__img-and-name{
        margin-bototm:4rem;
        display:flex;
        align-items:center;
      }

      .review__img{
        width:6.2rem;
        height:6.2rem;
        border-radius:50%;
        display:block;
        margin-right:3rem;
      }

      .review__name{
        font-weight: 600;
        font-size: 22px;
        color: #424242;
      }

      .review__text{
        font-size: 16px;
        line-height: 150%;
        color: #424242;
        margin-bottom:0;
        height:7.5rem;
      }

      .review__btn{
        font-size: 14px;
        align-items: flex-end;
        color: #FF652E;
        display:flex;
        align-items:Center;
        cursor:pointer;
      }

      .review__btn span{
        margin-right:4.5rem;
      }


    `}</style>

    </>
  )
}

export default LandingReviews;