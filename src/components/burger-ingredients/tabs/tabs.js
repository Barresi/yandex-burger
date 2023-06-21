import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

import style from './tabs.module.css'

const Tabs = () => {
     const [current, setCurrent] = React.useState('one')
     const dataTabs = [
          {value: 'one', text: 'Булки'},
          {value: 'two', text: 'Соусы'},
          {value: 'three', text: 'Начинки'},
     ]
     const renderTabs = dataTabs.map((item, index) => <Tab value={item.value} active={current === item.value} onClick={setCurrent} key={index}> {item.text} </Tab>)
     return (
       <div className={style.tabs}>
          {renderTabs}
       </div>
     )
}

export default Tabs;