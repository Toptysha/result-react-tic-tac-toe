import PropTypes from 'prop-types'
import Field from "./Field";
import Information from "./Information";
import styles from './styles/game.module.css';

export default function GameLayout({startNewGame, currentPlayer, setCurrentPlayer, isGameEnded, isDraw, field, setField}) {
    return (
        <div className={styles.container}> 
            <Information 
                currentPlayer = {currentPlayer} 
                isGameEnded = {isGameEnded} 
                isDraw = {isDraw}
            />
            <Field
                currentPlayer = {currentPlayer} 
                setCurrentPlayer = {setCurrentPlayer} 
                isGameEnded = {isGameEnded}
                isDraw = {isDraw}
                field = {field}
                setField = {setField}
            />
            <button className={styles.newGameButton} onClick={() => startNewGame()}>Начать новую игру</button>
        </div>  
    )
}

Field.propTypes = {
    startNewGame: PropTypes.func,
    currentPlayer: PropTypes.string,
    setCurrentPlayer: PropTypes.func,
    isGameEnded: PropTypes.bool,
    isDraw: PropTypes.bool,
    field: PropTypes.array,
    setField: PropTypes.func,
}