import React from 'react'
import styles from './styles.module.css'

type DefaultInputProps = {
  id: string
  labelText: string
} & React.ComponentProps<'input'>

const DefaultInput: React.FC<DefaultInputProps> = ({ id, type, labelText, ...rest }) => {
  return (
    <>
      <label htmlFor={id} className="defaultLabel">
        {labelText}
      </label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  )
}

export default DefaultInput
