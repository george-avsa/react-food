import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import Categories from "./pages/Categories";
import CategoryMeals from "./pages/CategoryMeals";
import Meal from "./pages/Meal";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/react-food">
      <Header />
        <main className="content container">
            <Switch>
              <Route exact path="/" component={Categories}></Route>
              <Route path="/category/:name" component={CategoryMeals}></Route>
              <Route path="/meal/:id" component={Meal}></Route>
              <Route component={NotFoundPage}></Route>
            </Switch>
        </main>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
