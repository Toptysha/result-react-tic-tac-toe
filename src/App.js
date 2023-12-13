import { useState } from 'react';
import styles from './index.module.css';

function App() {
  const [operand1, setOperand1] = useState('0')
  const [operand2, setOperand2] = useState('')
  const [operator, setOperator] = useState('')

  const allButtons = [ 
    ['7', '8', '9'], 
    ['4', '5', '6'], 
    ['1', '2', '3'], 
    ['clear', '0', '←'],
    ['+', '-', '=']
  ]

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  const calcButtons = allButtons.map(e => {
    return (
      <div className={styles.allCalcButtons}>
        <div className={styles.calcButtons}>
          {e.map(button => {
            return (
              <button className={styles.calcButton} key={button} onClick={e => click(e)}>{button}</button>
            )  
          })}
        </div>
      </div>
    )  
  })

  const erase = () => {
    if (operand2 !== '') {
      setOperand2(pre => pre.slice(0, -1))
    } else if (operator !== '') {
      setOperator(pre => pre = '')
    } else if (operand1 !== '' && operand1.length > 1) {
      setOperand1(pre => pre.slice(0, -1))
    } else if (operand1.length === 1 && operand1 !== '0') {
      setOperand1(pre => pre = '0')
    }
  }

  const count = () => {
    if (operator === '+') {
      setOperand1(`${Number(operand1) + Number(operand2)}`)
      setOperator('')
      setOperand2('')
    } else if (operator === '-') {
      setOperand1(`${Number(operand1) - Number(operand2)}`)
      setOperator('')
      setOperand2('')
    }  
  }

  function click(e) {
    if (numbers.includes(e.target.textContent)) {
        if (operator !== ''&& operand2 !== '0') {
            setOperand2(pre => pre + e.target.textContent)
        } else if (operand2 === '0') {
          setOperand2(e.target.textContent)
        } else if (operand1 !== '0') {
          setOperand1(pre => pre + e.target.textContent)
        } else {
          setOperand1(e.target.textContent)
        }
    } else if (e.target.textContent === 'clear') {
        setOperand1('0')
        setOperator('')
        setOperand2('')
    } else if (e.target.textContent === '←') {
        erase()
    } else if (e.target.textContent === '+') {
        setOperator('+')
    } else if (e.target.textContent === '-') {
        setOperator('-')
    } else if (e.target.textContent === '=') {
        count()
    }
  }

  return (
    <div className={styles.calcDiv}>
        <div className={styles.calcRes}>
            <h1 className="result">{`${operand1} ${operator} ${operand2}`}</h1>
        </div>
        <div className="allCalcButtons">{calcButtons}</div> 
    </div>
  );
}

export default App;
