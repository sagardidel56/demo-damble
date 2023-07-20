import React from "react";

const ErrorMessage = ({ children }) => {
    return <span style={{ color: "red" }}>{children}</span>;
};

export default ErrorMessage;
