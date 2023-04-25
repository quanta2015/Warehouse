import React,{useEffect,useState} from 'react';import { useNavigate } from 'react-router-dom'import {Input, Table} from 'antd'import { inject,observer } from 'mobx-react'import * as urls from '@/constant/urls'import {API_SERVER} from '@/constant/apis'import s from './index.module.less';const list = [{  key:"今月工程現場",  val: '10か所'},{  key:"今月家棟中建機",  val: '88台'},{  key:"今月克上高",  val: '8880,000え'},{  key:"今年度全國工事案件數",  val: '1000,000件'},{  key:"今年度レンタル會社書",  val: '１００００'},{  key:"工程現場監視",  val: '100'}]const columns = [  {    title: '機械番號',    dataIndex: 'key',    key: 'key',  },  {    title: '機械名稱',    dataIndex: 'name',    key: 'name',  },  {    title: '機械狀況',    dataIndex: 'status',    key: 'status',  },  {    title: '部品あらー',    dataIndex: 'part',    key: 'part',  },  {    title: '操作員',    dataIndex: 'manage',    key: 'manage',  },  {    title: '現場情報',    dataIndex: 'info',    key: 'info',  },];const dataSource = [  {    key: '00000-11111',    name: '油壓',    status: '稼動中',    part: ' 正常',    manage: 'ちウィえ',    info: 'あり'  },  {    key: '00000-22222',    name: '油壓',    status: '稼動中',    part: ' 正常',    manage: 'ちウィえ',    info: 'あり'  },  {    key: '00000-33333',    name: '油壓',    status: '稼動中',    part: ' 正常',    manage: 'ちウィえ',    info: 'あり'  },];const Index = ({store}) => {  const navigate = useNavigate();  // const [bestList,setBestList] = useState([])    const doToProd=(e)=>{    navigate(`/prod?id=${e.id}&sub=${e.sub}&name=${e.name}`)  }     return (      <div className={s.index}>      <div className={s.sidebar}>        {list.map((item,i)=>          <div className={s.item} key={i} >            <span>{item.key}</span>            <span>{item.val}</span>          </div>        )}      </div>      <div className={s.wrap}>        <div className={s.map}></div>        <div className={s.main}>          <p> 建機情報</p>          <div className={s.search}>            <p>              <span>條件檢索</span>              <i>稼動中</i>              <i>待機</i>              <i>廢業</i>            </p>                        <div className={s.btn}>添加</div>            <div className={s.btn}>檢索</div>          </div>          <div className={s.form}>            <div className={s.row}>              <label>建機種類</label>              <Input></Input>              <label>建機名稱</label>              <Input></Input>            </div>            <div className={s.row}>              <label>建機番號</label>              <Input></Input>              <label>建機狀況</label>              <Input></Input>            </div>          </div>          <div className="tab">            <Table dataSource={dataSource} columns={columns}/>          </div>                  </div>      </div>                </div>  )}export default  inject('store')(observer(Index))