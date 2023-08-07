import React, { lazy, Suspense } from 'react';
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react'
import { configure } from 'mobx'
import { ConfigProvider } from 'antd'
import Loadable from '@/component/Loadable'
import zhCN from 'antd/es/locale/zh_CN'
import injects from '@/store'
import { pdfjs } from 'react-pdf';


import '@/less/var.less'
import '@/less/com.less'


configure({enforceActions: 'observed'})
pdfjs.GlobalWorkerOptions.workerSrc = `pdf.worker.js`;


const Index = lazy(() => import('./app/index'));
const Layout = lazy(() => import('./app/layout'));
const Ware = lazy(() => import('./app/ware'));
const Mqtt = lazy(() => import('./app/mqtt'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider {...injects}>
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/ware" element={<Ware />} />
              <Route path="/mqtt" element={<Mqtt />} />
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </ConfigProvider>
  </Provider>
);


