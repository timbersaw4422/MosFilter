import AlertTemplate from "react-alert-template-basic";
import { positions, Provider } from "react-alert";
import ModalWrapper from "./modalWrapper";

const ModalWithAlertProvider = ({setModalOpen, title, modalType, height, subtitle, subtitle2, data, img, setCartCount}) => {

  const options = {
    timeout: 3000,
    position: positions.BOTTOM_CENTER,
    type:"error"
  };

  return(
    <Provider template={AlertTemplate} {...options}>
        <ModalWrapper
           modalOpen = {setModalOpen}
           title={title}
           modalType={modalType}
           height = {height}
           subtitle = {subtitle}
           subtitle2 = {subtitle2}
           data = {data}
           img={img}
           setCartCount={setCartCount}
           setModalOpen={setModalOpen}
        />
    </Provider>
  )
}

export default ModalWithAlertProvider;
