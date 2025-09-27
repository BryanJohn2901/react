import React from 'react'
import styles from './styles.module.css'

type DefaultButtonProps = {
  icon:React.ReactNode
  color?:'green' | 'red'
} & React.ComponentProps<'button'>

const DefaultButton: React.FC<DefaultButtonProps> = ({ icon, color = 'green', ...props }) => {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props} >{icon}</button>
    </>
  )
}

export default DefaultButton
