/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect,useState} from 'react';
import {Input, Table, Space, Pagination, Spin} from 'antd'
import {API_SERVER} from '@/constant/apis'
import { observer,MobXProviderContext } from 'mobx-react'
import ViewPdf from './ViewPdf'
import ViewImg from './ViewImg'
import {getNameByKey} from '@/constant/data'
// import {CATE_DATA} from '@/constant/cate'


import s from './index.module.less';

import icon_close from '@/img/close.svg'

const tabList = [ "基本信息","属性信息","APPの互換性","ファイル"]


const Index = () => {
  const { store } = React.useContext(MobXProviderContext)
  
  
  const [category,setCategory] = useState()
  const [loading,setLoading] = useState(false)
  const [show,setShow] = useState(false)
  const [ds,setDs] = useState([])
  const [key,setKey] = useState('02-10641-01')
  const [img,setImg] = useState(null)
  const [data,setData] = useState(null)
  const [attr,setAttr] = useState(null)
  const [app,setApp] = useState(null)
  const [asset,setAsset] = useState([])
  const [sel,setSel] = useState(0)
  const [showPdf,setShowPdf] = useState(false)
  const [showImg,setShowImg] = useState(false)
  const [dataPage,setDataPage]= useState([])
  const [page,setPage]= useState(1)
  const [pdfFile,setPdfFile] = useState(null)

  // const onChange = (e,b) => {
  //   console.log('onChange ', e,b);
  //   setCategory(e);
  // };

  // const tProps = {
  //   treeData: CATE_DATA,
  //   value: category,
  //   onChange,
  //   treeCheckable: true,
  //   showCheckedStrategy: SHOW_PARENT,
  //   placeholder: 'Please select',
  //   style: {
  //     width: '100%',
  //   },
  // };

  // const columns = [
  //   // {
  //   //   title: '序号',
  //   //   dataIndex: 'key',
  //   //   key: 'key',
  //   //   align:'center',
  //   //   width: 80,
  //   // },
  //   {
  //     title: '序号',
  //     dataIndex: 'part_number',
  //     key: 'part_number',
  //     width: 120,
  //     sorter: (a, b) => a.part_number - b.part_number,
  //   },
  //   {
  //     title: '缩略图',
  //     key: 'icon',
  //     align:'center',
  //     width: 80,
  //     render: (_, record) => <img src={`https://${record.data.img_tiny}`} alt="" style={{height: '32px',width: '32px'}} />,
      
  //   },
  //   {
  //     title: '名称',
  //     dataIndex: 'part_desc',
  //     key: 'part_desc',
  //     sorter: (a, b) => a.part_desc - b.part_desc,
  //   },
    
  //   {
  //     title: '编码',
  //     dataIndex: 'part_id',
  //     key: 'part_id',
  //     width: 120,
  //     sorter: (a, b) => a.part_id - b.part_id,
      
  //   },
  //   {
  //     title: '原产国',
  //     dataIndex: 'org_country',
  //     key: 'org_country',
  //     align:'center',
  //     width: 120,
  //     sorter: (a, b) => a.org_country - b.org_country,
  //   },
  //   {
  //     title: '品牌',
  //     dataIndex: 'brand',
  //     key: 'brand',
  //     align:'center',
  //     width: 150,
  //     sorter: (a, b) => a.brand - b.brand,
  //   },
  //   {
  //     title: '详情',
  //     key: 'action',
  //     width: 80,
  //     render: (_, r) => (
  //       <Space size="middle">
  //         <a onClick={()=>doDetail(r)} >详情</a>
  //       </Space>
  //     ),
  //   },
  // ];

  const SIZE = 10
  const getPageList = (o,p) => o.filter((o,i)=> (i>=SIZE*(p-1))&&(i<=p*SIZE-1))


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
    console.log('attr',e.attr)
  }
  
  useEffect(() => {
    // doSearch()
  }, []);

  // 页面变化
  useEffect(() => {
    setDataPage(getPageList(ds,page))
  }, [page]);
  
  const doSearch =(e)=>{
    // const params = { key:'02-10641-01' }
    // const params = { key:'654' }
    const params = { key }

    setData([])
    setLoading(true)
    store.queryParts(params).then(r=>{
      setDs(r)
      setDataPage(getPageList(r,1))
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
      <Spin spinning={loading}>
        <div className={s.wrap}>
          <div className={s.main}>
            <div className={s.search}>
              <Input onChange={doChgKey} value={key} allowClear />
              <div className={s.btn} onClick={doSearch}>檢索</div>
            </div>

            {ds.length> 0 &&
            <div className={s.tab}>
              <div className={s.pageination}>
                 <Pagination defaultCurrent={1} pageSize={SIZE} total={ds.length} onChange={(e)=>setPage(e)} showSizeChanger={false}/>
              </div>
              {dataPage.map((item,i)=>
                <div className={s.part} key={i} onClick={()=>doDetail(item)}>
                  
                  <div className={s.lt}>
                    <img src={`https://${item.data.img_org}`} alt="" />
                  </div>
                  <div className={s.rt}>
                    <span>{item.part_number}</span>
                    <h1>{item.part_desc}</h1>
                    <p>{item.data.sales_desc}</p>
                    <div className={s.tab}>
                      <div className={s.row}>
                        <span>原产国</span>
                        <span>品牌</span>
                        <span>编码</span>
                      </div>
                      <div className={s.row}>
                        <span>{item.org_country}</span>
                        <span>{item.brand}</span>
                        <span>{item.part_id}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>}

            {ds.length=== 0 && 
            <div className={s.empty}>検索結果がありません</div>}
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
                    <React.Fragment key={key}>
                      {(value) && 
                      <div className={s.row}>
                        <strong>{getNameByKey(key)}</strong> 
                        <span>{value}</span>
                      </div>}
                    </React.Fragment >

                  ))}
                  </div>}

                  {sel===2 &&
                  <div className={s.content}>

                    { (app.length>0) &&
                    <div className={s.rowApp}>
                      <em>数量</em>
                      <em>メーカー</em>
                      <em>モデル</em>
                      <em>適合ノート</em>
                    </div>}
                    {app?.map((item,i) => (
                      <div key={i} className={s.rowApp}>
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
      </Spin>
    </div>
  )

}

export default  observer(Index)