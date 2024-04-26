import React from "react";
import "./Success.css";
function Success({ success }) {
  return (
    <div
      className={`mt-2 bg-teal-500 text-sm text-white rounded-lg p-4 alert absolute ${
        success ? "showAlert" : ""
      }`}
      role="alert"
    >
      <span className="font-bold"> Your message has been successfully sent</span>
    </div>
  );
}

export default Success;
