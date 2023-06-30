import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

import style from "./skeleton-link.module.css";

const SkeletonLink = ({ cards }) => {
     return Array(cards)
          .fill(1)
          .map((item, i) => (
               <div className={style.link} key={i}>
                    <Skeleton width={50} height={50} circle />
                    <Skeleton width={120} height={30} />
               </div>
          ));
};

SkeletonLink.propTypes = {
     cards: PropTypes.number.isRequired,
};

export default SkeletonLink;
