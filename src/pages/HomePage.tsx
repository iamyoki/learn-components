import { css } from '@emotion/react'
import { Link, RouteComponentProps } from '@reach/router'
import Layout from '../components/Layout'
import { pages } from '../Routes'

const HomePage = (props: RouteComponentProps) => {
  return (
    <Layout>
      {pages.map((page) => (
        <Link
          key={page.path}
          to={page.path}
          css={css`
            color: currentColor;
            margin: 12px;
            font-size: 18px;
            font-weight: bold;
          `}
        >
          {page.title}
        </Link>
      ))}
    </Layout>
  )
}

export default HomePage
