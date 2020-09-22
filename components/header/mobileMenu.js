const MobileMenu = ({isMenuOpen}) => {

  const transform = !isMenuOpen ? "translateX(100%)" : "translateX(0)";

  const scrollHandler = e => {
    e.stopPropagation();
  }

  return(
    <>
      <div className="mobile-menu" onScroll={scrollHandler}>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Veniam aliquam sunt eius, distinctio id unde quo dolor quas consectetur
         vel necessitatibus voluptate impedit aliquid facilis praesentium possimus, quasi earum! Nobis.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Veniam aliquam sunt eius, distinctio id unde quo dolor quas consectetur
         vel necessitatibus voluptate impedit aliquid facilis praesentium possimus, quasi earum! Nobis.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Veniam aliquam sunt eius, distinctio id unde quo dolor quas consectetur
         vel necessitatibus voluptate impedit aliquid facilis praesentium possimus, quasi earum! Nobis.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Veniam aliquam sunt eius, distinctio id unde quo dolor quas consectetur
         vel necessitatibus voluptate impedit aliquid facilis praesentium possimus, quasi earum! Nobis.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Veniam aliquam sunt eius, distinctio id unde quo dolor quas consectetur
         vel necessitatibus voluptate impedit aliquid facilis praesentium possimus, quasi earum! Nobis.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Veniam aliquam sunt eius, distinctio id unde quo dolor quas consectetur
         vel necessitatibus voluptate impedit aliquid facilis praesentium possimus, quasi earum! Nobis.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Veniam aliquam sunt eius, distinctio id unde quo dolor quas consectetur
         vel necessitatibus voluptate impedit aliquid facilis praesentium possimus, quasi earum! Nobis.
         Veniam aliquam sunt eius, distinctio id unde quo dolor quas consectetur
         vel necessitatibus voluptate impedit aliquid facilis praesentium possimus, quasi earum! Nobis.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Veniam aliquam sunt eius, distinctio id unde quo dolor quas consectetur
         vel necessitatibus voluptate impedit aliquid facilis praesentium possimus, quasi earum! Nobis.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Veniam aliquam sunt eius, distinctio id unde quo dolor quas consectetur
         vel necessitatibus voluptate impedit aliquid facilis praesentium possimus, quasi earum! Nobis.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Veniam aliquam sunt eius, distinctio id unde quo dolor quas consectetur
         vel necessitatibus voluptate impedit aliquid facilis praesentium possimus, quasi earum! Nobis.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Veniam aliquam sunt eius, distinctio id unde quo dolor quas consectetur
         vel necessitatibus voluptate impedit aliquid facilis praesentium possimus, quasi earum! Nobis.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Veniam aliquam sunt eius, distinctio id unde quo dolor quas consectetur
         vel necessitatibus voluptate impedit aliquid facilis praesentium possimus, quasi earum! Nobis.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Veniam aliquam sunt eius, distinctio id unde quo dolor quas consectetur
         vel necessitatibus voluptate impedit aliquid facilis praesentium possimus, quasi earum! Nobis.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Veniam aliquam sunt eius, distinctio id unde quo dolor quas consectetur
         vel necessitatibus voluptate impedit aliquid facilis praesentium possimus, quasi earum! Nobis.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Veniam aliquam sunt eius, distinctio id unde quo dolor quas consectetur
         vel necessitatibus voluptate impedit aliquid facilis praesentium possimus, quasi earum! Nobis.
      </div>



      <style jsx>{`
        .mobile-menu{
          padding:12rem 2.5rem 6rem 2.5rem;
          position:fixed;
          top:0;
          right:0;
          bottom:0;
          width:320px;
          z-index:-10;
          background:#fff;
          transform: ${transform};
          transition:0.3s;
          transition-timing-function:ease-in-out;
          overflow-y:scroll;
          opacity:0;
        }

        @media screen and (max-width:1200px){
          .mobile-menu{
            z-index:98;
            opacity:1;
          }
        }

        @media screen and (max-width:500px){
          .mobile-menu{
            width:100vw;            
          }
        }

        `}</style>
    </>
  )
}

export default MobileMenu;
