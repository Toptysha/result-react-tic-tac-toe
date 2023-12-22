import { useState } from 'react';
import styles from './index.module.css';


function App() {

  const [whoMove, setWhoMove] = useState('X')

  const gameButtons = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']].map(e => {
    return (
        <div className={styles.buttonsLine}>
          {e.map(gameButton => {
            return (<div id={gameButton} className={styles.button} onClick={event => changeButton(event.target.id)}></div>)  
          })}
        </div>
    )
  })

  function changeButton(id) {
    const button = document.querySelector(`#${id}`)

    if (button.textContent === '') {
      button.textContent = whoMove

       
    }  
    checkWinner()  
  }

  function checkWinner() {
    const buttons = document.querySelectorAll(`.${styles.button}`)

    if (
      ((buttons[0].textContent === buttons[1].textContent) && (buttons[0].textContent === buttons[2].textContent) && (buttons[0].textContent !== '')) ||
      ((buttons[0].textContent === buttons[4].textContent) && (buttons[0].textContent === buttons[8].textContent) && (buttons[0].textContent !== '')) ||
      ((buttons[0].textContent === buttons[3].textContent) && (buttons[0].textContent === buttons[6].textContent) && (buttons[0].textContent !== '')) ||
      ((buttons[1].textContent === buttons[4].textContent) && (buttons[1].textContent === buttons[7].textContent) && (buttons[1].textContent !== '')) ||
      ((buttons[2].textContent === buttons[5].textContent) && (buttons[2].textContent === buttons[8].textContent) && (buttons[2].textContent !== '')) ||
      ((buttons[2].textContent === buttons[4].textContent) && (buttons[2].textContent === buttons[6].textContent) && (buttons[2].textContent !== '')) ||
      ((buttons[3].textContent === buttons[4].textContent) && (buttons[3].textContent === buttons[5].textContent) && (buttons[3].textContent !== '')) ||
      ((buttons[6].textContent === buttons[7].textContent) && (buttons[6].textContent === buttons[8].textContent) && (buttons[6].textContent !== ''))  
    ) {
      winnerBlock()
    } else {
      if (whoMove === 'X') {
        setWhoMove('O')
      } else {
        setWhoMove('X')
      }
    }  
  }

  function winnerBlock() {
    const buttons = document.querySelectorAll(`.${styles.button}`)
    const winnerContainer = document.querySelector(`.${styles.winnerBlock}`)
    winnerContainer.style.visibility = 'visible'

    const winnerNotification = document.createElement('div')
    winnerNotification.style.margin = `auto`
    winnerNotification.style.marginTop = `500px`
    winnerNotification.style.width = '400px'
    winnerNotification.style.height ='200px'
    winnerNotification.style.backgroundColor = 'rgba(178, 72, 182, 0.3)'
    winnerNotification.style.border = '1px solid black'
    winnerNotification.style.borderRadius = '7px'
    winnerNotification.style.textAlign = 'center'
    winnerContainer.append(winnerNotification)

    const winner = document.createElement('h1')
    winner.textContent = `В этой игре победил: ${whoMove}`
    winnerNotification.append(winner)

    const newGameButton = document.createElement('button')
    newGameButton.className = styles.newGameButton
    newGameButton.textContent = 'Начать новую игру'
    newGameButton.addEventListener('click', () => {
      winnerContainer.style.visibility = 'hidden'
      buttons.forEach(e => e.textContent = '')
      winnerNotification.remove()
    })
    winnerNotification.append(newGameButton)
    
  }

  return (
    <>
      <div className={styles.winnerBlock}></div>
      <div className={styles.container}>  
        <h3 className="gameName">Tic-Tac-Toe</h3>
        <h1 className="whoMove">Ходит: {whoMove}</h1>
        <div className={styles.game}>{gameButtons}</div> 
      </div>
      
    </>
    
  );
}

export default App;
