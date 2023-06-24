/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect,useState} from 'react';
import {Input, Table, Space, Pagination, Spin, Form, Button, Row, Col} from 'antd'
import { MinusCircleOutlined, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {API_SERVER} from '@/constant/apis'
import { observer,MobXProviderContext } from 'mobx-react'
import FormMain from './FormMain'
import {json_w1,json_w2,getNameByKey} from '@/constant/data'

import s from './index.module.less';


// const filter =(data,f,cond)=> data.filter(item => cond ^  f.has(item))
const filterData =(data,type)=>{
  let condSet, ret =[]
  switch(type) {
    case 'sign':
      condSet = new Set(['json', 'auto_user', 'auto_date'])
      ret = data.filter(item => true ^  condSet.has(item.type))
      break;
    case 'json':
      condSet = new Set(['json'])
      ret = data.filter(item => false ^  condSet.has(item.type))
      break;
    case 'auto':
      ret = data.filter(item => item.type.startsWith('auto_'))
      break;
  }
  return ret 
}


const getKeyField =(e)=>{
  let list =  e.filter(item=> item.key )
  return list[0].dataIndex
}


const formItemLayout = {
  labelCol: {
    md: { span: 4 },
  },
  wrapperCol: {
    md: { span: 20 },
  },
};

const dataJson = json_w2
const define = dataJson.define
const defineSub = dataJson.sub.define

const Ware = () => {
  const { store } = React.useContext(MobXProviderContext)


  const [loading,setLoading] = useState(false)
  const [refresh,setRefresh] = useState(false)
  const [ds,setDs] = useState(false)
  const [sub,setSub] = useState([])
  const [showSub,setShowSub] = useState(false)
  const [showForm,setShowForm] = useState(false)


  const col_m = filterData(define,'sign')
  const col_j = filterData(define,'json')
  const col_a = filterData(define,'auto')


  const col_s = filterData(defineSub,'sign') 

  const col = col_m.concat({
    title: '功能',
    width: 100,
    render: (item) => (
      <Space>
        <a onClick={()=>doDetail(item)}>详情</a>
        <a onClick={()=>doDel(item)}>删除</a>
      </Space>
    ),
  })

  const doDetail =(e)=>{
    setSub(e.sub)
    setShowSub(true)
  }


  const doDel =(e)=>{
    let key = getKeyField(define)
    let params = {
      key,
      table: dataJson.table,
      val: e[key],
    }

    // console.log(params)
    setLoading(true)
    store.deleteRecord(params).then(r=>{
      setLoading(false)
      setRefresh(true)
    })
  }

  


  useEffect(() => {
    let {define,sub,...table} = dataJson
    let subTable = sub.table
    let ref = sub.ref
    let params = {
      table: dataJson.table,
      subTable: dataJson.sub.table,
      ref: dataJson.sub.ref,
    }
    setLoading(true)
    store.queryTable(params).then(r=>{
      setLoading(false)
      setDs(r)
      setRefresh(false)
    })
  }, [refresh]);

  



  return (
  
    <div className={s.index}>
      <Spin spinning={loading}>
        <div className={s.main}>
          <div className={s.fun}>
            <Button type="primary" icon={<PlusCircleOutlined/>} danger onClick={()=>setShowForm(true)}>添加</Button>
          </div>
          <Table dataSource={ds} columns={col} />
        </div>


        {showForm && <FormMain {...{col_m, col_j, col_a, setShowForm, setRefresh,setLoading, table:dataJson.table}} />}

        {showSub &&
        <div className={s.pop}>
          <div className={s.wrap}>
            <div className={s.del} onClick={()=>setShowSub(false)}></div>
            <Table dataSource={sub} columns={col_s} />
          </div>
        </div>}
      </Spin >
    </div>
  )

}

export default  observer(Ware)