import React from 'react'
import Board from '../../Component/Board/Board'
import Header from '../../Component/Header/Header'
import "./Tictactoe.css"

const Tictactoe = () => {
  return (
    <div >
      <Header />
      <h2 className='tictac_heading'>Tictactoe game</h2>
      <Board />
    </div>
  )
}

export default Tictactoe