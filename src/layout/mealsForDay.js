import React from 'react';

const MealsForDay = ({ mondayMeals }) => {
  const dayMeals = mondayMeals.meals;

  return (
    <div className="ml-5">
      <h1 className="mt-10">{mondayMeals.days}</h1>
      {dayMeals.map((singleMeal) => {
        return (
          <div key={singleMeal.breakfast.id} className="">
            <h5 className="my-5 font-bold">{singleMeal.breakfast.meal}</h5>
            <ul className="flex flex-col ">
              {singleMeal.breakfast.quantity.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
            </ul>
          </div>
        );
      })}
      {dayMeals.map((singleMeal) => {
        return (
          <div key={singleMeal.second_breakfast.id} className="">
            <h5 className="my-5 font-bold">
              {singleMeal.second_breakfast.meal}
            </h5>
            <ul className="flex flex-col ">
              {singleMeal.second_breakfast.quantity.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
            </ul>
          </div>
        );
      })}
      {dayMeals.map((singleMeal) => {
        return (
          <div key={singleMeal.lunch.id} className="">
            <h5 className="my-5 font-bold">{singleMeal.lunch.meal}</h5>
            <ul className="flex flex-col ">
              {singleMeal.lunch.quantity.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
            </ul>
          </div>
        );
      })}
      {dayMeals.map((singleMeal) => {
        return (
          <div key={singleMeal.dinner.id} className="">
            <h5 className="my-5 font-bold">{singleMeal.dinner.meal}</h5>
            <ul className="flex flex-col ">
              {singleMeal.dinner.quantity.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default MealsForDay;
