const FreeCallBtn = () => {
  return(
    <div className="header__call-btn">
       Бесплатный звонок

       <style jsx>{`
         .header__call-btn{
            width:21rem;
            height:4.5rem;
            display:flex;
            align-items:center;
            justify-content:center;
            font-weight: 600;
            font-size: 14px;
            color: #FFFFFF;
            cursor:pointer;
            background: linear-gradient(180deg, #6089F3 0%, #191792 100%);
            box-shadow: 0px 4px 10px rgba(45, 82, 214, 0.41);
            border-radius: 1rem;
         }

         @media (hover:hover){

         }
       `}</style>
    </div>
  )
}

export default FreeCallBtn;
