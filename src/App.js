import SideBar from "./SideBar/SideBar";
import Dashboard from "./View/Dashboard/Dashboard";

function App() {

  return (
<div>
  <div className="face">
  <div>
    <SideBar />
    </div>
  <div>
    <Dashboard />
  </div>
  </div>
</div>
  );
}

export default App;
