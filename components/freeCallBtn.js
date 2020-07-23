const FreeCallBtn = () => {
  return(
    <div className="header__call-btn">
       Бесплатный звонок

       <style jsx>{`
         .header__call-btn{
            border: 2px solid #1971BD;
            width:21rem;
            height:4.5rem;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius: 3px;
            font-weight: 600;
            font-size: 14px;
            color: #1A70BC;
            cursor:pointer;
         }

         @media (hover:hover){
           
         }
       `}</style>
    </div>
  )
}

export default FreeCallBtn;
