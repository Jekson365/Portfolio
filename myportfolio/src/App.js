import { Navigation } from "./componentns/sidebar/Navigation";
import { createContext, useState } from "react";
import { useContext } from "react";
import { About } from "./componentns/content/About";
import { Exp } from "./componentns/content/Exp";
import { Intro } from "./componentns/content/Intro";
import Projects from "./componentns/content/Projects";
import { Skills } from "./componentns/content/Skills";

export const UserContext = createContext()

function App() {
  const [activeNavItem, setNavItem] = useState("")

   


  return (
    <>
      <UserContext.Provider value={{ activeNavItem, setNavItem }}>
        <div className="container">
          <div className="nav">
            <Navigation />
          </div>
          <div className="content">
              {activeNavItem == 1 ? <Intro/> : 
              activeNavItem == 2 ? <About/> :
              activeNavItem == 3 ? <Skills/> :
              activeNavItem == 4 ? <Exp/> :
              activeNavItem == 5 ? <Projects/>
              : ""}
          </div>
        </div>
      </UserContext.Provider>
    </>

  );

}

export default App;
