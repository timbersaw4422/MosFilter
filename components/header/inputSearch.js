const InputSearch = () => {
  return (
    <div className="input-search">
       <input type="text" placeholder="Поиск по сайту"/>
       <img src="/img/search-icon.png" alt="search-icon" />



       <style jsx>{`
         .input-search{
           position:relative;
         }

         input{
           background: #F4F4F4;
           border: 1px solid #CCCCCC;
           box-sizing: border-box;
           border-radius: 0.5rem;
           width:32rem;
           height:3.8rem;
           font-style: italic;
           font-size: 14px;
           color: #4B4B4B;
           padding-left:4.8rem;
           position:relative;
           z-index:1;
           outline:none;
         }

         img{
           position:absolute;
           top:1rem;
           left:1.5rem;
           z-index:2;
           width:1.8rem;
         }
       `}</style>
    </div>
  )
}

export default InputSearch;
