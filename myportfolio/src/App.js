import { Navigation } from "./componentns/sidebar/Navigation";
import { Content } from "./componentns/content/Content";
function App() {
  return (
    <>
      <div className="container">
        <div className="nav">
          <Navigation />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    </>

  );
}

export default App;
