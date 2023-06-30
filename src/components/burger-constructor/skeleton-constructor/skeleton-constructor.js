import Skeleton from "react-loading-skeleton";
import PropTypes from "prop-types";

import style from "./skeleton-constructor.module.css";

const SkeletonConstructor = ({ count }) => {
     return (
          <>
               {Array(count)
                    .fill(1)
                    .map((item, i) => (
                         <Skeleton key={i} className={style.skeleton} />
                    ))}
          </>
     );
};

SkeletonConstructor.propTypes = {
     count: PropTypes.number.isRequired,
};

export default SkeletonConstructor;
