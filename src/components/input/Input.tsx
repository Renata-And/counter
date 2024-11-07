// import { InputHTMLAttributes } from "react"
import s from './Input.module.css'

type InputProps = {
  type: string
  value: string
  onChange: (value: string) => void
  className: string
}

export const Input = ({ type, value, onChange, className }: InputProps) => {
  return <input className={className ? `${s.input} ${s.errorInput}` : s.input} type={type} value={value} onChange={(e) => onChange(e.currentTarget.value)} />
}