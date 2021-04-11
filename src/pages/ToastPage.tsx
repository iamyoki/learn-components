import { RouteComponentProps } from '@reach/router'
import { useState } from 'react'
import Layout from '../components/Layout'
import Toast from '../components/Toast'
import { useToast } from '../contexts/toast-context'

const ToastPage = (props: RouteComponentProps) => {
  const { show } = useToast()

  function handleClick() {
    show('')
    setTimeout(() => {
      show('hello world')
    }, 0)
  }

  return (
    <Layout>
      <button type="button" onClick={handleClick}>
        show toast
      </button>
    </Layout>
  )
}

export default ToastPage
