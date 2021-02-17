import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
export const ToastifyAlert = () => {
  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export const notifySucess = (m) =>
  toast.success(m, {
    position: "top-right",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    autoClose: 4000,
    draggable: true,
  });
 

export const notifyWarning = (m) =>
  toast.error(m, {
    position: "top-right",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    autoClose: 4000,
    draggable: true,
  });
