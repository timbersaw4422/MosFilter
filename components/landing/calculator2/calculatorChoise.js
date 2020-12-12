import ChoiseOption from "./option";
import {useState} from "react";

const CalculatorChoise = ({title, placeholder, options, setOption, initialOption1, height, setActiveModel}) => {

  const [dropDownValue, setDropDownValue] = useState("");
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [activeId, setActiveId] = useState(initialOption1 || 1);

  const arrowRotate = isDropDownOpen ? 180 : 0;
  const scaleOptions = isDropDownOpen ? 1 : 0;

  const dropDownClickHandler = () => {
    setDropDownOpen(!isDropDownOpen);
  }

  const optionClickHandler = (text, id) => {
    setDropDownValue(text);
    setActiveId(id);
  }



  return(
    <div className="calculator__choise" onClick = {dropDownClickHandler}>
        <p className="choise__title">{title}</p>
        <div className="choise__input">
          <span className="input__current-value">{dropDownValue || placeholder}</span>
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.04712 8.7408C5.09758 8.82074 5.1651 8.8861 5.24386 8.93125C5.32263 8.97641 5.41027 9 5.49925 9C5.58823 9 5.67588 8.97641 5.75464 8.93125C5.83341 8.8861 5.90093 8.82074 5.95139 8.7408L10.9018 0.941336C10.9591 0.851376 10.9927 0.746008 10.9989 0.63668C11.0052 0.527352 10.9839 0.418245 10.9372 0.321214C10.8906 0.224183 10.8205 0.142939 10.7346 0.086309C10.6486 0.0296788 10.5501 -0.000171795 10.4496 7.43741e-07H0.548867C0.448673 0.000452158 0.350487 0.0306866 0.264869 0.0874525C0.179251 0.144218 0.109439 0.225368 0.0629416 0.322174C0.0164442 0.418981 -0.00497963 0.527781 0.000974015 0.636876C0.00692766 0.74597 0.0400335 0.85123 0.0967313 0.941336L5.04712 8.7408Z" fill="#004990"/>
          </svg>


          <div className="choise__options">

             {options.map(o => <ChoiseOption
               key={o.id}
               id = {o.id}
               text={o.text}
               changeHandler={optionClickHandler}
               activeId={activeId}
               setOption= {setOption}
               setActiveId={setActiveId}
               setActiveModel={setActiveModel}
               />)}

          </div>

        </div>




        <style jsx>{`
          .calculator__choise{
            margin-right:3rem;
            margin-bottom:3.7rem;
            position:relative;
            width:45%;
          }

          .choise__options{
            position:absolute;
            width:100%;
            top:9rem;
            left:0;
            z-index:10;
            background: #FFFFFF;
            border: 1px solid #E3E3E3;
            border-top:none;
            transform:scaleY(${scaleOptions});
            transform-origin:top;
            transition:0.2s;
            height:${height || "auto"};
            overflow-y:${height ? "scroll" : "auto"};
          }

          .choise__filter-model{
            height:30rem;
            overflow-y:scroll;
          }

          .choise__title{
            font-weight: 600;
            font-size: 13px;
            line-height: 16px;
            color: #424242;
            margin-top:0;
          }

          .choise__input{
            height:6rem;
            width:100%;
            background: #FFFFFF;
            border: 1px solid #B7CCE0;
            display:flex;
            align-items:center;
            justify-content:space-between;
            padding:0 1.4rem;
            cursor:pointer;
          }

          .input__current-value{
            font-size: 13px;
            line-height: 16px;
            color: #424242;
          }

          .choise__options .choise__option:last-child{
            border-bottom:none;
          }

          svg{
            transform:rotate(${arrowRotate}deg);
          }

          @media screen and (max-width:1067px){
            .calculator__choise{
              width:100%;
            }
          }

          @media screen and (max-width:500px){
            .calculator__choise{
              margin-right:0;
            }
          }

        `}</style>
    </div>
  )
}

export default CalculatorChoise;
