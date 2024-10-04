import "./App.css";

import CssBaseline from "@mui/material/CssBaseline";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import Container from "@mui/material/Container";
import Hero from "./components/hero/hero";

import Footer from "./components/footer/Footer";
import ScrollTop from "./components/scrool/ScrolleBarToTop";
import { ModeProvider } from "./contexts/ModeContext";

function App() {
  return (
    <div className="App">
      <ModeProvider>
        <CssBaseline />
        <Header1 />
        <Container>
          <Header2 />
          <Header3 />
          <ScrollTop />
        </Container>

        <Hero sx={{ py: "10px" }} />

        <Footer />
      </ModeProvider>
    </div>
  );
}

export default App;
