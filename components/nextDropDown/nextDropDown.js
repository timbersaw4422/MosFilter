import {useState} from "react";
import Option from "./dropDownOption";

const DropDown = ({css,
                   placeholder = "Placeholder",
                   options = [{id:1, value:"option1"}],
                   defaultId = 1
                  }) => {

  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [activeId, setActiveId] = useState(null);

  return(
    <>
      <div className="dropdown" onClick = {() => setOpen(prev => !prev)}>

         <span>{value || placeholder}</span>

         <svg className="arrow" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.2401 1.74001L7.0001 7.70001L12.7601 1.74001C12.9166 1.57757 13.0021 1.35962 12.9979 1.1341C12.9937 0.90859 12.9 0.693991 12.7376 0.537513C12.5752 0.381035 12.3572 0.295497 12.1317 0.299717C11.9062 0.303936 11.6916 0.397568 11.5351 0.560013L7.0001 5.25501L2.4601 0.560012C2.30362 0.397567 2.08903 0.303936 1.86351 0.299716C1.638 0.295496 1.42005 0.381034 1.2576 0.537512C1.09516 0.69399 1.00153 0.908589 0.997306 1.1341C0.993086 1.35961 1.07862 1.57757 1.2351 1.74001L1.2401 1.74001Z" fill="#8E8E8E"/>
         </svg>

         <div className="options">
            {
              options.map(o => <Option
                   key = {o.id}
                   id = {o.id}
                   value = {o.value}
                   setValue = {setValue}
                   activeId = {activeId}
                   setActiveId = {setActiveId}
                />)
            }
         </div>


      </div>

      <style jsx>{`
        .dropdown{
          margin:${css.margin || "0"};
          width:${css.width || "100%"};
          max-width:${css.maxWidth || "100%"};
          height:${css.height || "40px"};
          border:${css.border || "1px solid #F1F1F1"};
          background:${css.background || "#fff"};
          padding:${css.padding || "0 2rem"};
          display:flex;
          align-items:center;
          justify-content:space-between;
          cursor:pointer;
          position:relative;
          z-index:10;
          background: #F1F1F1;
          font-weight: 500;
          font-size: 12px;
          color: #424242;
        }

        .options{
          position:absolute;
          left:0;
          right:0;
          border:${css.border || "1px solid #F1F1F1"};
          top:${css.height || "40px"};
          transition:0.2s;
          transform:scaleY(${isOpen ? "100%" : "0"});
          transform-origin: top;
          height:200px;
          overflow-y:scroll;
        }

        .arrow{
          transform:rotate(${isOpen ? "180deg" : "0deg"});
        }


      `}</style>
    </>
  )
}

export default DropDown;
