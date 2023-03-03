import { ModalContainer, ModalDiv } from "./Modal.styles";
import { UserInfo } from "../../types";

const Modal = (props: { userData:UserInfo[], setUserData:any, setModalIsOpen: any }) => {
  
    const {userData, setUserData, setModalIsOpen} = props
    const setUserName = () => {
        setModalIsOpen(false);
        const input = document.querySelector("input");
        const name = input ? input.value : "You";
        if (name !== "You") {
            let newUserData = [...userData];
            newUserData.forEach(user => {
                if( user.name === "You"){
                    user.name = name;
                }
            });
            setUserData( newUserData );
        }
    }

    return (
        <ModalDiv>
            <ModalContainer>
                <div className="title">Please enter your name</div>
                <div className="footer">
                    <input type="text" />
                    <button onClick={setUserName}>Enter</button>
                </div>
            </ModalContainer>
        </ModalDiv>
    );
}

export default Modal;