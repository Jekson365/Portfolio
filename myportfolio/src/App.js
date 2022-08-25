import { Navigation } from "./componentns/sidebar/Navigation";
import { Content } from "./componentns/content/Content";
import { createContext, useState } from "react";
import { useContext } from "react";


function App() {
  const UserContext = createContext()
  const [activeNavItem, setNavItem] = useState("")

  return (
    <>
      <UserContext.Provider value={activeNavItem}>
        <div className="container">
          <div className="nav">
            <Navigation />
          </div>
          <div className="content">
            <Content />
          </div>
        </div>
      </UserContext.Provider>
    </>

  );
}

export default App;
