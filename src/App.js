import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Categories from './components/Categories';
import TopNews from './components/TopNews';
import Article from './components/Article';
import Nav from './components/Nav';
import Search from './components/Search';
import AllNewsFromCategory from './components/AllNewsFromCategory';


const App = () => {

    const [country, setCountry] = useState('us')

    return (
        <>
            <Router>
                <Nav setCountry={setCountry} />
                <Switch>
                    <Route exact path="/">
                        <TopNews country={country} />
                    </Route>
                    <Route path="/categories">
                        <Categories country={country} />
                    </Route>
                    <Route path="/search">
                        <Search country={country} />
                    </Route>
                    <Route path="/article" component={Article} />
                    <Route path="/allnewsfromcategory" component={AllNewsFromCategory} />

                </Switch>
            </Router>
        </>
    )
}

export default App;
