import Layout from '../components/Layout'
import Pagination from '../components/Pagination'

const PaginationPage = () => {
  return (
    <Layout>
      <Pagination onChange={(index) => alert(index)} />
    </Layout>
  )
}

export default PaginationPage
