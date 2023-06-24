import React,{useEffect,useState} from 'react';
import { observer } from 'mobx-react'
import s from './index.module.less';


const ViewImg = ({setShowImg,img}) => {
  const [scale, setScale] = useState(1);

  const handleWheel = (e) => {
    e.preventDefault();
    setScale(prevScale => prevScale + (e.deltaY < 0 ? 0.1 : -0.1));
    setScale(prevScale => Math.max(prevScale, 1));
  }

  

  return (
    <div className={s.imgView} onClick={()=>setShowImg(false)} onWheel={handleWheel}>
      <img src={`https://${img}`} alt="" style={{ transform: `scale(${scale})` }}  />
    </div>

  )
}



export default  observer(ViewImg)