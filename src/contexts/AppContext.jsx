import { createContext, useContext, useState } from "react";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
function AppContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAuthed, setIsAuthed] = useState(true);
  const [acessToken, setAccessToken] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResult, setSearchResult] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [admin, setAdmin] = useState({
    name: "Ahadu Sefefe",
    email: "ahadu_sefefe@gmail.com",
  });
  const recordPerPage = 7;
  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode: setIsDarkMode,
        isAuthed,
        setIsAuthed,
        currentPage,
        setCurrentPage,
        acessToken,
        setAccessToken,
        recordPerPage,
        searchResult,
        setSearchResult,
        showModal,
        setShowModal,
        admin,
        setAdmin,
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
