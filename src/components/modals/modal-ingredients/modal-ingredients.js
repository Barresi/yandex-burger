import React from 'react'

const ModalIngredients = (props) => {
     const { name, calories, carbohydrates, proteins, fat, image_large} = props.dataIngredients;
     return (
          <div className="modal">
               <div className="title">Детали ингредиента</div>
               <div className="image"><img src={image_large} alt="img-product" /></div>
               <div className="name">{name}</div>
               <div className="compound">
                    <div className="calories">
                         <div className="compound_title">Калории,ккал</div>
                         <div className="quantity">{calories}</div>
                    </div>
                    <div className="proteins">
                         <div className="compound_title">Белки, г</div>
                         <div className="quantity">{proteins}</div>
                    </div>
                    <div className="fat">
                         <div className="compound_title">Жиры, г</div>
                         <div className="quantity">{fat}</div>
                    </div>
                    <div className="carbohydrates">
                         <div className="compound_title">Углеводы, г</div>
                         <div className="quantity">{carbohydrates}</div>
                    </div>
               </div>
          </div>
     )
}

export default ModalIngredients;