const PATH = "https://norma.nomoreparties.space/api";

const checkResponse = (response) => {
     return response.ok
          ? response.json()
          : response.json().then((err) => Promise.reject(err));
};

export async function getDataIngredients() {
     const response = await fetch(`${PATH}/ingredients`);
     return await checkResponse(response);
}

export async function postDataIngredients(data) {
     const response = await fetch(`${PATH}/orders`, {
          method: "POST",
          headers: {
               "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
     });
     return await checkResponse(response);
}
