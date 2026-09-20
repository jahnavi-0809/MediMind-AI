import axios from "axios";


const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});


/*
============================================================
REQUEST INTERCEPTOR
============================================================
*/

api.interceptors.request.use(
  (config) => {

    const token =
      localStorage.getItem(
        "medimind_token"
      );


    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;

    }


    return config;

  },

  (error) => {

    return Promise.reject(error);

  }
);


/*
============================================================
RESPONSE INTERCEPTOR
============================================================
*/

api.interceptors.response.use(

  (response) => {

    return response;

  },


  (error) => {

    /*
    --------------------------------------------------------
    TOKEN EXPIRED / INVALID
    --------------------------------------------------------
    */

    if (
      error.response?.status === 401
    ) {

      console.warn(
        "Authentication expired or invalid."
      );


      /*
      Clear stored authentication data
      */

      localStorage.removeItem(
        "medimind_token"
      );

      localStorage.removeItem(
        "medimind_user"
      );


      /*
      Redirect only when the user is not
      already on the login page.
      */

      if (
        window.location.pathname !==
        "/login"
      ) {

        const currentPath =
          window.location.pathname;


        window.location.href =
          `/login?sessionExpired=true&from=${encodeURIComponent(
            currentPath
          )}`;

      }

    }


    return Promise.reject(error);

  }

);


export default api;