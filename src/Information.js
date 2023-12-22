import InformationLayout from "./InformationLayout";

export default function Information({currentPlayer, isGameEnded, isDraw}) {
    
    let content = ''

    if (isDraw === true) {
        content = 'Ничья'
    } else if (isGameEnded && !isDraw) {
        if(currentPlayer === 'X') {
            content = `Победил: 0`
        } else {
            content = `Победил: X`
        }
    } else {
        content = `Ходит: ${currentPlayer}`
    }

    return (
        <InformationLayout content = {content}/>    
    )
}