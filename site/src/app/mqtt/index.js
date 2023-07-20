import React, { useEffect, useState } from 'react';

import GaugeComponent from '@/lib';
import CONSTANTS from '@/lib/GaugeComponent/constants';


import s from './index.module.less'

const Mqtt = () => {
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
  return (

    <div className={s.mqtt}>
      <div className={s.row}>
        <div className={s.item}>
          {Gauge(5700,[0,1000,2000,3000,4000,5000,6000,7000,8000],'RPM')}
          <span>エンジン回轮数</span>
        </div>
        <div className={s.item}>
          {Gauge(136,[20,40,60,80,100,120,140,160,180],'km/h')}
          <span>车速</span>
        </div>
        <div className={s.item}>
          {Gauge(64,[20,40,60,80,100,120,140,160,180],'℃')}
          <span>エンジン冷却液温度</span>
        </div>
        <div className={s.item}>
          {Gauge(64,[20,40,60,80,100,120,140,160,180],'℃')}
          <span>エンジンオイル温度</span>
        </div>
      </div>

      <div className={s.row}>
        <div className={s.card}>
          <label>3:12:12</label>
          <span>エンジン运行时间</span>
        </div>
        <div className={s.card}>
          <label>2381.3</label>
          <span>エンジン运行时间</span>
        </div>
        <div className={s.cardq}>
          {Gaugg(30,[0,100],'%')}
          <span>バッテリー残りの寿命</span>
        </div>
        <div className={s.card}></div>
      </div>
    
    </div>
  )
};

export default Mqtt