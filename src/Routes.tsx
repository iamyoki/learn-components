import { RouteComponentProps, Router } from '@reach/router'
import { ReactNode } from 'react'
import HomePage from './pages/HomePage'
import PaginationPage from './pages/PaginationPage'

interface Page {
  path: string
  component: (props: RouteComponentProps) => any
  title?: string
}

export const pages: Page[] = [
  {
    path: '/',
    component: HomePage,
    title: 'Home Page',
  },
  {
    path: '/pagination',
    component: PaginationPage,
    title: 'Pagination Page',
  },
]

const Routes = () => {
  return (
    <Router>
      {pages.map((page) => (
        <page.component key={page.path} {...page} />
      ))}
    </Router>
  )
}

export default Routes
