import { CSSProperties } from 'react'

interface ButtonProps {
  type?: 'primary' | 'danger'
  size?: 'sm' | 'md'
  children: React.ReactNode
}

const Button = ({ type = 'primary', size = 'md', children }: ButtonProps) => {
  let typeStyle: CSSProperties
  switch (type) {
    case 'primary':
      typeStyle = {
        background: 'royalblue',
        color: 'white',
      }
      break
    case 'danger':
      typeStyle = {
        background: 'orangered',
        color: 'white',
      }
      break
    default:
      return null
  }

  return (
    <div
      className="Button"
      style={{
        background: 'royalblue',
        padding: 12,
        minWidth: 40,
        textAlign: 'center',
        color: 'white',
        borderRadius: 4,
        cursor: 'pointer',
        ...typeStyle,
      }}
    >
      {children}
    </div>
  )
}

export default Button
