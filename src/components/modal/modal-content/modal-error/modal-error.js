import PropTypes from "prop-types";

import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";

import style from "./modal-error.module.css";

const ModalError = () => {
     return (
          <>
               <Logo />
               <div className={`${style.title} text text_type_main-large`}>
                    {"Упс, что-то пошло не так :("}
               </div>
               <div className={`${style.desc} text text_type_main-medium`}>
                    connection is failed
               </div>
          </>
     );
};

export default ModalError;
