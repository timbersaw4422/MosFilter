const LandingButton = ({text, css}) => {
  return(
    <>
      <div className="button">
        {text}
      </div>


      <style jsx>{`
        .button{
          width: 100%;
          max-width:${css.maxWidth};
          height: ${css.height};
          margin-bottom:${css.marginBottom};
          background: ${css.background || "#FF652E"};
          color:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight: bold;
          font-size: 12px;
          letter-spacing: 0.045em;
          text-transform: uppercase;
          box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
          cursor:pointer;
        }
        `}</style>
    </>
  )
}

export default LandingButton;
