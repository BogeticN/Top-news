import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Categories from './components/Categories';
import TopNews from './components/TopNews';
import Article from './components/Article';
import Nav from './components/Nav';
import Search from './components/Search';
import AllNewsFromCategory from './components/AllNewsFromCategory';
import './style.css'


const App = () => {

    const [country, setCountry] = useState('us')
    const [theme, setTheme] = useState('')

    return (
        <div className={`app${theme}`} >
            <Router>
                <Nav setCountry={setCountry} theme={theme} setTheme={setTheme} />
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
                    <Route path="/allnewsfromcategory" country={country} component={AllNewsFromCategory} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;
