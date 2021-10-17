import {Container, Grid} from '@material-ui/core'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Portfolio from './pages/portfolio/Portfolio'
import Resume from './pages/resume/Resume'

import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
   
function ReactPortfolio() {
  return (

    <div>

        <Container className = 'top-60'>

            <Grid container spacing={7}>

                <Grid item xs={12} sm={12} md={4} lg={3}>
                    <Profile/>
                </Grid>

                <Grid item xs className='test'>
                    <Header/>
                    <Router>
                        <Switch>
                            <Route path = '/portfolio'>
                                <Portfolio/>
                            </Route>
                            <Route path = '/'>
                                <Resume/>
                            </Route>
                        </Switch>
                    </Router>
                    <Footer/>
                </Grid>
            </Grid>
        </Container>

    </div>
  );
}

export default ReactPortfolio;