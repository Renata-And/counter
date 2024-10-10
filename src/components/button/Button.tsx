import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ title, onClick, disabled }: ButtonProps) => {
  return <button onClick={onClick} disabled={disabled}>{title}</button>
}
