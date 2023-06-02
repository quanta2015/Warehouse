/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect,useState} from 'react';
import {Input, Table, Space} from 'antd'
import {API_SERVER} from '@/constant/apis'
import { observer,MobXProviderContext } from 'mobx-react'
import ViewPdf from './ViewPdf'
import ViewImg from './ViewImg'
import {getNameByKey} from '@/constant/data'
import s from './index.module.less';

import icon_close from '@/img/close.svg'



const tabList = [ "基本信息","属性信息","APPの互換性","ファイル"]


const Index = () => {
  const { store } = React.useContext(MobXProviderContext)
  

  const [loading,setLoading] = useState(false)
  const [show,setShow] = useState(false)
  const [ds,setDs] = useState([])
  const [key,setKey] = useState('')
  const [img,setImg] = useState(null)
  const [data,setData] = useState(null)
  const [attr,setAttr] = useState(null)
  const [app,setApp] = useState(null)
  const [asset,setAsset] = useState([])
  const [sel,setSel] = useState(0)
  const [showPdf,setShowPdf] = useState(false)
  const [showImg,setShowImg] = useState(false)
  
  const [pdfFile,setPdfFile] = useState(null)

  

  const columns = [
    // {
    //   title: '序号',
    //   dataIndex: 'key',
    //   key: 'key',
    //   align:'center',
    //   width: 80,
    // },
    {
      title: '序号',
      dataIndex: 'part_number',
      key: 'part_number',
      width: 120,
      sorter: (a, b) => a.part_number - b.part_number,
    },
    {
      title: '缩略图',
      key: 'icon',
      align:'center',
      width: 80,
      render: (_, record) => <img src={`https://${record.data.img_tiny}`} alt="" style={{height: '32px',width: '32px'}} />,
      
    },
    {
      title: '名称',
      dataIndex: 'part_desc',
      key: 'part_desc',
      sorter: (a, b) => a.part_desc - b.part_desc,
    },
    
    {
      title: '编码',
      dataIndex: 'part_id',
      key: 'part_id',
      width: 120,
      sorter: (a, b) => a.part_id - b.part_id,
      
    },
    {
      title: '原产国',
      dataIndex: 'org_country',
      key: 'org_country',
      align:'center',
      width: 120,
      sorter: (a, b) => a.org_country - b.org_country,
    },
    {
      title: '品牌',
      dataIndex: 'brand',
      key: 'brand',
      align:'center',
      width: 150,
      sorter: (a, b) => a.brand - b.brand,
    },
    {
      title: '详情',
      key: 'action',
      width: 80,
      render: (_, r) => (
        <Space size="middle">
          <a onClick={()=>doDetail(r)} >详情</a>
        </Space>
      ),
    },
  ];

  const doDetail =(e)=>{
    let {img_org,img_def,img_tiny,..._data} = e.data
    const asset = e.asset.filter(item => item.fileNameOnly.endsWith('.pdf') );
    const app = (Object.keys(e.app).length === 0 && e.app.constructor === Object)?[]:e.app
    
    setImg(img_org)
    setData({..._data})
    setAttr({...e.attr})
    setApp([...app])
    setAsset([...asset])
    setShow(true)

    console.log('asset',asset)
  }
  
  useEffect(() => {
    doSearch()
  }, []);
  
  const doSearch =(e)=>{
    // const params = { key:'02-10641-01' }
    const params = { key }

    setData([])
    setLoading(true)
    store.queryParts(params).then(r=>{
      setDs(r)
      setLoading(false)
    })
  }

  const doChgKey =(e)=>{
    setKey(e.target.value)
  }


  const doClose =()=>{
    setShow(false)
    setSel(0)
  }

  const doShowPdf=(item)=>{
    const fileName = `https://${item.fileName}`
    setPdfFile(fileName)
    setShowPdf(true)
  }

  

  

  return (
  
    <div className={s.index}>
      
      <div className={s.wrap}>
        <div className={s.main}>
          <div className={s.search}>
            <Input onChange={doChgKey}></Input>
            <div className={s.btn} onClick={doSearch}>檢索</div>
          </div>
          <div className="tab">
            <Table 
              loading={loading} 
              dataSource={ds} 
              columns={columns} 
              pagination={{position:["bottomRight"]}}
              />
          </div>
        </div>

        {show &&
        <div className={s.detail}>
          <div className={s.wrap} >
            <div className={s.hd}>
              <span>部品详情</span>
              <img src={icon_close} alt="" onClick={doClose} />
            </div>
            <div className={s.bd}>
              <img src={`https://${img}`} alt="" onClick={()=>setShowImg(true)}/>
              <div className={s.rt}>
                <div className={s.tab}>
                  {tabList.map((item,i)=><span key={i} className={sel===i?'sel':''} onClick={()=>setSel(i)}>{item}</span>)}
                  
                </div>

                {sel===0 &&
                <div className={s.content}>
                {Object.entries(data).map(([key, value]) => (
                  <div key={key} className={s.row}>
                    <strong>{getNameByKey(key)}</strong> 
                    <span>{value}</span>
                  </div>
                ))}
                </div>}

                {sel===1 &&
                <div className={s.content}>
                {Object.entries(attr).map(([key, value]) => (
                  <div key={key} className={s.row}>
                    <strong>{getNameByKey(key)}</strong> 
                    <span>{value}</span>
                  </div>
                ))}
                </div>}

                {sel===2 &&
                <div className={s.content}>
                  <div className={s.row}>
                    <em>数量</em>
                    <em>メーカー</em>
                    <em>モデル</em>
                    <em>適合ノート</em>
                  </div>
                  {app?.map((item,i) => (
                    <div key={i} className={s.row}>
                      <em>{item.percarQty}</em>
                      <em>{item.make}</em>
                      <em>{item.model}</em>
                      <em>{item.fitmentNotes}</em>
                    </div>
                  ))}
                </div>}

                {sel===3 &&
                <div className={s.pdf}>
                  
                  {asset?.map((item,i) => (
                    <div key={i} className={s.item} onClick={()=>doShowPdf(item)}>
                      <img src={`https://${item.thumbNailfileName}`} alt="" />
                      <span>{item.desc}</span>
                    </div>
                  ))}
                </div>}
              </div>
            </div>
            
          </div>
        </div>}
      </div>

      {showImg && <ViewImg img={img} setShowImg={setShowImg} />}

      {showPdf && <ViewPdf setShowPdf={setShowPdf} pdfFile={pdfFile} />}
    </div>
  )


}

export default  observer(Index)