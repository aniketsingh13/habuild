import React from 'react'
import {Routes,Route} from "react-router-dom";
import Tictactoe from '../Pages/Tictactoe/Tictactoe';
import Todo from '../Pages/Todo/Todo';


const RoutePath = () => {


  return (
    <div>
     <Routes>
   <Route path='/' element={<Todo />} />
    <Route path='/tictactoe' element={<Tictactoe />} />
     </Routes>
    </div>
  )
}

export default RoutePath