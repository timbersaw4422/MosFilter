import Link from "next/link";

const Posts = () => {
  return(
    <div className="small-posts">
       <h2 className="posts__title">Полезные статьи</h2>
       <p className="posts__date">08.11.2019</p>
       <p className="posts-title with-margin-bottom"><Link href="/posts/howToChooseFilter"><a>Как выбрать фильтр в квартиру</a></Link></p>
       <p className="posts__date">19.01.2020</p>
       <p className="posts-title with-margin-bottom"><Link href="/posts/cartridgeReplacement"><a>Как часто менять картриджи?</a></Link></p>

       <p className="posts-title with-margin-top"><Link href="/posts"><a>Смотреть все статьи</a></Link></p>


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
            position:relative;
            padding-right:3rem;
            font-size: 12px;
            line-height: 16px;
          }

          .posts-title a {
            color: #424242;
            cursor:pointer;
            text-decoration-line: underline;
          }

          .posts__date{
            font-weight: 600;
            font-size: 12px;
            color: #424242;
          }

          .with-margin-bottom{
            margin-bottom:3rem;
          }

          .with-margin-top{
            margin-top:7rem;
          }

       `}</style>
    </div>
  )
}

export default Posts;
