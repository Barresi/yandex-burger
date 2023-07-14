import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import style from '../ingredient-card/ingredient-card.module.scss';
import style_skeleton from './skeleton-card.module.scss';

const SkeletonCard = ({ cards }) => {
     return (
          <>
               {Array(cards)
                    .fill(3)
                    .map((item, ind) => (
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

SkeletonCard.propTypes = {
     cards: PropTypes.number.isRequired,
};

export default SkeletonCard;
