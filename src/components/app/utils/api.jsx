const URL = 'https://norma.nomoreparties.space/api';

const checkResponse = (response) => {
     return response.ok ? response.json() : Promise.reject('Connection has failed');
};

export async function fetchDataIngredients() {
     const response = await fetch(`${URL}/ingredients`);
     return await checkResponse(response);
}

export async function postDataIngredients(data) {
     const response = await fetch(`${URL}/orders`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
     });
     return await checkResponse(response);
}
