import { RouteComponentProps } from '@reach/router'
import Button from '../components/Button'
import Layout from '../components/Layout'

const ButtonPage = (props: RouteComponentProps) => {
  return (
    <Layout>
      <Button type="danger">asd</Button>
    </Layout>
  )
}

export default ButtonPage
