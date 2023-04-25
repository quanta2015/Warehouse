import React,{useState,useEffect} from 'react';import { inject,observer,MobXProviderContext } from 'mobx-react'import { searchParams,useLocation,useNavigate } from "react-router-dom"import { Form, Input, Button, message,Select,InputNumber } from 'antd'import classnames from 'classnames';import {API_SERVER} from '@/constant/apis'import { MENU_LIST } from '@/constant/data'// import { PROD_LIST } from '@/constant/prod'import { isN,getFilter,toOpt,formatProdList } from '@/util/fn'import Slide     from '@/component/Slide'import TitleLine from '@/component/TitleLine'import ToTop     from '@/component/ToTop'import close from '@/img/close.svg'import right from '@/img/right.svg'import s from './index.module.less';const Prod = () => {  const { store } = React.useContext(MobXProviderContext)  const navigate = useNavigate();    // 全部产品集合  const [db,setDb] = useState([])  // 过滤器用来选择产品集合  const [filter,setFilter] = useState({})  // 过滤后产品集合  const [prodList,setProdList] = useState([])  // 当前选中详情的产品 id  const [sel,setSel] = useState(0)  // 当前选中的产品图片 id  const [selIcon,setSelIcon] = useState(0)  // 是否显示详情  // const [show,setShow] = useState(false)  // 当前选择产品对象  const [prod,setProd] = useState(null)  // 轮播图产品列表  const [slideList,setSlideList] = useState([])  // form 表单数据  const [form,setForm] = useState({id: null, clr:'',size:'',num:1})  // 菜单列表  const menuList = MENU_LIST[0].submenu.slice(1)  const location = useLocation();  useEffect(() => {    store.show = false    window.scrollTo({ top: 0 });    let f = getFilter(location.search)        // 如果是查询条件    if (f.search) {      let params = {name: f.search}      store.searchByName(params).then(r=>{        formatProdList(r)        setDb(r)        setProdList(r)        setFilter(f)      })    }else{ //获取全部产品      store.prodList().then(r=>{        formatProdList(r)        setDb(r)        procData(f,r)      })    }  }, [location.search]);  const procData =(f,data)=>{    let list = (f.val==='all')?data:data.filter(o=>o[f.key] === f.val)    if ((f.key==='sub')&&(f.val!=='all')) {      let tmp = list.sort(() => Math.random() - Math.random()).slice(0, 3)      let side = []      tmp.map((item,i)=>{        let { name, desc, imgList, id} = item        let img  = imgList[0]        let spec = desc.split('。')[0]        side.push({name,spec,img,id, btn: '商品を見る',f})       })      setSlideList(side)      // 显示产品详情      if (f.id) {        console.log(f.id)        let item = list.filter(o=>o.id === f.id)[0]        setProd(item)        console.log(item)        store.setShow(true)      }else{        store.setShow(false)      }    }    setFilter(f)    setProdList(list)  }  const doSelSubMenu=(item,type)=>{    store.setShow(false)    navigate(`/prod?${type}=${item.url}&name=${item.jp}`)  }    const doSelProd =(item,i)=>{    setProd(item)    setSel(i)    store.setShow(true)    window.scrollTo({ top: 0 });  }  const doClose =(item,i)=>{    store.setShow(false)    window.scrollTo({ top: 0 });    setForm({id: null, clr:'',size:'',num:1})  }  const doAddCart =(e)=>{    let {id,name,price,imgList,clrList,cltList,sizeList} = e    let {clr,size,num} = form        let item = {      id,      name,      price,      num,      img: imgList[0],      clr: clr || cltList[0],      size: size || sizeList[0],    }    let cart = localStorage.getItem('sasawashi_key')    cart = isN(cart)?[]:JSON.parse(cart)    let find  = false    let index = 0    cart.map((o,i)=> {      if ((o.id === item.id)&&(o.size === item.size)&&(o.clr === item.clr)) {        find = true        index = i      }    })        if (find) {      cart[index].num += item.num    }else{      cart.push(item)    }    localStorage.setItem('sasawashi_key',JSON.stringify(cart))    // console.log(cart)    navigate('/cart')  }  const doChgProd =(e,type)=>{    switch(type) {      case 'clr':  form.clr = e; break;      case 'size': form.size = e; break;      case 'num':  form.num = e; break;    }    setForm({...form})  }  const RenderClose =()=>(    <div className={s.close} onClick={doClose}>      <img src={close} />    </div>  )  return (    <section>      <div className={s.prod}>        <div className={s.prodWrap}>          <div className={s.sideBar}>          {menuList.map((item,i)=>            <div key={i} className={s.menu}>              <div className={s.menuTitle} onClick={()=>doSelSubMenu(item,'sub')}>                <img src={item.icon} />                <span>{item.jp}</span>              </div>              <div className={s.menuList}>                {item.list.map((o,j)=>                  <span key={j}                     className={s.menuItem}                     onClick={()=>doSelSubMenu(o,'type')}                    >                    {o.jp}                  </span>                  )}              </div>            </div>          )}          </div>          {/*产品列表*/}          {!store.show &&          <div className={s.prodMain}>            <TitleLine title={filter.search?`${filter?.name}:${prodList.length}件`:filter?.name} type='bottom'/>            {(filter.key === 'sub') && (filter.val !== 'all') && <Slide  list={slideList} />}            <div className={s.prodList}>              {prodList.map((item,i)=>                <div key={i} className={s.prodItem} onClick={()=>doSelProd(item,i)}>                  <img src={item.imgList[0]} />                  <p>                    <span>{item.name}</span>                    <span>{item.price}</span>                  </p>                </div>              )}            </div>          </div>}          {store.show &&          <div className={s.prodDetail}>            {RenderClose()}            <div className={s.itemInfo}>              <div className={s.left}>                <img src={prod?.imgList[selIcon]} />                <div className={s.iconList}>                  {prod?.imgList.map((item,i)=>                    <img src={item} key={i}                       className={selIcon===i?'sel':''}                       onClick={()=>setSelIcon(i)}                      />                    )}                </div>              </div>              <div className={s.right}>                <div className={s.simp}>                  <span className={s.type}>{prod?.type}</span>                  <h1>{prod?.name}</h1>                  <span className={s.price}>{prod?.price}</span>                </div>                <span className={s.desc}>{prod?.desc}</span>                <label>カラー</label>                <div className={s.clr}>                  {prod?.clrList.map((item,i)=>                    <div className={s.clrItem} key={i}>                      <img src={item} />                      <span>{prod?.cltList[i]}</span>                    </div>                  )}                </div>                <label>サイズ</label>                <div className={s.size}>                  {prod?.sizeList.map((item,i)=>                    <span key={i}>{item}</span>                  )}                </div>                <div className={s.form}>                                    {prod?.cltList.length >0 &&                   <div className={s.row}>                    <label>カラー</label>                    <Select                      defaultValue={toOpt(prod?.cltList)[0]}                      style ={{width: '100%'}}                      size = {'large'}                      options={toOpt(prod?.cltList)}                      onChange={(e)=>doChgProd(e,'clr')}                    />                  </div>}                  {prod?.sizeList.length >0 &&                   <div className={s.row}>                    <label>サイズ</label>                    <Select                      defaultValue={toOpt(prod?.sizeList)[0]}                      style ={{width: '100%'}}                      size = {'large'}                      options={toOpt(prod?.sizeList)}                      onChange={(e)=>doChgProd(e,'size')}                    />                  </div>}                                    <div className={s.row}>                    <label>数量</label>                    <InputNumber                        style ={{width: '100%'}}                      defaultValue={1}                        size = {'large'}                      min = {1}                      onChange={(e)=>doChgProd(e,'num')}                      />                  </div>                  <div className={s.fun}>                    <span className={s.btnCart} onClick={()=>doAddCart(prod)}>カートにいれる</span>                    <span className={s.btnLog}>♥ お気に入りに登録する</span>                    <span className={s.btnLog} onClick={doClose}>リターンマッチ</span>                  </div>                </div>              </div>            </div>            <div className={s.itemDetail}>              {prod?.intr.map((item,i)=>                <div className={s.wrap} key={i}>                  <TitleLine title={item.key} type='all'/>                  { typeof(item.val)==='string' &&                     <div className={s.par}>{item.val}</div>                  }                  { typeof(item.val)!=='string' && item.key !== 'その他' &&                    <div className={s.list}>                      {item.val.map((o,j)=>                        <React.Fragment key={j}>                          <label>{o.t}</label>                          <span>{o.p}</span>                        </React.Fragment >                        )}                    </div>                  }                  { item.key === 'その他' &&                    <div className={s.tab}>                      {item.val.map((o,j)=>                        <div key={j} className={s.row}>                          <label>{o.key}</label>                          <span>{o.val}</span>                        </div >                        )}                    </div>                  }                </div>              )}            </div>          </div>}        </div>        <ToTop />      </div>    </section>  )}export default  inject('store')(observer(Prod))