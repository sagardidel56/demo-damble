// import React, { useEffect } from 'react';

// const YourComponent = () => {
//     const authUrl = "https://yourdomain.com/authenticate";
//   useEffect(() => {
//     const handleTelegramResponse = (response) => {
//       // Handle the authentication response from Telegram
//       console.log(response);
//     };

//     const loadTelegramLoginWidget = () => {
//       window.TelegramLoginWidget = {
//         dataOnauth: handleTelegramResponse,
//       };

//       const script = document.createElement('script');
//       script.src = 'https://telegram.org/js/telegram-widget.js?7';
//       script.async = true;
//       document.body.appendChild(script);
//     };

//     if (window.TelegramLoginWidget) {
//       // If TelegramLoginWidget is already available, directly load the widget
//       loadTelegramLoginWidget();
//     } else {
//       // Wait for the TelegramLoginWidget to be ready
//       window.addEventListener('telegramloginwidget', loadTelegramLoginWidget, false);
//     }

//     return () => {
//       // Cleanup: remove the event listener and TelegramLoginWidget
//       window.removeEventListener('telegramloginwidget', loadTelegramLoginWidget, false);
//       delete window.TelegramLoginWidget;
//     };
//   }, []);

//   return (
//     <div>
//       {/* Render the Telegram Login button */}
//       <script
//         async
//         src="https://telegram.org/js/telegram-widget.js?7"
//         data-telegram-login="your_bot_username"
//         data-size="large"
//         data-radius="10"
//         data-onauth="TelegramLoginWidget.dataOnauth"
//       ></script>
//         <button
//         className="telegram-login-button"
//         data-telegram-login="your_bot_username"
//         data-size="large"
//         data-radius="10"
//         data-auth-url={authUrl} // Replace with your authentication URL
//         data-request-access="write"
//       >
//         Log in with Telegram
//       </button>
//     </div>
//   );
// };

// export default YourComponent;

// import React from 'react';
// import axios from 'axios';
// import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth';

// function Login() {
//   const handleLogin = async () => {
//     const botToken = '6307007770:AAG-eIbJZT0CdJgl9TeNhdIQakTRu5cnKQI';
//     const phoneNumber = 'USER_PHONE_NUMBER';

//     try {
//       // Send a request to the Telegram Bot API for phone number verification
//       const response = await axios.get(`https://api.telegram.org/bot${botToken}/sendContact`, {
//         params: {
//           chat_id: 'YOUR_CHAT_ID', // Replace with your desired chat ID
//           phone_number: phoneNumber,
//           first_name: 'USER_FIRST_NAME', // Replace with the user's first name
//         },
//       });

//       // Handle the response from the API
//       console.log('Verification response:', response.data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleLogin}>Verify with Telegram</button>
//     </div>
//   );
// }

// export default Login;

// import React, { useEffect } from 'react';

// function TelegramLogin() {
//   const handleTelegramAuth = (user) => {
//     alert(
//       'Logged in as ' +
//         user?.first_name +
//         ' ' +
//         user?.last_name +
//         ' (' +
//         user?.id +
//         (user?.username ? ', @' + user?.username : '') +
//         ')'
//     );
//   };

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://telegram.org/js/telegram-widget.js?22';
//     script.async = true;
//     script.setAttribute('data-telegram-login', 'samplebot');
//     script.setAttribute('data-size', 'large');
//     script.setAttribute('data-onauth', 'handleTelegramAuth(user)');
//     script.setAttribute('data-request-access', 'write');
//     document.body.appendChild(script);
//     handleTelegramAuth()

//     const loadTelegramLoginWidget = () => {
//       if (window.TelegramLoginWidget) {
//         window.TelegramLoginWidget.dataOnauth = handleTelegramAuth;
//       }
//     };

//     const scripts = document.createElement('script');
//     script.src = 'https://telegram.org/js/telegram-widget.js?7';
//     script.async = true;
//     script.onload = loadTelegramLoginWidget;
//     document.body.appendChild(scripts);

//     return () => {
//       document.body.removeChild(scripts);
//       document.body.removeChild(script);
//     };

//   }, []);

//   return (
//     <div>
//       <h1>Telegram Login Widget Example</h1>
//       {/* Placeholder div for the Telegram Login button */}
//       <div
//         id="telegram-login-button"
//         data-telegram-login="samplebot"
//         data-size="large"
//         data-onauth="handleTelegramAuth(user)"
//         data-request-access="write"
//       ></div>
//     </div>
//   );
// }

// export default TelegramLogin;

// import React from "react";
// import TelegramLoginButton from "./TelegramLoginButton";

// const Apps = () => {
//   const handleLogin = (user) => {
//     // Handle the login logic here
//     console.log("Logged in user:", user);
//   };

//   return (
//     <div>
//       <h1>Telegram Login Example</h1>
//       <TelegramLoginButton
//         botName="your_bot_name"
//         dataOnauth={handleLogin}
//         buttonSize="large"
//       >
//         Login with Telegram
//       </TelegramLoginButton>
//     </div>
//   );
// };

// export default Apps;
import React from "react";
import TelegramLoginButton from "react-telegram-login";
const TelegramLoginExample = () => {
  const handleTelegramResponse = (response) => {
    // Handle the Telegram login response here
    console.log(response);
  };
  return (
    <div>
      {/* <h1>Telegram Login Example</h1> */}
      <TelegramLoginButton
        dataOnauth={handleTelegramResponse}
        botName="test_damble_bot"
        // requestAccess="write"
        // usePic={true}
        // lang="en"
        // widgetVersion={9}
        dataDomain="localhost" // Add 'localhost' as a valid domain
      >
        Login with Telegram
      </TelegramLoginButton>
    </div>
  );
};
export default TelegramLoginExample;
