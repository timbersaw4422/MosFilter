import Logo from "../header/logoWithoutH1";
import Link from "next/link";

const CallToAction =({title, text, buttonText, link}) => {
  return(
    <div className="posts-body__call-to-action">
       <div className="call-to-action__left">
          <Logo color="#424242" fill="#0F4C81"/>
       </div>
       <div className="call-to-action__right">
          <h3 className="call-to-action__title">{title}</h3>
          <p className="call-to-action__text">{text} </p>
          <Link href={link}><a className="call-to-action__btn btn-blue">{buttonText}</a></Link>
       </div>

       <style jsx>{`
           .posts-body__call-to-action{
             display:flex;
             align-items:center;
           }

          .call-to-action__title{
            font-weight: 600;
            font-size: 24px;
            color: #424242;
            margin-bottom:3rem;
          }

          .call-to-action__text{
            font-size: 14px;
            line-height: 19px;
            color: #333333;
            margin-bottom:5.6rem;
          }

          .btn-blue{
            width:21rem;
          }

          .call-to-action__left{
            width:45rem;
            margin-top:-1rem;
          }

          @media screen and (max-width:1000px){
            .posts-body__call-to-action{
              flex-direction:column-reverse;
              align-items:flex-start;
            }
            .call-to-action__right{
              margin-bottom:5rem;
            }
            .call-to-action__left{
              width:100%;
            }
          }
       `}</style>
    </div>
  )
}

export default CallToAction;
