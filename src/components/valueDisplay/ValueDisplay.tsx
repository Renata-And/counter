import React from "react"
import s from './ValueDisplay.module.css'

type ValueDisplayProps = {
  children?: React.ReactNode
}

export const ValueDisplay = ({ children }: ValueDisplayProps) => {
  return <div className={s.display}>
    {children}
  </div >
}