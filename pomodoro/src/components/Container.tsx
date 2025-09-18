import React from 'react'
import styles from './Container.module.css'

type ContainerProps = {
    children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <>
        <div className="container">
          <div className="content">
            {children}
          </div>
        </div>
    </>
  )
}

export default Container