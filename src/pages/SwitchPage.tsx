import { RouteComponentProps } from '@reach/router'
import { useState } from 'react'
import Layout from '../components/Layout'
import Switch from '../components/Switch'

const SwitchPage = (props: RouteComponentProps) => {
  const [width, setWidth] = useState(200)
  const [toggle, setToggle] = useState(false)

  return (
    <Layout>
      <input
        type="number"
        value={width}
        onChange={(ev) => setWidth(+ev.target.value)}
      />
      <span>{toggle ? '开' : '关'}</span>
      <Switch
        value={toggle}
        onChange={(curToggle) => setToggle(curToggle)}
        width={width}
      />
    </Layout>
  )
}

export default SwitchPage
