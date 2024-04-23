import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Arwes } from "arwes";

import AppLayout from "./pages/AppLayout";
import { resources } from "./settings";

// Define a basic theme object
const theme = {
  color: {
    primary: "#00FF00", // Example primary color
    // Define other theme colors here as needed
  },
  // Other theme properties can be added here
};

const App = () => {
  return (
    <Arwes animate background={resources.background.large} pattern={resources.pattern} theme={theme}>
      {(anim) => (
        <Router>
          <AppLayout show={anim.entered} />
        </Router>
      )}
    </Arwes>
  );
};

export default App;
