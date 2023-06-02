import React from 'react'
import { Outlet } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import Menu from '@/component/Menu'
import Nav from '@/component/Nav'


import s from './index.module.less';
import logo from '@/img/logo.svg'



const Layout = () => {
	 
  return (
    <>
      <Menu />
      <div className={s.main}>
        <Nav />
        <Outlet />
      </div>
    </>
  )
 
}

export default inject('store')(observer(Layout))
