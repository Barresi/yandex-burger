import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import style from "./tabs.module.css";

const dataTabs = [
     { value: "one", text: "Булки" },
     { value: "two", text: "Соусы" },
     { value: "three", text: "Начинки" },
];

const Tabs = ({ activeTab }) => {
     return (
          <div className={style.tabs}>
               {dataTabs.map((item, index) => (
                    <Tab
                         value={item.value}
                         active={activeTab === item.value}
                         key={index}>
                         {" "}
                         {item.text}{" "}
                    </Tab>
               ))}
          </div>
     );
};

Tabs.propTypes = {
     activeTab: PropTypes.string.isRequired,
};

export default Tabs;
