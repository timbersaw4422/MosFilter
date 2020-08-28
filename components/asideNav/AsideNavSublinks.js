import Link from "next/link";

const AsideNavSublinks = ({sublinks, dispalaySubLinks}) => {


  return(
    <div className="aside-nav__sublinks">

        {sublinks.map(link =>
          <Link key = {link.id} href={link.link}>
             <a className="aside-nav__sublink">{link.text}</a>
          </Link>)
        }


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
             display: ${dispalaySubLinks};
             flex-wrap:wrap;
           }

           .aside-nav__sublink{
             display:block;
             letter-spacing: 0.015em;
             color: #424242;
             text-decoration:none;
             width:33.33%;
             display:flex;
             justify-content:center;
             align-items:center;
             height:6rem;
             border-right: 1px solid #F3EFEF;
             border-bottom: 1px solid #F3EFEF;
             font-size: 11px;
             transition:0.5s;
             font-weight:600;
           }

           .aside-nav__sublink:nth-child(3n){
             border-right:none;
           }

           @media(hover:hover){
             .aside-nav__sublink:hover{
               color: #4862D2;
             }
           }
        `}</style>
    </div>
  )
}

export default AsideNavSublinks;
