
import { createContext } from 'react';
import './App.css';
import { TestComponent } from './components/test.component';
import { ToDoComponent } from './components/todolist/todolist.component';
import { Counter } from './components/counter';
import {Routes, Route, Link } from 'react-router-dom';
import { ParentComponent } from './components/parent.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ShimmerComponent } from './components/shimmer.component';




export const MainContext = createContext('');

const defaultItems = [
  "Preheat the oven to 350 degrees.",
  "Spread the olive oil around a glass baking dish.",
  "Add the yellow squash and place in the oven for 30 mins.",
  "Add the salmon, garlic, and pine nuts to the dish.",
  "Bake for 15 minutes.",
  "Remove from oven. Add the lettuce and serve.",
  "Cook the fish on the grill until hot.",
  "Place the fish on the 3 tortillas.",
  "Top them with lettuce, tomatoes, and cheese.",
  "some random text"
]



function App() {

  return (
    <div className="Appc">


    <Link to="todo">Todo</Link>
    <Link to="parent">Parent</Link>
    <Link to="counter">CounterRedux</Link>
    <Link to="pagination">Pagintaion</Link>
    <Link to="test">Test</Link>
    <Link to="shimmer">Shimmer</Link>
    
    


<Routes>
  
<Route path="/" element={<TestComponent/>}/>
      <Route path="/todo" element={<ToDoComponent/>}/>
      <Route path="/parent" element={<ParentComponent/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/pagination" element={<PaginationComponent data={defaultItems}/>}/>
      <Route path="/test" element={<TestComponent/>}/>
      <Route path="/shimmer" element={<ShimmerComponent/>}/>


    </Routes>




    </div>




    

  );
}

export default App;
