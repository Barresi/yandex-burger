export function scrollTabs(bunRef, saucesRef, mainRef, tabRef) {
     const bunsPosition = bunRef.current.getBoundingClientRect().top;
     const saucesPosition = saucesRef.current.getBoundingClientRect().top;
     const mainPosition = mainRef.current.getBoundingClientRect().top;
     const tabMenuPosition = tabRef.current.getBoundingClientRect().bottom;

     let bunsDistance = Math.abs(tabMenuPosition - bunsPosition);
     let saucesDistance = Math.abs(tabMenuPosition - saucesPosition);
     let mainDistance = Math.abs(tabMenuPosition - mainPosition);

     if (bunsDistance <= saucesDistance && bunsDistance <= mainDistance) {
          return "one";
     } else if (
          saucesDistance <= bunsDistance &&
          saucesDistance <= mainDistance
     ) {
          return "two";
     } else if (
          mainDistance <= bunsDistance ||
          mainDistance <= saucesDistance
     ) {
          return "three";
     }
}
