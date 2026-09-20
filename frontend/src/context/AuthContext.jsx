import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


const AuthContext =
  createContext(null);


export const AuthProvider = ({
  children,
}) => {


  /*
  ============================================================
  USER
  ============================================================
  */

  const [user, setUser] =
    useState(() => {

      const storedUser =
        localStorage.getItem(
          "medimind_user"
        );


      if (!storedUser) {
        return null;
      }


      try {

        return JSON.parse(
          storedUser
        );

      } catch (error) {

        console.error(
          "Failed to read stored user:",
          error
        );


        localStorage.removeItem(
          "medimind_user"
        );


        return null;

      }

    });


  /*
  ============================================================
  TOKEN
  ============================================================
  */

  const [token, setToken] =
    useState(() => {

      return localStorage.getItem(
        "medimind_token"
      );

    });


  /*
  ============================================================
  LOGIN STATUS
  ============================================================
  */

  const isLoggedIn =
    Boolean(
      token && user
    );


  /*
  ============================================================
  STORAGE CHANGE
  ============================================================
  */

  useEffect(() => {

    const handleStorageChange =
      () => {

        const storedToken =
          localStorage.getItem(
            "medimind_token"
          );


        const storedUser =
          localStorage.getItem(
            "medimind_user"
          );


        setToken(
          storedToken
        );


        if (storedUser) {

          try {

            setUser(
              JSON.parse(
                storedUser
              )
            );

          } catch (error) {

            console.error(
              "Failed to read stored user:",
              error
            );


            setUser(null);

          }

        } else {

          setUser(null);

        }

      };


    window.addEventListener(
      "storage",
      handleStorageChange
    );


    return () => {

      window.removeEventListener(
        "storage",
        handleStorageChange
      );

    };

  }, []);


  /*
  ============================================================
  LOGIN
  ============================================================
  */

  const login = (
    accessToken,
    userData
  ) => {

    localStorage.setItem(
      "medimind_token",
      accessToken
    );


    localStorage.setItem(
      "medimind_user",
      JSON.stringify(
        userData
      )
    );


    setToken(
      accessToken
    );


    setUser(
      userData
    );

  };


  /*
  ============================================================
  LOGOUT
  ============================================================
  */

  const logout = () => {

    localStorage.removeItem(
      "medimind_token"
    );


    localStorage.removeItem(
      "medimind_user"
    );


    setToken(null);


    setUser(null);

  };


  /*
  ============================================================
  CONTEXT
  ============================================================
  */

  return (

    <AuthContext.Provider
      value={{
        user,
        token,
        isLoggedIn,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

};


export const useAuth = () => {

  return useContext(
    AuthContext
  );

};