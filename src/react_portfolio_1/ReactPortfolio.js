import { Container, Grid } from "@material-ui/core";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./reactPortfolio.css";

function ReactPortfolio() {
  return (
    <div>
      <Container maxWidth="xl" className="top-20">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <div>
              <Profile />
            </div>
          </Grid>

          <Grid item xs>
            <Router>
              <Header />

              <div className="main_content main_border container_shadow ">
                <Switch>
                  <Route path="/portfolio">
                    <Portfolio />
                  </Route>
                  <Route path="/">
                    <Resume />
                  </Route>
                </Switch>
              </div>

              <Footer />
            </Router>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ReactPortfolio;
