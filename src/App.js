import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./views/global/Topbar";
import Sidebar from "./views/global/Sidebar";
import { Routes, Route } from "react-router-dom";
import MovieManage from "./views/moviemanage/MovieManage";
import { useState } from "react";
function App() {
  const [theme, colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path ="/moviemanage" element={<MovieManage/>}/>
              {/* <Route path ="" element=""/>
              <Route path ="" element=""/>
              <Route path ="" element=""/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
