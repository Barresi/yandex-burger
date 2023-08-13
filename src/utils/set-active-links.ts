export const clx = (options: { [key: string]: boolean }): string => {
     let str = ``;
     for (let key in options) {
          if (options[key]) {
               str += ` ${key}`;
          }
     }
     return str;
};
