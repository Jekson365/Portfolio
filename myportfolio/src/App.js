import { Navigation } from "./componentns/sidebar/Navigation";
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { About } from "./componentns/content/About";
import { Exp } from "./componentns/content/Exp";
import { Intro } from "./componentns/content/Intro";
import Projects from "./componentns/content/Projects";
import { Skills } from "./componentns/content/Skills";
import { Animated } from "react-animated-css";

export const UserContext = createContext()

function App() {
  const [activeNavItem, setNavItem] = useState(1)
 



  return (
    <>
      <UserContext.Provider value={{ activeNavItem, setNavItem }}>
        <div className="container">
          <div className="nav">
            <Navigation />
          </div>
          <div className="content">
            {activeNavItem == 1 ? <Intro /> :
              activeNavItem == 2 ? <About /> :
                activeNavItem == 3 ? <Skills /> :
                  activeNavItem == 4 ? <Exp /> :
                    activeNavItem == 5 ? <Projects />
                      : ""}
          </div>
          <div className="arrow">
            <i class="bi bi-arrow-right"></i>
          </div>
        </div>
      </UserContext.Provider>
    </>

  );

}

export default App;
