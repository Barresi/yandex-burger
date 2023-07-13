import PropTypes from "prop-types";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./modal-error.module.scss";

const ModalError = ({ error }) => {
     return (
          <>
               <Logo />
               <div className={`${style.title} text text_type_main-large`}>
                    {"Упс, что-то пошло не так :("}
               </div>
               <div className={`${style.desc} text text_type_main-medium`}>
                    {error}
               </div>
          </>
     );
};

ModalError.propTypes = {
     error: PropTypes.string.isRequired,
};

export default ModalError;
