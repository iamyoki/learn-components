import React, { useContext, useState } from 'react'

interface ToastProps {
  message: string
  setMessage: React.Dispatch<React.SetStateAction<string>>
}

const ToastContext = React.createContext<ToastProps | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState('')

  return (
    <ToastContext.Provider value={{ message, setMessage }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)

  if (context === undefined) {
    throw new Error('useToast must be used within ToastProvider')
  }

  const { message, setMessage } = context

  function show(newMessage: string) {
    setMessage(newMessage)
  }

  function clear() {
    setMessage('')
  }

  return { message, show, clear }
}

export default {}
