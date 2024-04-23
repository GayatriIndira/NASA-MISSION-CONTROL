import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Arwes, SoundsProvider, createSounds, createTheme } from "arwes";

import AppLayout from "./pages/AppLayout";
import { resources, sounds } from "./settings";

const theme = createTheme(); // Assuming you're creating a theme object

const App = () => {
  return (
    <Arwes animate background={resources.background.large} pattern={resources.pattern}>
      {(anim) => (
        <Router>
          <AppLayout show={anim.entered} />
        </Router>
      )}
    </Arwes>
  );
};

export default App;
