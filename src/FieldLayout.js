import styles from './styles/field.module.css';
import PropTypes from 'prop-types'

export default function FieldLayout({click, field}) {

    return (  
        <div className={styles.game}>
            {field.map((line, lineIndex) => {
                return (
                    <div className={styles.buttonsLine}>
                        {line.map((button, buttonIndex) => {
                            return (
                                <div className={styles.button} onClick={() => click(button, lineIndex, buttonIndex)}>
                                    {field[lineIndex][buttonIndex]}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div> 
    )
}

FieldLayout.propTypes = {
    click: PropTypes.func,
    field: PropTypes.array
}