import Link from "next/link";

const Path = ({category}) => {
  return(
    <p className="path">
       <Link href="/"><a className="active">Главная </a></Link>
       / &nbsp;
       <span>{category}</span>

       <style jsx>{`
         .path{
           margin-top:3.7rem;
           font-size: 12px;
           line-height: 16px;
           color: #424242;
           border-bottom:1px solid #DDDDDD;
           padding-bottom:1.8rem;
         }

         .active{
           color: #4862D2;
           text-decoration:none;
         }
       `}</style>
    </p>
  )
}

export default Path;
