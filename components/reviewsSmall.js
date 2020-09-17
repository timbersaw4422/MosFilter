import Link from "next/link";

const ReviewsSmall = () => {
  return(
    <div className="reviews-small">
      <h2 className="reviews-small__title">Последние отзывы</h2>
      <div className="reviews-small__item">
        <p className="item__date">07.02.2020 | Татьяна</p>
        <p className="item__text">Не первый раз обращаюсь к вам. Огромное спасибо за ваш труд! Мастер как всегда приехал
           вовремя, провёл всё работы...</p>
        <p className="item__read-btn"><Link href="/reviews"><a>Читать полностью</a></Link></p>
      </div>
      <div className="reviews-small__item">
        <p className="item__date">28.11.2019 | Сергей</p>
        <p className="item__text">Всё понравилось, оперативно, чисто. Буду советовать друзьям</p>
        <p className="item__read-btn"><Link href="/reviews"><a>Читать полностью</a></Link></p>
      </div>
      <p className="read-all-reviews-btn"><Link href="/reviews"><a>Читать все отзывы</a></Link></p>

      <style jsx>{`
        .reviews-small{
          margin-top:2.7rem;
        }

        .reviews-small__title{
          font-weight: 600;
          font-size: 16px;
          color: #424242;
          margin-top:3.5rem;
        }

        .reviews-small__item{
          border: 1px solid #E3E3E3;
          padding:2.1rem 2.1rem 3.8rem 2.1rem;
          margin-bottom:1.5rem;
        }

        .item__date{
          font-weight: 600;
          font-size: 12px;
          color: #424242;
        }

        .item__text{
          font-size: 12px;
          line-height: 16px;
          color: #424242;
          height:8rem;
        }

        .item__read-btn a{
          color: #424242;
        }

        .item__read-btn, .read-all-reviews-btn{
          font-size: 12px;
          text-decoration-line: underline;
          color: #424242;
          cursor:pointer;
        }

        .read-all-reviews-btn{
          margin-top:3rem;
        }

        .read-all-reviews-btn a{
          color: #424242;
        }
      `}</style>
    </div>
  )
}

export default ReviewsSmall;
