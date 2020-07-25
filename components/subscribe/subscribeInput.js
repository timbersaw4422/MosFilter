const SubscribeInput = () => {
  return(
    <div className="subscribe-input">
       <input type="email" placeholder="Ваш e-mail"/>
       <div className="arrow">
           <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12.6517 0.267456L11.856 1.06321L15.231 4.43821H0.5625V5.56321H15.231L11.856 8.9382L12.6517 9.73396L17.385 5.00146L12.6517 0.268956V0.267456Z" fill="#626262"/>
           </svg>
       </div>


       <style jsx>{`
         .subscribe-input{
           position:relative;
           position:relative;
           z-index:10;
         }

         input{
           width:100%;
           height:4rem;
           background: #FFFFFF;
           border: 1px solid #E3E3E3;
           box-sizing: border-box;
           border-radius: 3px;
           outline:none;
           padding-left:2rem;
           font-size: 12px;
           color: #828282;
         }

         .arrow{
           position:absolute;
           height:4rem;
           width:4rem;
           background: #EEEEEE;
           border-radius: 3px;
           top:0;
           right:0;
           display:flex;
           align-items:center;
           justify-content:center;
           cursor:pointer;
         }
       `}</style>
    </div>
  )
}

export default SubscribeInput
