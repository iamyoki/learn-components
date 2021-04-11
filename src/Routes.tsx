import { globalHistory, RouteComponentProps, Router } from '@reach/router'
import { ReactNode } from 'react'
import { QueryParamProvider } from 'use-query-params'
import ButtonPage from './pages/ButtonPage'
import HomePage from './pages/HomePage'
import PaginationPage from './pages/PaginationPage'
import SwitchPage from './pages/SwitchPage'
import ToastPage from './pages/ToastPage'

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
  {
    path: '/swith',
    component: SwitchPage,
    title: 'Switch Page',
  },
  {
    path: '/toast',
    component: ToastPage,
    title: 'Toast Page',
  },
  {
    path: '/button',
    component: ButtonPage,
    title: 'Button Page',
  },
]

const Routes = () => {
  return (
    <Router>
      <QueryParamProvider {...{ path: '/' }} reachHistory={globalHistory}>
        {pages.map((page) => (
          <page.component key={page.path} {...page} />
        ))}
      </QueryParamProvider>
    </Router>
  )
}

export default Routes
