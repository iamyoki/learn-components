import ReactDOM from 'react-dom'
import { useEffect, useRef } from 'react'
import { useToast } from '../contexts/toast-context'

const root = document.getElementById('root') as HTMLDivElement

const Toast = () => {
  const { message, clear } = useToast()
  const portalDOMRef = useRef(document.createElement('div'))

  useEffect(() => {
    root.appendChild(portalDOMRef.current)

    // eslint-disable-next-line no-void
    return () => void root.removeChild(portalDOMRef.current)
  }, [])

  if (!message) return null

  return ReactDOM.createPortal(
    <div
      className="Toast toast-wrapper"
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '30%',
        minHeight: 200,
        maxHeight: 300,
        display: 'grid',
        placeItems: 'center',
        animation: 'toast 3s',
        animationFillMode: 'forwards',
      }}
      onAnimationEnd={() => {
        clear()
      }}
    >
      <div
        className="toast"
        style={{
          background: 'rgba(0,0,0,.8)',
          color: 'white',
          padding: '10px 18px',
          borderRadius: 999,
          textAlign: 'center',
          fontSize: 14,
        }}
      >
        {message}
      </div>
    </div>,
    portalDOMRef.current
  )
}

export default Toast
