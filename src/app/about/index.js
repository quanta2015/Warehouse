import React,{useState,useEffect} from 'react';import { inject,observer,MobXProviderContext } from 'mobx-react'import classnames from 'classnames';import {API_SERVER} from '@/constant/apis'import { GUIDE_LIST} from '@/constant/data'import s from './index.module.less';import TitleLine from '@/component/TitleLine'import ToTop     from '@/component/ToTop'import right from '@/img/right.svg'const About = () => {  return (    <section>      <div className={s.about}>        <span>まだデザイン中ですので、</span>        <span>お楽しみに</span>              </div>    </section>  )}export default  About