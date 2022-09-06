import { Navigation } from "./componentns/sidebar/Navigation";
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { About } from "./componentns/content/About";
import { Exp } from "./componentns/content/Exp";
import { Intro } from "./componentns/content/Intro";
import Projects from "./componentns/content/Projects";
import { Skills } from "./componentns/content/Skills";
import { Animated } from "react-animated-css";
import { Contact } from "./componentns/content/Contact";

export const UserContext = createContext()

function App() {
  const [activeNavItem, setNavItem] = useState(1)
  const [contact, setContact] = useState(false)



  return (
    <>
      <UserContext.Provider value={{ activeNavItem, setNavItem, contact, setContact }}>
        <div className="container">
          <div className="nav">
            <Navigation />
          </div>
          <div className="content">
            {activeNavItem == 1 ? <Intro /> :
              activeNavItem == 2 ? <About /> :
                activeNavItem == 3 ? <Skills /> :
                  activeNavItem == 5 ? <Projects />
                    : ""}
          </div>
          <div className="arrow">
            <i class="bi bi-arrow-right"></i>
          </div>
        </div>
        <Contact />
        <div className={contact ? "overlay overlay-active" : "overlay"} onClick={()=>setContact(!contact)}></div>
      </UserContext.Provider>

    </>

  );

}

export default App;
