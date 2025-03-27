import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <main className="App">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
