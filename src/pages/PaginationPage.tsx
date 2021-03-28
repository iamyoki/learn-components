import { RouteComponentProps, navigate } from '@reach/router'
import { useState } from 'react'
import { NumberParam, useQueryParam } from 'use-query-params'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'

const intialPage = 1
const PaginationPage = () => {
  // const [page, setPage] = useState(intialPage)
  const [curPage, setCurPage] = useQueryParam('page', NumberParam)

  return (
    <Layout>
      <h1>当前是第{curPage}页</h1>
      <Pagination curPage={curPage} onChange={(index) => setCurPage(index)} />
    </Layout>
  )
}

export default PaginationPage
