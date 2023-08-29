# :hamburger: Приложение "Stellar Burgers"

_Проектная работа на курсе Яндекс Практикум_

---

[![preview](https://i.ibb.co/gtKCqHn/11.jpg)]()

---

**Stellar Burgers** - это приложение вымышленного ресторана, с помощью которого можно ознакомиться с ассортиментом, собирать и заказывать бургеры.

На главной странице находится меню с ингредиентами, которые можно перетаскивать в конструктор с помощью **Drag'n'Drop**, а также менять местами в самом конструкторе - эти возможности реализованы с помощью библиотеки **react-dnd**. В меню есть категории ингредиентов, быстро перейти к каждому из них можно с помощью _динамических табов_ (по мере скролла _табы_ сами определяют кто из них будет активным).

Маршрутизация реализована с помощью **react-router-dom**, также реализованы **защищенные маршруты** (без авторизации доступна только часть функционала приложения). При попытке перейти на маршруты, доступные только **авторизованным** пользователям произойдет перенаправление на страницу входа.

Также пользователь может зайти в свой личный кабинет. Там можно изменить персональные данные, посмотреть историю заказов и выйти из своей учетной записи.

Взаимодействие с сервером происходит посредством:

-    **REST API** - получение списка ингредиентов, регистрация, авторизация, изменение данных о пользователе, отправка заказа.
-    **WebSocket** - получение информации о всех заказах, а также о заказах конкретного пользователя.

Управление состоянием хранилища происходит при помощи библиотеки **Redux Toolkit**.

---

🔨 Используемые технологии:

-    React
-    Redux Toolkit
-    TypeScript
-    SCSS

🚧 В следующей версии проекта будет полное покрытие приложения **тестами**.

[:link: Открыть веб-сайт приложения (появится позже)]()  
[:link: Открыть макет в Figma](https://www.figma.com/file/zFGN2O5xktHl9VmoOieq5E/React-_-%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BD%D1%8B%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8_external_link?type=design&node-id=849-1002&mode=design)
