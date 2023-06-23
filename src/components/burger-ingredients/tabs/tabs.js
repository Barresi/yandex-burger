import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

import style from './tabs.module.css'

const dataTabs = [
     {value: 'one', text: 'Булки'},
     {value: 'two', text: 'Соусы'},
     {value: 'three', text: 'Начинки'},
]

const Tabs = () => {
     const [current, setCurrent] = React.useState('one')

     return (
       <div className={style.tabs}>
          {dataTabs.map((item, index) => <Tab value={item.value} active={current === item.value} onClick={setCurrent} key={index}> {item.text} </Tab>)}
       </div>
     )
}

export default Tabs;