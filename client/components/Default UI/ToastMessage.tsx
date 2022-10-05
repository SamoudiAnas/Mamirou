import { useEffect } from "react";
import styled from "styled-components";

//redux
import { useDispatch, useSelector } from "react-redux";
import { RootState, toastAC } from "../../store";
import { bindActionCreators } from "redux";

const ToastMessage: React.FC = () => {
    const toast = useSelector((state: RootState) => state.toast);
    const dispatch = useDispatch();

    const { resetToast } = bindActionCreators(toastAC, dispatch);
    useEffect(() => {
        if (toast !== "") {
            setTimeout(() => {
                resetToast();
            }, 3000);
        }
    }, [toast]);

    return (
        <Wrapper isVisible={toast === "" ? "-100%" : "2rem"}>
            <p className="toast-message">{toast}</p>
        </Wrapper>
    );
};

export default ToastMessage;

const Wrapper = styled.div`
    position: absolute;
    top: 5rem;
    right: ${(props: { isVisible: string }) => props.isVisible};
    background-color: #57545410;
    border: 1px solid #575454;
    padding: 1rem;
    text-align: center;
    z-index: 999999;
    transition: right 0.2s cubic-bezier(0.175, 0.885, 0.32, 0.75);

    @media screen and (min-width: 48rem) {
        width: 20rem;
    }

    .toast-message {
        font-size: 1.2rem;
        font-family: "PT Serif", serif;
        background-color: #575454;
        color: white;
        padding: 1rem;
    }
`;
