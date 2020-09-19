const Burger = () => {
  return(
    <>
      <div className="burger">

      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 17C0 17.5523 0.447715 18 1 18H19C19.5523 18 20 17.5523 20 17C20 16.4477 19.5523 16 19 16H1C0.447716 16 0 16.4477 0 17Z" fill="#4862D2"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M0 9C0 9.55228 0.447715 10 1 10H19C19.5523 10 20 9.55228 20 9C20 8.44772 19.5523 8 19 8H1C0.447716 8 0 8.44772 0 9Z" fill="#4862D2"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M0 1C0 1.55228 0.447715 2 1 2H19C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0H1C0.447716 0 0 0.447715 0 1Z" fill="#4862D2"/>
      </svg>




      </div>
      <style jsx>{`

        .burger{
          cursor:pointer;
          display:none;
          position:relative;
          z-index:100;
        }

        @media screen and (max-width:1200px){
          .burger{
            display:block;
          }
        }
        `}</style>
    </>
  )
}

export default Burger
