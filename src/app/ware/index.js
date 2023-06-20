/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect,useState} from 'react';
import {Input, Table, Space, Pagination} from 'antd'
import {API_SERVER} from '@/constant/apis'
import { observer,MobXProviderContext } from 'mobx-react'
import ViewPdf from './ViewPdf'
import ViewImg from './ViewImg'
import {getNameByKey} from '@/constant/data'
// import {CATE_DATA} from '@/constant/cate'


import s from './index.module.less';

import icon_close from '@/img/close.svg'

const tabList = [ "基本信息","属性信息","APPの互換性","ファイル"]


const Ware = () => {
  const { store } = React.useContext(MobXProviderContext)
  
  
  useEffect(() => {
    // doSearch()
  }, []);


  return (
  
    <div className={s.index}>
      
      are
    </div>
  )

}

export default  observer(Ware)