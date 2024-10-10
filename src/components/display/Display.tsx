type DisplayProps = {
  count: number
  maxValue: number
}

export const Display = ({ count, maxValue }: DisplayProps) => {
  return <div className={count === maxValue ? 'display max' : 'display'}>{count}</div>
}