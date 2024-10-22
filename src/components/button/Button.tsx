import { ButtonHTMLAttributes } from "react"
import s from './Button.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ title, onClick, disabled }: ButtonProps) => {
  return <button className={s.btn} onClick={onClick} disabled={disabled}>{title}</button>
}
