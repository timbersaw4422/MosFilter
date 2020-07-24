const WorkTime = () => {
  return(
    <div className="work-time">
       <h2 className="work-time__title">Режим работы</h2>
       <p className="worktime-paragraph title">Приём заявок на сайте:</p>
       <p className="worktime-paragraph with-margin-bottom">Круглосуточно</p>
       <p className="worktime-paragraph title">Рабочее время:</p>
       <p className="worktime-paragraph">Понедельник - Воскресенье</p>
       <p className="worktime-paragraph with-margin-bottom">с 8:00 до 20:00</p>
       <p className="worktime-paragraph title">Сроки выезда мастера:</p>
       <p className="worktime-paragraph with-margin-bottom">Доставка производится в <br />течение 1 - 2 дней </p>


       <style jsx>{`
         .work-time__title{
           font-weight: 600;
           font-size: 16px;
           line-height: 22px;
           color: #424242;
           width:90%;
           border-bottom:1px solid #E3E3E3;
           padding-bottom:1.2rem;
           margin-bottom:3rem;
         }

         .worktime-paragraph{
            padding-left:1.5rem;
            font-size: 12px;
            line-height: 16px;
            color: #424242;
            position:relative;
          }

          .title{
            font-weight:600;
          }

          .title:before{
            position:absolute;
            content:"";
            left:0;
            top:0.5rem;
            width:4px;
            height:4px;
            background: #4862D2;
            border-radius:50%;
          }

          .with-margin-bottom{
            margin-bottom:3rem;
          }

       `}</style>
    </div>
  )
}

export default WorkTime;
