import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
function AppContextProvider({ children }) {
  const defaultToken =
    localStorage.getItem("accessToken") ||
    sessionStorage.getItem("accessToken");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);
  const [accessToken, setAccessToken] = useState(defaultToken);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResult, setSearchResult] = useState([]);
  const [offerSearchResult, setOfferSearchResult] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [admin, setAdmin] = useState({
    name: "Ahadu Sefefe",
    email: "ahadu_sefefe@gmail.com",
  });
  const recordPerPage = 7;
  const [totalPages, setTotalPages] = useState(0);

  useEffect(
    function () {
      if (isDarkMode) document.documentElement.className = "dark-mode";
      else document.documentElement.className = "light-mode";
    },
    [isDarkMode]
  );

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode: setIsDarkMode,
        isAuthed,
        setIsAuthed,
        currentPage,
        setCurrentPage,
        accessToken,
        setAccessToken,
        recordPerPage,
        searchResult,
        setSearchResult,
        showModal,
        setShowModal,
        admin,
        setAdmin,
        totalPages,
        setTotalPages,
        offerSearchResult,
        setOfferSearchResult,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error(`Context acessed outof App context provider.`);
  return context;
}
export { useAppContext, AppContextProvider };
