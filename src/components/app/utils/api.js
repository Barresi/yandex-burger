const PATH = "https://norma.nomoreparties.space/api";

const checkResponse = (response) => {
     return response.ok ? response.json() : Promise.reject(response);
};

const getDataIngredients = (setIsLoading, setDataBurgers, setIsError) => {
     fetch(`${PATH}/ingredients`)
          .then((res) => checkResponse(res))
          .then((data) => {
               setDataBurgers(data.data);
               setIsLoading(false);
          })
          .catch((error) => {
               setTimeout(() => setIsError(error.status), 3000);
          });
};

export default getDataIngredients;
