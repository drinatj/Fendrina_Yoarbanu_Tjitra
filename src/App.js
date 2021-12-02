import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Catalogs from './Category/Catalogs';
import Catalog from './Category/Catalog';
import CatalogTech from './Category/CatalogTech';
import ViewBag from './Components/ViewBag';
import Header from './Components/Header';
import ListCurrencies from './Components/ListCurrencies';
import SmallViewBag from './Components/SmallViewBag';
import brandIcon from './Assets/brandIcon.png';
import {useState} from 'react';
import CatalogApple from './Category/CatalogApple';
import CatalogImac from './Category/CatalogImac';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if (exist){
        setCartItems(
            cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
        );
        } else{
        setCartItems([...cartItems, { ...product, qty: 1}]);
        }
    }
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
          setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
          setCartItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
    };
    return(
        <Router>
            <div className="navBar">
                <Header/>
                <img src={brandIcon} alt="icon"/>
                <div className="dollarChart">
                <ListCurrencies/>
                <SmallViewBag countCartItems={cartItems.length} onAdd={onAdd} cartItems={cartItems} onRemove={onRemove}/>
                </div>
            </div>
            <Switch>
                <Route path="/viewBag">
                    <ViewBag countCartItems={cartItems.length} onAdd={onAdd} cartItems={cartItems} onRemove={onRemove}/>
                </Route>
                <Route path="/catalog/:id">
                    <Catalog  onAdd={onAdd} />
                </Route>
                <Route path="/catalogTech/:id">
                    <CatalogTech  onAdd={onAdd} />
                </Route>
                <Route path="/catalogApple/:id">
                    <CatalogApple  onAdd={onAdd} />
                </Route>
                <Route path="/catalogImac/:id">
                    <CatalogImac  onAdd={onAdd} />
                </Route>
                <Route path="/">
                    <Catalogs/>
                </Route>
                
               
            </Switch>
        </Router>
        
    )
}

export default App;