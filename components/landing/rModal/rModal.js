import React, {useState, useRef} from "react";

const Modal = ({children,
                isModalOpen,
                setModalOpen,
                maxWidth = "500px",
                padding="35px 20px",
                overlaySpeed=500,
                modalSpeed=200,
                animate="fromDown",
                timingFunction = "linear"
              }) => {

  const overlay = useRef();
  const modal = useRef();

  const openHandler = () => {
    setTimeout(() => {
      if (overlay.current) overlay.current.classList.add("animate-overlay");
    }, 0);
    setTimeout(() => {
      modal.current.classList.add("animate-modal");
    }, overlaySpeed);
  }

  const closeHandler = () => {
    if (modal.current) {
      modal.current.classList.remove("animate-modal");
      modal.current.classList.add("animate-modal-out");
    }
    setTimeout(() => {
      if (overlay.current) {
          overlay.current.classList.remove("animate-overlay");
          overlay.current.classList.add("animate-overlay-out");
        }
     }, modalSpeed);

    setTimeout(() => {
      setModalOpen(false);
    }, overlaySpeed + modalSpeed);
  }

  useState(() => {
    openHandler();
  }, []);

  return(
    <>
    <div className="modal-overlay" ref = {overlay} onClick={closeHandler}>

      <div className="modal-cross" onClick = {closeHandler}>
          <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M3.82705 0.63L15.167 11.97L26.4604 0.676667C26.6583 0.466007 26.8967 0.297487 27.1613 0.181212C27.426 0.064936 27.7113 0.00330014 28.0004 0C28.6192 0 29.2127 0.245833 29.6503 0.683417C30.0879 1.121 30.3337 1.71449 30.3337 2.33333C30.3391 2.6194 30.2861 2.90357 30.1777 3.16839C30.0694 3.43321 29.9081 3.6731 29.7037 3.87333L18.2937 15.1667L29.7037 26.5767C30.0883 26.9529 30.3138 27.4624 30.3337 28C30.3337 28.6188 30.0879 29.2123 29.6503 29.6499C29.2127 30.0875 28.6192 30.3333 28.0004 30.3333C27.703 30.3457 27.4063 30.296 27.1292 30.1876C26.852 30.0791 26.6004 29.9142 26.3904 29.7033L15.167 18.3633L3.85038 29.68C3.65323 29.8836 3.4177 30.0462 3.15738 30.1583C2.89707 30.2705 2.61713 30.33 2.33371 30.3333C1.71487 30.3333 1.12138 30.0875 0.683797 29.6499C0.246212 29.2123 0.000379647 28.6188 0.000379647 28C-0.00506051 27.7139 0.0480159 27.4298 0.156351 27.1649C0.264687 26.9001 0.425996 26.6602 0.63038 26.46L12.0404 15.1667L0.63038 3.75667C0.245811 3.38044 0.0203054 2.87096 0.000379647 2.33333C0.000379647 1.71449 0.246212 1.121 0.683797 0.683417C1.12138 0.245833 1.71487 0 2.33371 0C2.89371 0.007 3.43038 0.233333 3.82705 0.63Z" fill="#ffffff"/>
         </svg>
      </div>

      <div className="modal" ref = {modal} onClick={e => e.stopPropagation()}>
           {children}
      </div>

    </div>



    <style jsx>{`
      .modal-overlay{
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:rgba(0,0,0, 0.6);
        display:flex;
        align-items:center;
        justify-content:center;
        opacity:0;
        z-index:100;
      }

      .modal{
        width:100%;
        background:#fff;
        max-height:80vh;
        position:relative;
        max-width:${maxWidth};
        padding:${padding};
        overflow-x:hidden;
        overflow-y:scroll;
        opacity:0;
        z-index:101;
      }

      .modal::-webkit-scrollbar {
  width:0px;
}

      .modal-cross{
        position:absolute;
        top:5px;
        right:5px;
        cursor:pointer;
      }

      .animate-overlay{
        -webkit-animation: opacityOverlayIn ${overlaySpeed}ms linear forwards;
        animation: opacityOverlayIn ${overlaySpeed}ms linear forwards;
      }

      .animate-overlay-out{
        -webkit-animation: opacityOverlayOut ${overlaySpeed}ms linear forwards;
        animation: opacityOverlayOut ${overlaySpeed}ms linear forwards;
      }

      .animate-modal{
        -webkit-animation: ${animate}In ${modalSpeed}ms ${timingFunction} forwards;
        animation: ${animate}In ${modalSpeed}ms ${timingFunction} forwards;
        opacity:1;
      }

      .animate-modal-out{
        -webkit-animation: ${animate}Out ${modalSpeed}ms ${timingFunction} forwards;
        animation: ${animate}Out ${modalSpeed}ms ${timingFunction} forwards;
      }


      @keyframes opacityOverlayIn{
        from{opacity:0}
        to{opacity:1}
      }

      @keyframes opacityOverlayOut{
        from{opacity:1}
        to{opacity:0}
      }

      @keyframes fromDownIn{
        from{opacity:0; transform:translateY(50px)}
        to{opacity:1;transform:translateY(0px)}
      }
      @keyframes fromDownOut{
        from{opacity:1;transform:translateY(0px)}
        to{opacity:0; transform:translateY(50px)}
      }

      @media screen and (max-width:800px){
        .modal{
          max-height:90%;
        }
        .modal-overlay{
          align-items:flex-end;
        }

      }


    `}</style>
    </>
  )
}

export default Modal;
