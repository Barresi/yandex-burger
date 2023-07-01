const PATH = "https://norma.nomoreparties.space/api";

const checkResponse = (response) => {
     return response.ok
          ? response.json()
          : response.json().then((err) => Promise.reject(err));
};

async function getDataIngredients() {
     const response = await fetch(`${PATH}/ingredients`);
     return await checkResponse(response);
}

export default getDataIngredients;
