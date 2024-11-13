// import { InputHTMLAttributes } from "react"
import s from './Input.module.css'

type InputProps = {
  type: string
  value: string
  onChange: (value: string) => void
  error: string
}

export const Input = ({ type, value, onChange, error }: InputProps) => {
  const finalClassName = error ? `${s.input} ${s.errorInput}` : s.input;
  return <input className={finalClassName} type={type} value={value} onChange={(e) => onChange(e.currentTarget.value)} />
}