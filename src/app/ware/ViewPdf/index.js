import React,{useEffect,useState} from 'react';
import { observer } from 'mobx-react'
import { Document, Page } from 'react-pdf';

import s from './index.module.less';


const ViewPdf = ({setShowPdf,pdfFile}) => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset,e) {
    e.stopPropagation()
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  return (
    <div className={s.viewer} onClick={()=>setShowPdf(false)}>
      <div className={s.doc}>
        <Document
          className={s.doc}
          file ={pdfFile}
          onLoadSuccess={onDocumentLoadSuccess}
          >
          <Page pageNumber={pageNumber} scale={1}/>

          <div className={s.nav}>
            <button type="button" disabled={pageNumber <= 1} onClick={(e)=>changePage(-1,e)} >‹</button>
            <p>{pageNumber || (numPages ? 1 : '--')} / {numPages || '--'}</p>
            <button type="button" disabled={pageNumber >= numPages} onClick={(e)=>changePage(1,e)} >›</button>
          </div>
        </Document>
      </div>
    </div>

  )
}



export default  observer(ViewPdf)