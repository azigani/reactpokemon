import React,{FunctionComponent, useEffect, useState} from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';
import PokemonList from './pages/pokemon-list';
import { Link,BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';
  /**FC signifie Function component */
const App: FunctionComponent = () => {
 //const name: String = 'Software ';
 //const [pokemons,setName]  = useState<Pokemon[]>(POKEMONS);//Seul une chaine de caractère est sauvégardé ici
 /*const [pokemons,setName]  = useState<Pokemon[]>([]);

 useEffect(()=>{
    setName(POKEMONS)
 },[]);
  */  
 return (
    /*<div>
  <h1>Bonjour !</h1>
  <p>Il ya {pokemons.length} pokemons dans la liste </p>
  </div>*/
 // <PokemonList/>

 <Router>
 <div>
 <nav> 
   <div className="nav-wrapper teal">
     <Link to="/" className="brand-logo center">Pokédex</Link>
   </div> 
 </nav>
 <Switch>
 <PrivateRoute exact path="/" component={PokemonList} />
   <Route  exact path="/login" component={Login} />
   <PrivateRoute exact path="/pokemons" component={PokemonList} />
   <PrivateRoute path="/pokemon/add" component={PokemonAdd} />
   <PrivateRoute path="/pokemons/edit/:id" component={PokemonEdit} />
   <PrivateRoute path="/pokemons/:id" component={PokemonsDetail} />

   <Route component={PageNotFound} />
 </Switch>
 </div>
</Router>
 )
}
  
export default App;