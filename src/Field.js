import FieldLayout from './FieldLayout';
import PropTypes from 'prop-types'


export default function Field({currentPlayer, setCurrentPlayer, isGameEnded, isDraw, field, setField}) {

    function click(button, lineIndex, buttonIndex){
        if (!(isDraw || isGameEnded) && button === '') {
            setField(pre => pre.map((initLine, initLineIndex) => {
                return initLine.map((initButton, initButtonIndex) => {
                    if ((lineIndex === initLineIndex) && (buttonIndex === initButtonIndex)){
                        return currentPlayer
                    } else {
                        return initButton
                    }    
                })
            }))
            if (currentPlayer === 'X') {
                setCurrentPlayer('0')
            } else {
                setCurrentPlayer('X')
            }
        }
    }

    return (
        <FieldLayout  click = {click} field = {field}/>    
    )
}

Field.propTypes = {
    currentPlayer: PropTypes.string,
    setCurrentPlayer: PropTypes.func,
    isGameEnded: PropTypes.bool,
    isDraw: PropTypes.bool,
    field: PropTypes.array,
    setField: PropTypes.func,
}