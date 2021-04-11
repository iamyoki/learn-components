import React from 'react'
import Toast from './components/Toast'
import { ToastProvider } from './contexts/toast-context'
import Routes from './Routes'

const App = () => {
  return (
    <ToastProvider>
      <Routes />
      <Toast />
    </ToastProvider>
  )
}

export default App
