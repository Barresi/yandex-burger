import style from './sample-content.module.scss';
import { FC } from 'react';

const SampleContentConstructor: FC<{ type: string; text: string }> = ({ type, text }) => {
     return (
          <li
               className={`${style.block} ${
                    type === 'top' ? style.block_top : type === 'bottom' ? style.block_bottom : ''
               }`}>
               {text}
          </li>
     );
};

export default SampleContentConstructor;
