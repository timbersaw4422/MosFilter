import Link from "next/link";

const PostItems = () => {
  return(
    <div className="post-items">

      <div className="post-item">
         <div className="post-item__row">
            <div className="post-item__img">
                <img src="/img/posts/howToChooseFilter/1.png" alt=""/>
            </div>
            <p className="post-item__title">Как правильно выбрать фильтр для воды в городскую квартриру</p>
        </div>
        <p className="post-item__text">Столкнувшись с проблемой качества московской водопроводной воды, люди задаются вопросом ...</p>
        <Link href="/posts/howToChooseFilter"><a className="post-item__btn">Читать статью</a></Link>
      </div>

      <div className="post-item">
         <div className="post-item__row">
             <div className="post-item__img">
                 <img src="/img/posts/cartridgesReplacement/1.png" alt=""/>
             </div>
            <p className="post-item__title">Как часто менять картриджи?</p>
        </div>
        <p className="post-item__text">Не важно какой марки у вас фильтр (Аквафор, Атолл, Гейзер, любой другой) рано или поздно приходится менять картриджи...</p>
        <Link href="/posts/cartridgeReplacement"><a className="post-item__btn">Читать статью</a></Link>
      </div>




      <style jsx>{`
        .post-items{
          display:flex;
          justify-content:space-between;
          align-items:center;
          flex-wrap:wrap;
          margin-top:2.8rem;
        }

        .post-item{
          background: #FFFFFF;
          border: 1px solid #EEEEEE;
          border-radius: 5px;
          padding:4rem;
          width:calc(50% - 1rem);
          margin-bottom:2rem;
        }

        .post-item__row{
          display:flex;
          align-items:center;
          margin-bottom:2.5rem;
        }

        .post-item__title{
          margin-left:3.6rem;
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
          color: #424242;
          width:70%;
        }

        .post-item__text{
          font-size: 12px;
          line-height: 16px;
          color: #424242;
          height:6rem;
        }

        .post-item__btn{
          color:#424242;
          font-size:12px;
        }

        .post-item__img{
          width:8rem;
          height:8rem;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:Center;
          position:relative;
          overflow:hidden;
        }
      `}</style>
    </div>
  )
}

export default PostItems;
