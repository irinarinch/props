import Star from './Star'
import nextId from 'react-id-generator'
import styles from './Stars.module.css'

interface StarsProps {
  count?: number
}

const Stars = ({count = 0}: StarsProps) => {  
  if (count > 5 || count < 1 || typeof count !== 'number') return

  const stars = []
 
  for (let i = 1; i <= count; i += 1) {
    stars.push(<Star key={nextId()}/>)
  }

  return (
    <ul className={styles['card-body-stars']}>{stars}</ul>
  )
}

export default Stars