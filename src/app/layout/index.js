import React from 'react'
import { Outlet } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import Nav from '@/component/Nav'
// import Footer from '@/component/Footer'
// import Contact from '@/component/Contact'


import s from './index.module.less';
import logo from '@/img/logo.svg'



const Layout = () => {
  // const navigate = useNavigate()
  // const { store } = React.useContext(MobXProviderContext)


	 
  return (
    <>
      <Nav />
      
      <Outlet />
    </>
  )
 
}

export default inject('store')(observer(Layout))
