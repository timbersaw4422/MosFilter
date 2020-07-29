import Link from "next/link";

const AsideNavSublinks = ({sublinks}) => {
  return(
    <div className="aside-nav__sublinks">
       <Link href={sublinks[0].link}>
          <a className="aside-nav__sublink">{sublinks[0].text}</a>
       </Link>





        <style jsx>{`
           .aside-nav__sublinks{
             position:absolute;
             width:300%;
             border:1px solid red;
             top:-1px;
             left:100%;
             background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%), #FFFFFF;
             border: 1px solid #E3E3E3;
             box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
             border-radius: 0px 0px 0.5rem 0px;
           }

           .aside-nav__sublink{
             display:block;
             letter-spacing: 0.015em;
             color: #424242;
             text-decoration:none;
             width:33%;
             display:flex;
             justify-content:center;
             align-items:center;
             height:6rem;
           }
        `}</style>
    </div>
  )
}

export default AsideNavSublinks;
