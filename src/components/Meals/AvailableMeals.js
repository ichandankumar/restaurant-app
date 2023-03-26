import classes from './AvailableMeals';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Briyani',
      description: 'Finest Mutton and Chicken Briyani',
      price: 220,
    },
    {
      id: 'm2',
      name: 'Paneer TIkka',
      description: 'A Indian specialty!',
      price: 160,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'Indian, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Momos',
      description: 'Chinese Special',
      price: 100,
    },
  ];
const AvailableMeals = () => {
const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
return (
<section className={classes.meals}>
    <ul>
        {mealsList}
    </ul>
</section>
);
}
export default AvailableMeals;