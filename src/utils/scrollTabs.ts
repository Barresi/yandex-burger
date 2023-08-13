import { RefObject } from 'react';
import { IIngredientsRefs } from '../types/content-ingredients-refs';

export function scrollTabs({
     bunRef,
     saucesRef,
     mainRef,
     tabRef,
}: IIngredientsRefs & { tabRef: RefObject<HTMLElement> }) {
     const bunsPosition = bunRef.current?.getBoundingClientRect().top as number;
     const saucesPosition = saucesRef.current?.getBoundingClientRect().top as number;
     const mainPosition = mainRef.current?.getBoundingClientRect().top as number;
     const tabMenuPosition = tabRef?.current?.getBoundingClientRect().bottom as number;

     let bunsDistance = Math.abs(tabMenuPosition - bunsPosition);
     let saucesDistance = Math.abs(tabMenuPosition - saucesPosition);
     let mainDistance = Math.abs(tabMenuPosition - mainPosition);

     if (bunsDistance <= saucesDistance && bunsDistance <= mainDistance) {
          return 'one';
     } else if (saucesDistance <= bunsDistance && saucesDistance <= mainDistance) {
          return 'two';
     } else {
          return 'three';
     }
}
