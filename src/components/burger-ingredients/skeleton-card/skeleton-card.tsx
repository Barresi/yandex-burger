import Skeleton from 'react-loading-skeleton';
import style from '../ingredient-card/ingredient-card.module.scss';
import style_skeleton from './skeleton-card.module.scss';
import { FC } from 'react';

const SkeletonCard: FC<{ cards: number }> = ({ cards }) => {
     return (
          <>
               {Array(cards)
                    .fill(3)
                    .map((_, ind) => (
                         <div className='card_skeleton' key={ind}>
                              {
                                   <Skeleton
                                        baseColor='#202020'
                                        highlightColor='#444'
                                        className={`${style.img_ingredient} ${style_skeleton.img}`}
                                   />
                              }
                              {
                                   <Skeleton
                                        baseColor='#202020'
                                        highlightColor='#444'
                                        className={`${style.title} text text_type_main-default ${style_skeleton.name}`}
                                        count={2}
                                   />
                              }
                         </div>
                    ))}
          </>
     );
};

export default SkeletonCard;
