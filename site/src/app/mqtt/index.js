import React, { useEffect, useState } from 'react';
// import proces from 'process/browser'
import * as mqtt from 'mqtt';

import GaugeComponent from '@/lib';
import * as urls from '@/constant/urls'
import { observer,MobXProviderContext } from 'mobx-react'
import CONSTANTS from '@/lib/GaugeComponent/constants';


import s from './index.module.less'

const Mqtt = () => {
  const { store } = React.useContext(MobXProviderContext)


  useEffect(() => {


    const client = mqtt.connect(urls.MQTT_SERVER);
    
    const onConnect = () => {
      console.log('Connected to MQTT SERVER.');
      client.subscribe(urls.TOPIC);
    };

    client.on('error', (err) => {
      console.error('Error:', err);
    });


    const onMessage = (top, msg) => {
      let m = JSON.parse(msg.toString())
      store.setData(m)
      console.log(m)
    };

    client.on('connect', onConnect);
    client.on('message', onMessage);

    // 清除事件监听器
    return () => {
      client.off('connect', onConnect);
      client.off('message', onMessage);
    };
  }, []); 




  const Gaugg = (val, list, unit) => <GaugeComponent
    arc={{
      width: 0.3,
      // padding: 0.005,
      cornerRadius: 1,
      subArcs: [
        { limit: 20, color: '#EA4228', showMark: true },
        { limit: 40, color: '#F58B19', showMark: true },
        { limit: 60, color: '#F5CD19', showMark: true },
        { color: '#5BE12C' }
      ]
    }}
    labels={{
      valueLabel: { formatTextValue: value => value + `|${unit}` },
      markLabel: {
        type:'outer',
        // valueConfig: { formatTextValue: value => value + 'ºC'},
        marks: list.map(o=> ({ value: o })) 
      }
    }}
    value={val}
    minValue={list[0]}
    maxValue={list[list.length-1]}
  />

  const Gauge = (val, list, unit, type = 'inner') => <GaugeComponent
    arc={{
      width: 0.1,
      // padding: 0.005,
      cornerRadius: 1,
      subArcs: [
        { limit: list[list.length-1], color: '#CFF22F', showMark: true },
        { color: '#CFF22F' }
      ]
    }}
    labels={{
      valueLabel: { formatTextValue: value => value + `|${unit}` },
      markLabel: {
        type,
        // valueConfig: { formatTextValue: value => value + 'ºC'},
        marks: list.map(o=> ({ value: o })) 
      }
    }}
    value={val}
    minValue={list[0]}
    maxValue={list[list.length-1]}
  />

  const GaugeEle = (val) => <GaugeComponent
    type="semicircle"
      arc={{
        width: 0.2,
        padding: 0.005,
        cornerRadius: 1,
        subArcs: [
          { limit: 20, color: '#EA4228' },
          { limit: 50, color: '#F5CD19' },
          { limit: 100, color: '#5BE12C' },
        ]
      }}
      labels={{
        valueLabel: { formatTextValue: value => value + '%' },
        markLabel: {
          type:'outer',
          marks: [20,50,100].map(o=> ({ value: o })) 
        }
      }}
      pointer={{ type: "arrow", color: '#ccc' }}
      value={val}
      minValue={0}
      maxValue={100}
    />

  const GaugeTmp = (val)  => <GaugeComponent
    type="semicircle"
    arc={{
      colorArray: ['#00FF15', '#FF2121'],
      padding: 0.02,
      subArcs:
        [
          { limit: 10 },
          { limit: 15 },
          { limit: 20 },
          { limit: 30 },
          { limit: 35 },
          {}
        ]
    }}
    pointer={{type: "blob", animationDelay: 0, elastic: true}}
    value={val}
    minValue={10}
    maxValue={40}
  />




  // data = {
  //   eload: 30,
  //   throttle: 50,
  //   intakerate: 55,
  // }


  return (

    <div className={s.mqtt}>
      <div className={s.row}>
        <div className={s.item}>
          {Gauge(store.data.erpm,[0,1000,2000,3000,4000,5000,6000,7000,8000],'RPM')}
          <span>エンジン回轮数</span>
        </div>
        <div className={s.item}>
          {Gauge(store.data.speed,[20,40,60,80,100,120,140,160,180],'km/h')}
          <span>车速</span>
        </div>
        <div className={s.item}>
          {Gauge(store.data.cooltemp,[20,40,60,80,100,120,140,160,180],'℃')}
          <span>エンジン冷却液温度</span>
        </div>
        <div className={s.item}>
          {Gauge(store.data.intaketemp,[20,40,60,80,100,120,140,160,180],'℃')}
          <span>エンジンオイル温度</span>
        </div>
      </div>

      <div className={s.row}>
        <div className={s.card}>
          <label>{store.data.mpressure}</label>
          <span>エンジン运行时间</span>
        </div>
        <div className={s.card}>
          <label>{store.data.igntiming}</label>
          <span>エンジン运行时间</span>
        </div>
        <div className={s.card}>
          {/*{Gaugg(30,[0,100],'%')}*/}
          {GaugeEle(store.data.throttle)}
          <span>バッテリー残りの寿命</span>
        </div>
        <div className={s.card}>
          {GaugeTmp(store.data.envtemp)}
          <span>环境温度</span>
        </div>
      </div>
    
    </div>
  )
};

export default Mqtt