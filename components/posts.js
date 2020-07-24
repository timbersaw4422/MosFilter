const Posts = () => {
  return(
    <div className="posts">
       <h2 className="posts__title">Полезные статьи</h2>
       <p className="posts__date">08.11.2019</p>
       <p className="posts-title with-margin-bottom">Как выбрать фильтр в квартиру</p>
       <p className="posts__date">19.01.2020</p>
       <p className="posts-title with-margin-bottom">Перимущества системы обратного осмоса</p>
       <p className="posts__date">15.05.2020</p>
       <p className="posts-title with-margin-bottom">Из чего складывается цена на картриджи?</p>
       <p className="posts__date">22.03.2020</p>
       <p className="posts-title with-margin-bottom">Сроки замены картриджей в Москве?</p>
       <p className="posts-title">Смотреть все статьи</p>


       <style jsx>{`
         .posts__title{
           font-weight: 600;
           font-size: 16px;
           line-height: 22px;
           color: #424242;
           width:90%;
           border-bottom:1px solid #E3E3E3;
           padding-bottom:1.2rem;
           margin-bottom:3rem;
         }

         .posts-title{
            font-size: 12px;
            line-height: 16px;
            color: #424242;
            position:relative;
            padding-right:3rem;
            font-size: 12px;
            line-height: 16px;
            text-decoration-line: underline;
            color: #424242;
            cursor:pointer;
          }

          .posts__date{
            font-weight: 600;
            font-size: 12px;
            color: #424242;
          }

          .with-margin-bottom{
            margin-bottom:3rem;
          }

       `}</style>
    </div>
  )
}

export default Posts;
