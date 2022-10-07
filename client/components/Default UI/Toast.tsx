import { toast, Toaster, ToastBar } from "react-hot-toast";

export default function Toast() {
    return (
        <Toaster
            position="top-right"
            toastOptions={{
                className: "",
                style: {
                    border: "1px solid #713200",
                    padding: "24px 32px",
                    borderRadius: "0",
                    color: "#713200",
                    fontFamily: "PT Serif",
                },
            }}
        >
            {(t) => (
                <ToastBar toast={t}>
                    {({ icon, message }) => (
                        <>
                            {icon}
                            {message}
                        </>
                    )}
                </ToastBar>
            )}
        </Toaster>
    );
}
