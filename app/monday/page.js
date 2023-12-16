import React from 'react';
import MealsForDay from '@/src/layout/mealsForDay';
import meals from '@/data/meals';

const Monday = () => {
  const mondayMeals = meals[0].monday;

  return (
    <div>
      <MealsForDay mondayMeals={mondayMeals} />
    </div>
  );
};

export default Monday;
