import { useEffect, useState } from "react";
import GameLayout from "./GameLayout";


export default function Game() {
    const [currentPlayer, setCurrentPlayer] = useState('X')
    const [isGameEnded, setIsGameEnded] = useState(false)
    const [isDraw, setIsDraw] = useState(false)
    const [field, setField] = useState([['', '', ''],['', '', ''],['', '', '']])

    useEffect(() => {
      const WIN_PATTERNS = [
        field[0][0] === field[0][1] && field[0][0] === field[0][2] && field[0][0] !== '',
        field[1][0] === field[1][1] && field[1][0] === field[1][2] && field[1][0] !== '',
        field[2][0] === field[2][1] && field[2][0] === field[2][2] && field[2][0] !== '', 
        field[0][0] === field[1][0] && field[0][0] === field[2][0] && field[0][0] !== '', 
        field[0][1] === field[1][1] && field[0][1] === field[2][1] && field[0][1] !== '', 
        field[0][2] === field[1][2] && field[0][2] === field[2][2] && field[0][2] !== '', 
        field[0][0] === field[1][1] && field[0][0] === field[2][2] && field[0][0] !== '', 
        field[2][0] === field[1][1] && field[2][0] === field[0][2] && field[2][0] !== '', 
      ]

      if (WIN_PATTERNS.includes(true)){
        setIsGameEnded(true)
      } else if (!field[0].includes('') && !field[1].includes('') && !field[2].includes('')) {
        setIsDraw(true)
        setIsGameEnded(true)
      }
    }, [field])

    function startNewGame() {
      setCurrentPlayer('X')
      setIsGameEnded(false)
      setIsDraw(false)
      setField([['', '', ''],['', '', ''],['', '', '']])  
    }
    
    return (
      <GameLayout 
        startNewGame = {startNewGame}
        currentPlayer = {currentPlayer} 
        setCurrentPlayer = {setCurrentPlayer} 
        isGameEnded = {isGameEnded} 
        isDraw = {isDraw}
        field = {field}
        setField = {setField}
      />
    )
}