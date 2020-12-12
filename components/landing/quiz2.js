import {useState, useRef} from "react";
import PhoneInput from 'react-phone-number-input'
import QuizBtn from "./quizBtn";
import QuizRadio from "./quizRadio";
import DropDown from "../nextDropDown/nextDropDown";
import Loader from "./loader";
import {sendMail} from "../../utils/mail";

const Quiz = ({goods, setModalOpen}) => {
  let modelTitle=""; let radioTitle; let place; let typeTitle;
  const steps = 6;
  const [activeStep, setActiveStep] = useState(0);
  const [checked, setChecked] = useState(true);
  const [phoneInput, setPhoneInput] = useState();

  const [quizData, setQuizData] = useState({
    policy:true,
    activeModel:0,
    activeRadio:1,
    metro:"",
    outOfMkad:false,
    activeRadioType:1
  });

  switch (quizData.activeRadio){
    case 1:{radioTitle="Нужны картриджи и услуга профессиональной замены"; break;}
    case 2:{radioTitle="Нужны только картриджи, замену произвожу самостоятельно"; break;}
    case 3:{radioTitle="Нужна только услуга замены, картриджи уже куплены"; break;}
    default:break;
  }

  place = quizData.outOfMkad ? "За пределами МКАД" : quizData.metro;

  const onChangeMetroInput = e => {
    const metro = e.target.value;
    setQuizData(prev => ({...prev, metro}))
  }

  const onChangePhoneInput = e => {
    const phone = e.target.value;
    setQuizData(prev => ({...prev, phone}))
  }

  const onChangeModelDropDown = (id) => {
    setQuizData(prev => ({...prev, activeModel:id}));
  }

  const dropDownOptions = [{id:1, value:"Atoll"},{id:2, value:"Гейзер"},{id:3, value:"Барьер"}, {id:4, value:"Аквафор"}, {id:5, value:"Platinum-wasser"},
  {id:6, value:"Другая марка"}];

  const dropDownOptions2 = [{id:1, value:"Проточный фильтр"}, {id:2, value:"Обратный осмос"}];

  const calculatePrice = () => {
    let price = 0;
    let type;
    if (quizData.activeRadioType === 1) type = 1; else type=2;
    switch (quizData.activeModel){
      case 1:{
        price += type === 1 ? 1500 : 850;
        modelTitle="Атолл";
        break;
      }
      case 2:{
        price += type === 1 ? 2200 : 640;
        modelTitle="Гейзер";
        break;
      }
      case 3:{
        price += type === 1 ? 1600 : 800;
        modelTitle="Барьер";
        break;
      }
      case 4:{
        price += type === 1 ? 1250 : 640;
        modelTitle="Аквафор";
        break;
      }
      case 5:{
        price += type === 1 ? 1500 : 950;
        modelTitle="Platinum-wasser";
        break;
      }
      case 6:{
        price += type === 1 ? 1300 : 2800;
        modelTitle="Не знаю марку";
        break;
      }
      default:break;
    }

    if (quizData.activeRadio === 1) price+=1200;
    else if (quizData.activeRadio === 2) price += 300;
    else {
      price=1200;
    }

    if (quizData.outOfMkad === true) price += 300;

    return price;
  }

  switch (quizData.activeModel){
    case 1:{
      modelTitle="Атолл";
      break;
    }
    case 2:{
      modelTitle="Гейзер";
      break;
    }
    case 3:{
      modelTitle="Барьер";
      break;
    }
    case 4:{
      modelTitle="Аквафор";
      break;
    }
    case 5:{
      modelTitle="Platinum-wasser";
      break;
    }
    case 6:{
      modelTitle="Не знаю марку";
      break;
    }
    default:break;
  }

  if (quizData.activeRadioType === 1) typeTitle = "Проточный фильтр";
  else typeTitle = "Обратный осмос";

  const inputPhone = useRef();
  let isPhoneValid;
  if (!inputPhone.current) isPhoneValid=false;
  else if (inputPhone.current.value.length >= 16) isPhoneValid= true;

  const [loading, setLoading] = useState(false);

  const sendQuizMail = () => {
    if (isPhoneValid){
      setLoading(true);
      sendMail(
        {phone:phoneInput, model:modelTitle, typeOfFilter:typeTitle, service:radioTitle, place:place, modal:11, payload:"1", price:calculatePrice()}
      ).then(() => {
        setActiveStep(7);
      });
    }
  }

  return(
    <>
       <div className="quiz">
         <svg className="quiz__background" width="787" height="700" viewBox="0 0 787 524" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M282.299 -88.866C279.704 -79.1158 281.054 -68.8 286.057 -60.1335C291.061 -51.467 299.32 -45.1407 309.061 -42.5126L604.62 34.0643C654.136 47.0145 698.657 73.8463 732.892 111.371C767.128 148.895 789.638 195.535 797.748 245.746C805.858 295.958 799.226 347.63 778.641 394.622C758.056 441.613 724.384 481.948 681.625 510.833C638.867 539.718 588.821 555.938 537.434 557.566C486.048 559.194 435.482 546.161 391.746 520.016C348.011 493.872 312.944 455.714 290.715 410.079C268.486 364.444 260.028 313.25 266.347 262.581L341.658 280.484C339.054 327.142 353.842 372.871 383.203 408.955C412.564 445.04 454.443 468.955 500.858 476.141C547.273 483.328 594.978 473.284 634.876 447.924C674.775 422.564 704.078 383.661 717.199 338.633C723.972 314.48 725.88 289.306 722.812 264.559C719.745 239.813 711.763 215.982 699.326 194.441C686.888 172.899 670.242 154.071 650.344 139.041C630.447 124.011 607.692 113.076 583.388 106.866L435.609 68.5774C430.757 67.3204 425.69 67.027 420.695 67.7141C415.701 68.4012 410.878 70.0553 406.502 72.5819C402.126 75.1085 398.282 78.4582 395.19 82.4397C392.098 86.4211 389.818 90.9564 388.481 95.7866C387.144 100.617 386.775 105.647 387.396 110.591C388.018 115.534 389.617 120.294 392.102 124.598C394.587 128.903 397.909 132.667 401.88 135.677C405.851 138.687 410.392 140.883 415.243 142.14L563.023 180.428C591.533 188.817 615.478 207.919 629.797 233.697C644.116 259.476 647.686 289.91 639.752 318.567C631.818 347.224 613.003 371.859 587.283 387.263C561.563 402.668 530.954 407.636 501.926 401.116C472.595 393.4 447.695 374.452 432.656 348.403C417.616 322.353 413.656 291.316 421.64 262.056C423.189 257.224 423.717 252.141 423.19 247.127C422.664 242.112 421.094 237.275 418.58 232.92C416.065 228.566 412.661 224.788 408.582 221.824C404.503 218.861 399.837 216.776 394.878 215.702L247.098 177.414C242.289 176.116 237.25 175.805 232.288 176.502C227.326 177.199 222.544 178.888 218.233 181.466C209.394 186.601 202.85 194.899 199.97 204.623C181.796 270.136 183.548 339.244 205.003 403.206C226.459 467.167 266.655 523.108 320.505 563.95C374.356 604.792 439.442 628.7 507.528 632.651C575.615 636.601 643.643 620.416 703.006 586.142C762.37 551.869 810.401 501.047 841.023 440.107C871.645 379.167 883.482 310.847 875.037 243.79C866.592 176.733 838.245 113.953 793.58 63.3908C748.916 12.8289 689.941 -23.2421 624.119 -40.2589L329.427 -116.075C319.632 -118.509 309.21 -117.022 300.398 -111.935C291.587 -106.848 285.089 -98.5655 282.299 -88.866Z" fill="#3573A9"/>
              <path d="M303.746 96.3577L309.065 90.7639L313.016 84.2788L314.488 80.906C314.937 79.7746 315.262 78.6003 315.458 77.4032L316.428 73.9001C316.675 72.597 316.771 71.2721 316.712 69.9517C316.989 67.5539 317.026 65.1385 316.823 62.7403L315.106 55.3229C315.106 55.3229 313.832 53.1156 313.285 52.1696C312.84 51.0331 312.226 49.9705 311.465 49.0163C306.636 40.6533 298.628 34.5828 289.202 32.1404C279.775 29.698 269.703 31.0837 261.2 35.9927L257.994 37.8437L254.788 39.6948C252.731 41.2719 250.935 43.1601 249.469 45.2886L245.337 51.458L243.864 54.8308L242.574 58.5189L242.107 62.152C241.659 63.3123 241.499 64.5587 241.64 65.7852C241.503 68.2954 241.526 70.8095 241.711 73.3122C241.878 75.7448 242.395 78.1362 243.246 80.4139C243.246 80.4139 244.521 82.6212 245.249 83.8825L248.89 90.1891C248.89 90.1891 250.165 92.3964 250.711 93.3424C252.312 95.3236 254.185 97.0721 256.275 98.5385C258.251 99.9131 260.362 101.089 262.576 102.048C263.612 102.887 264.83 103.478 266.138 103.776L269.336 104.872L273.175 105.599L276.832 106.01L284.423 105.832L291.927 104.022L304.751 96.6181L303.746 96.3577Z" fill="#3573A9"/>
         </svg>

         <div className="quiz__head">
            <h2 className="quiz__title">Quiz | Мос - Фильтр</h2>
            <img src="/img/landing/logo1.png" alt="Мос-фильтр логотип"/>
         </div>

         <div className="quiz__progress">
            <div className="quiz__progress-shape"></div>
         </div>

         <div className="quiz__track">

            <div className="quiz__step quiz__step0">
               <h3 className="quiz__step-title" style={{margin:"0 auto 4rem auto", paddingTop:"8rem", textAlign:"center"}}>
               Внимательно ответьте на 4 коротких вопроса и узнайте стоимость замены картриджей на вашем фильтре</h3>
               <div style = {{opacity:quizData.policy ? "1" : "0.5"}}>
               <QuizBtn
                   setActiveStep={setActiveStep}
                   to = {1}
                   css={{width:"23rem", background:"#fff", textColor:"#424242", arrowFill:"#004990", padding:"0 4rem", margin:"0 auto 5.3rem auto"}}
                   text="Узнать&nbsp;стоимость"
                   reverse={false}
                   policy={quizData.policy}
                   nonAdaptive={true}
               />
               </div>

               <div className="policy-group">
                  <div className="policy-checkbox" onClick={() => setQuizData(prev => ({...prev, policy:!prev.policy}))}>
                    <svg className="policy-checkbox__inner" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.23882 7.05748L1.41653 4.223L0 5.63473L4.23387 9.88625L12.7359 1.41779L11.3243 0L4.23882 7.05748Z" fill="#004990"/>
                    </svg>
                  </div>
                  <p className="policy">Даю свою разрешение на  обработку персональных <br/>данных согласно <span>политике конфиденциальности</span></p>
               </div>
            </div>

            <div className="quiz__step quiz__step1">
               <h3 className="quiz__step-title" style={{marginBottom:"2.4rem"}}> 1. Выберите марку вашего фильтра</h3>
               <div className="quiz__filter-models">
                   <DropDown
                     css={{
                       width:"100%",
                       maxWidth:"330px",
                       height:"6rem",
                       margin:"0 0 2.5rem 0"
                     }}
                     placeholder="Марка фильтра"
                     options={dropDownOptions}
                     defaultId = {1}
                     callBack = {onChangeModelDropDown}
                   />
               </div>
               <div className="quiz__button-group">
                 <QuizBtn
                     setActiveStep={setActiveStep}
                     to = {0}
                     css={{width:"13rem", background:"#004990", textColor:"#fff", arrowFill:"#fff", padding:"0 2rem", margin:"0"}}
                     text="Назад"
                     reverse={true}
                     policy={quizData.policy}
                 />
                 <QuizBtn
                     setActiveStep={setActiveStep}
                     to = {2}
                     css={{width:"13rem", background:"#004990", textColor:"#fff", arrowFill:"#fff", padding:"0 2rem", margin:"0"}}
                     text="Далее"
                     reverse={false}
                     policy={quizData.activeModel}
                 />
               </div>
            </div>

            <div className="quiz__step quiz__step2">
               <h3 className="quiz__step-title" style={{marginBottom:"2.4rem"}}> 2. Выберите тип вашего фильтра</h3>
               <div className="quiz__variant" onClick = {() => setQuizData(prev => ({...prev, activeRadioType:1}))}>
                 <QuizRadio id={1} activeRadio = {quizData.activeRadioType} setQuizData={setQuizData}/>
                 <span>Проточный фильр</span>
               </div>
               <div className="quiz__variant" onClick = {() => setQuizData(prev => ({...prev, activeRadioType:2}))}>
                 <QuizRadio id={2} activeRadio = {quizData.activeRadioType} setQuizData={setQuizData}/>
                 <span>Обратный осмос</span>
               </div>
               <div className="quiz__button-group">
                 <QuizBtn
                     setActiveStep={setActiveStep}
                     to = {1}
                     css={{width:"13rem", background:"#004990", textColor:"#fff", arrowFill:"#fff", padding:"0 2rem", margin:"0"}}
                     text="Назад"
                     reverse={true}
                     policy={quizData.policy}
                 />
                 <QuizBtn
                     setActiveStep={setActiveStep}
                     to = {3}
                     css={{width:"13rem", background:"#004990", textColor:"#fff", arrowFill:"#fff", padding:"0 2rem", margin:"0"}}
                     text="Далее"
                     reverse={false}
                     policy={quizData.activeModel}
                 />
               </div>
            </div>

            <div className="quiz__step quiz__step3">
               <h3 className="quiz__step-title" style={{marginBottom:"3.9rem"}}> 3. Укажите вариант предоставления услуг</h3>
               <div className="quiz__variants">
                 <div className="quiz__variant" onClick = {() => setQuizData(prev => ({...prev, activeRadio:1}))}>
                   <QuizRadio id={1} activeRadio = {quizData.activeRadio} setQuizData={setQuizData}/>
                   <span>Нужны и картриджи, и услуга профессиональной замены</span>
                 </div>
                 <div className="quiz__variant" onClick = {() => setQuizData(prev => ({...prev, activeRadio:2}))}>
                   <QuizRadio id={2} activeRadio = {quizData.activeRadio} setQuizData={setQuizData}/>
                   <span>Нужны только картриджи, замену произвожу самостоятельно</span>
                 </div>
                 <div className="quiz__variant" onClick = {() => setQuizData(prev => ({...prev, activeRadio:3}))}>
                   <QuizRadio id={3} activeRadio = {quizData.activeRadio} setQuizData={setQuizData}/>
                   <span>Нужна только услуга замены, картриджи уже куплены</span>
                 </div>
               </div>
               <div className="quiz__button-group">
                 <QuizBtn
                     setActiveStep={setActiveStep}
                     to = {2}
                     css={{width:"13rem", background:"#004990", textColor:"#fff", arrowFill:"#fff", padding:"0 2rem", margin:"0"}}
                     text="Назад"
                     reverse={true}
                     policy={quizData.policy}
                 />
                 <QuizBtn
                     setActiveStep={setActiveStep}
                     to = {4}
                     css={{width:"13rem", background:"#004990", textColor:"#fff", arrowFill:"#fff", padding:"0 2rem", margin:"0"}}
                     text="Далее"
                     reverse={false}
                     policy={quizData.policy}
                 />
               </div>
            </div>

            <div className="quiz__step quiz__step4">
               <h3 className="quiz__step-title" style={{marginBottom:"3.9rem"}}> 4. Укажите ближайшую к вам станицию метро</h3>
               <div className="quiz__metro">
                  <input type="text"
                    onChange = {onChangeMetroInput}
                    placeholder="Введите название станции"
                    className="quiz__metro-input"/>
                  <div className="outOfMkad" onClick={() => setQuizData(prev => ({...prev, outOfMkad:!prev.outOfMkad}))}>
                  <div className="policy-checkbox">
                    <svg className="outOfMkad-checkbox__inner" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.23882 7.05748L1.41653 4.223L0 5.63473L4.23387 9.88625L12.7359 1.41779L11.3243 0L4.23882 7.05748Z" fill="#004990"/>
                    </svg>
                  </div>
                    <p className="outOFMkad__title">Нахожусь за пределами МКАД</p>
                  </div>
               </div>
               <div className="quiz__button-group">
                 <QuizBtn
                     setActiveStep={setActiveStep}
                     to = {3}
                     css={{width:"13rem", background:"#004990", textColor:"#fff", arrowFill:"#fff", padding:"0 2rem", margin:"0"}}
                     text="Назад"
                     reverse={true}
                     policy={quizData.policy}
                 />
                 <QuizBtn
                     setActiveStep={setActiveStep}
                     to = {5}
                     css={{width:"13rem", background:"#004990", textColor:"#fff", arrowFill:"#fff", padding:"0 2rem", margin:"0"}}
                     text="Далее"
                     reverse={false}
                     policy={quizData.outOfMkad || quizData.metro}
                 />
               </div>
            </div>

            <div className="quiz__step quiz__step5">
               <h3 className="quiz__step-title" style={{marginBottom:"1.4rem"}}> 5. Детали заказа</h3>
               <div className="quiz__details">
                  <div className="details__shape"></div>
                  <p className="details__text">• Марка фильтра: <span>{modelTitle}</span></p>
                  <p className="details__text">• Тип фильтра: <span>{typeTitle}</span></p>
                  <p className="details__text">• Вариант услуги: <span>{radioTitle}</span></p>
                  <p className="details__text" style={{marginBottom:"4.7rem"}}>• Местоположение: <span>{place}</span></p>
               </div>
               <p className="quiz__pice">Стоимость: &nbsp;<span>{calculatePrice()} <i style = {{fontSize:"20px"}}className="fas fa-ruble-sign"></i></span></p>
               <div className="quiz__button-group">
                 <QuizBtn
                     setActiveStep={setActiveStep}
                     to = {4}
                     css={{width:"13rem", background:"#004990", textColor:"#fff", arrowFill:"#fff", padding:"0 2rem", margin:"0"}}
                     text="Назад"
                     reverse={true}
                     policy={quizData.policy}
                 />
                 <QuizBtn
                     setActiveStep={setActiveStep}
                     to = {6}
                     css={{width:"20.5rem", background:"#004990", textColor:"#fff", arrowFill:"#fff", padding:"0 3rem", margin:"0"}}
                     text="Оформить заказ"
                     reverse={false}
                     policy={quizData.policy}
                 />
               </div>
            </div>

            <div className="quiz__step quiz__step6">
               <h3 className="quiz__step-title" style={{marginBottom:"4rem"}}> 6. Укажите свой номер телефона, наш мастер свяжется с вами через 5 минут</h3>

                <PhoneInput ref = {inputPhone}
                  placeholder="Enter phone number"
                  value={phoneInput}
                  onChange={setPhoneInput}
                  maxLength="16"
                  international
                  defaultCountry="RU"
                  onChange = {
                    () => {
                      if (inputPhone.current.value.length <= 2 ) inputPhone.current.value = "+7";
                      setPhoneInput(inputPhone.current.value);
                    }
                  }
                  />

               <div className="quiz__button-group">
                 <QuizBtn
                     setActiveStep={setActiveStep}
                     to = {5}
                     css={{width:"13rem", background:"#004990", textColor:"#fff", arrowFill:"#fff", padding:"0 2rem", margin:"0"}}
                     text="Назад"
                     reverse={true}
                     policy={quizData.policy}
                 />
                 <div className="btn-wrap" onClick={sendQuizMail} style={{position:"relative"}}>
                   {
                     loading ? <Loader margin="0 auto"/>
                             : <QuizBtn
                                 setActiveStep={setActiveStep}
                                 to = {7}
                                 css={{width:"20.5rem", background:"#FF652E", textColor:"#fff", arrowFill:"#fff", padding:"0 3rem", margin:"0",
                                       border:"1px solid #FF652E"}}
                                 text="Отправить заявку"
                                 reverse={false}
                                 policy={isPhoneValid}

                             />
                   }

                 </div>
               </div>
            </div>

            <div className="quiz__step quiz__step7">
               <h3 className="quiz__step-title" style={{margin:"8rem 0 3.5rem 0", textAlign:"center"}}>
               Спасибо за заявку! Наш специалист уже спешит к телефону<br />Пожалуйста оставайтесь на связи
               </h3>

               <div className="btn-wrap" onClick={() => setModalOpen(false)}>
               <QuizBtn
                   setActiveStep={setActiveStep}
                   to = {7}
                   css={{width:"23rem", background:"#fff", textColor:"#424242", arrowFill:"#004990", padding:"0 4rem", margin:"0 auto 5.3rem auto"}}
                   text="Вернуться к сайту"
                   reverse={false}
                   policy={quizData.policy}
                   nonAdaptive={true}
               />
               </div>
            </div>

         </div>

      </div>


       <style jsx>{`
         .quiz{
           position:relative;
           overflow:hidden;
           border: 1px solid #B7CCE0;
         }

         .quiz__step1, .quiz__step2, .quiz__step3, .quiz__step4, .quiz__step5, .quiz__step6{
           padding:3.7rem 4.5rem 0 4.5rem;
         }

         .quiz__background{
           position:absolute;
           bottom:0;
           right:0;
           z-index:0;
           opacity:0.03;
         }

         .quiz__head{
           position:relative;
           z-index:10;
           padding:3.5rem 4.5rem;
           display:flex;
           align-items:center;
           justify-content:space-between;
         }

         .quiz__title{
            font-weight: 500;
            font-size: 22px;
            color: #626262;
         }

         .quiz__progress{
           position:relative;
           height:1px;
           background: #B7CCE0;
         }

         .quiz__progress-shape{
           height:3px;
           width:100%;
           margin-top:-1px;
           background: #004990;
           transition:0.3s;
           transform-origin:left;
           transform:scaleX(${activeStep / steps});
         }

         .quiz__step{
           height:38rem;
           width:10%;
           position:Relative;
         }

          .quiz__step-title{
            font-weight: 600;
            font-size: 16px;
            color: #505050;
            width:100%;
            line-height:150%;
          }

          .quiz__track{
            width:1000%;
            transition:0.5s;
            transform:translateX(${-activeStep*10}%);
            display:flex;
            align-items:Center;
          }

          .policy-group{
            display:flex;
            align-items:center;
            justify-content:center;
            margin:0 auto;
          }

          .policy-group input{
            cursor:pointer;
            margin-right:2rem;
          }

          .policy-checkbox{
            height:20px;
            width:20px;
            cursor:pointer;
            border: 2px solid #004990;
            border-radius: 2px;
            margin-right:20px;
            display:flex;
            align-items:center;
            justify-content:center;
          }

          .policy-checkbox__inner{
             opacity:${quizData.policy ? "1" : "0"};
          }

          .policy{
            font-size: 10px;
            line-height: 12px;
            color: #424242;
          }

          .policy span{
            color: #004990;
            cursor:pointer;
          }

          .quiz__filter-models{
            height:15rem;
            margin-bottom:3.5rem;
          }

          .quiz__button-group{
            display:flex;
            align-items:center;
            justify-content:space-between;
            position:absolute;
            bottom:0;
            width:calc(100% - 9rem);
            bottom:4.5rem;
          }

          .quiz__variants{
            margin-bottom:5.4rem;
          }

          .quiz__variant{
            display:flex;
            align-items:center;
            margin-bottom:3rem;
            cursor:pointer;
          }

          .quiz__variant span{
            font-size: 16px;
            color: #424242;
          }

          .quiz__metro-input{
            font-family: Montserrat;
            border:none;
            border-bottom:1px solid #004990;
            outline:none;
            width:100%;
            max-width:388px;
            margin-bottom:4.6rem;
            padding:11px 0;
            font-weight: 500;
            font-size: 16px;
            color: #505050;
            background:transparent;
          }

          .quiz__metro-input::placeholder{
            font-family: Montserrat;
            font-weight: 500;
            font-size: 16px;
            color: #D0D0D0;
          }

          .outOfMkad{
            display:flex;
            align-items:center;
            margin-bottom:6.3rem;
            cursor:pointer;
          }

          .outOFMkad__title{
            font-size: 16px;
            color: #424242;
            margin:0 0 0 1.5rem;
          }

          .outOfMkad-checkbox__inner{
            opacity:${quizData.outOfMkad ? "1" : "0"};
          }

          .details__shape{
            width:100%;
            max-width:388px;
            height:1px;
            background: #004990;
            margin-bottom:2rem;
          }

          .details__text{
            font-weight: 600;
            font-size: 16px;
            color: #424242;
            margin-bottom:2.5rem;
          }

          .details__text span{
            font-weight:400;
          }

          .quiz__phone{
            outline:none;
            border:none;
            width:100%;
            max-width:388px;
            border-bottom:1px solid #004990;
            padding:1rem 0;
            font-weight: 500;
            font-size: 16px;
            color: #424242;
          }

          .quiz__pice{
            position:absolute;
            bottom:12rem;
            right:4.5rem;
            font-weight: 600;
            font-size: 16px;
            color: #424242;
          }

          .quiz__pice span{
            font-size: 24px;
            font-weight:bold;
            color: #004990;
          }

          @media screen and (max-width:1000px){
            .quiz__step{
              height:45rem;
            }
          }

          @media screen and (max-width:600px){
            .quiz__step1, .quiz__step2, .quiz__step3, .quiz__step4, .quiz__step5, .quiz__step6{
              padding:1rem 1rem 0 1rem;
            }
            .quiz__button-group{
              width:calc(100% - 2rem);
            }
          }

          @media screen and (max-width:400px){
            .quiz__button-group{
              height:9rem;
              flex-direction:Column;
              bottom:2rem;
            }

            .btn-wrap{
              width:100%;
            }
            .details__text{
              margin:1rem 0;
            }
          }



         `}</style>
    </>
  )
}

export default Quiz;
