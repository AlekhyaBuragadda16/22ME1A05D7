import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import UrlShortener from "./components/UrlShortener";
import Stats from "./components/Stats";
import Logs from "./components/Logs";
import { Container, Typography, AppBar, Toolbar, Button } from "@mui/material";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>URL Shortener</Typography>
          <Button color="inherit" component={Link} to="/shorten">Shorten</Button>
          <Button color="inherit" component={Link} to="/stats">Stats</Button>
          <Button color="inherit" component={Link} to="/logs">Logs</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          {/* Add a default route to redirect from the root path to the shorten page */}
          <Route path="/" element={<Navigate to="/shorten" />} />
          <Route path="/shorten" element={<UrlShortener />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/logs" element={<Logs />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;