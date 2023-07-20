import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const TelegramLoginButton = ({
  botName,
  buttonSize,
  cornerRadius,
  requestAccess,
  usePic,
  dataOnauth,
  dataAuthUrl,
  lang,
  widgetVersion,
  className,
  children,
}) => {
  const componentRef = useRef(null);

  useEffect(() => {
    window.TelegramLoginWidget = {
      dataOnauth: (user) => dataOnauth(user),
    };

    const script = document.createElement("script");
    script.src = `https://telegram.org/js/telegram-widget.js?${widgetVersion}`;
    script.setAttribute("data-telegram-login", botName);
    script.setAttribute("data-size", buttonSize);
    if (cornerRadius !== undefined) {
      script.setAttribute("data-radius", cornerRadius);
    }
    script.setAttribute("data-request-access", requestAccess);
    script.setAttribute("data-userpic", usePic);
    script.setAttribute("data-lang", lang);
    if (dataAuthUrl !== undefined) {
      script.setAttribute("data-auth-url", dataAuthUrl);
    } else {
      script.setAttribute("data-onauth", "TelegramLoginWidget.dataOnauth(user)");
    }
    script.async = true;
    componentRef.current.appendChild(script);

    return () => {
      delete window.TelegramLoginWidget;
      if (componentRef.current) {
        componentRef.current.innerHTML = "";
      }
    };
  }, [
    botName,
    buttonSize,
    cornerRadius,
    requestAccess,
    usePic,
    dataOnauth,
    dataAuthUrl,
    lang,
    widgetVersion,
  ]);

  return (
    <div className={className} ref={componentRef}>
      {children}
    </div>
  );
};

TelegramLoginButton.propTypes = {
  botName: PropTypes.string.isRequired,
  dataOnauth: PropTypes.func,
  buttonSize: PropTypes.oneOf(["large", "medium", "small"]),
  cornerRadius: PropTypes.number,
  requestAccess: PropTypes.string,
  usePic: PropTypes.bool,
  lang: PropTypes.string,
  widgetVersion: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
};

TelegramLoginButton.defaultProps = {
  botName: "samplebot",
  dataOnauth: () => undefined,
  buttonSize: "large",
  requestAccess: "write",
  usePic: true,
  lang: "en",
  widgetVersion: 9,
};

export default TelegramLoginButton;
