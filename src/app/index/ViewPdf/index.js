import React,{useEffect,useState,useRef} from 'react';
import { Document, Page } from 'react-pdf';
import { inject,observer,MobXProviderContext } from 'mobx-react'

import s from './index.module.less';


const ViewPdf = ({setShowPdf,pdfFile}) => {
  const { store } = React.useContext(MobXProviderContext)

  const ref = useRef(null);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const _init_scale = store.mobile?1:1

  const [dragging, setDragging] = useState(false);
  const [scale, setScale] = useState(_init_scale);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onLoadSucc=({ numPages })=> {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const changePage=(offset,e)=> {
    e.stopPropagation()
    setPosition({ x: 0,y: 0 });
    setScale(_init_scale);
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  const changeScale=(offset,e)=> {
    e.stopPropagation()
    setScale(scale+offset);
    setPosition({ x: 0,y: 0 });
  }

  const scaleDoc = () => {
    setScale(scale === _init_scale ? 2 : _init_scale)
  };


  const handleTouchMove = (event) => {
    const deltaX = event.touches[0].clientX - lastPositionRef.current.x;
    const deltaY = event.touches[0].clientY - lastPositionRef.current.y;

    // Update the position
    setPosition(prevPosition => ({
        x: prevPosition.x + deltaX,
        y: prevPosition.y + deltaY
    }));

    // Update the last position for the next move
    lastPositionRef.current = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
    };
  };

  
  const handleTouchStart = (event) => {
      
      lastPositionRef.current = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY
      };
  };

  const handleMouseDown = (event) => {
        setDragging(true);
        lastPositionRef.current = {
            x: event.clientX,
            y: event.clientY
        };
    };

  const handleMouseMove = (event) => {
    if (dragging && scale > 1) {
      const deltaX = event.clientX - lastPositionRef.current.x;
      const deltaY = event.clientY - lastPositionRef.current.y;

      setPosition(prevPosition => ({
        x: prevPosition.x + deltaX,
        y: prevPosition.y + deltaY
      }));

      lastPositionRef.current = {
        x: event.clientX,
        y: event.clientY
      };
    }
  };

  const handleMouseUp = () => {
      setDragging(false);
  };

  return (
    <div className={s.viewer} >
      <div className={s.doc} 
        ref={ref}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center',
          position: 'relative',
          left: position.x,
          top: position.y
        }}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        >
        <Document file ={pdfFile} onLoadSuccess={onLoadSucc} >
          <Page pageNumber={pageNumber} />
        </Document>

      </div>
      <div className={s.nav}>
            <button type="button" disabled={scale === 1} onClick={(e)=>changeScale(-1,e)} >-</button>
            <button type="button" disabled={pageNumber <= 1} onClick={(e)=>changePage(-1,e)} >‹</button>
            <p>{pageNumber || (numPages ? 1 : '--')} / {numPages || '--'}</p>
            <button type="button" disabled={pageNumber >= numPages} onClick={(e)=>changePage(1,e)} >›</button>
            <button type="button" disabled={scale === 2} onClick={(e)=>changeScale(1,e)} >+</button>
            <button type="button" onClick={()=>setShowPdf(false)} >x</button>
          </div>
    </div>

  )
}



export default  observer(ViewPdf)