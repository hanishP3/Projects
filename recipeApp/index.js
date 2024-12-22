const userinput = document.querySelector('#userinput');
const btn = document.querySelector('#btn');

// Function to fetch data from the API
async function partone() {
    const userinp = userinput.value.trim();
    if (!userinp) {
        alert('Please enter a valid input');
        return;
    } else {
        try {
            const response1 = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userinp}`);
            if (response1.ok) {
                const response2 = await response1.json();
                return response2;
            } else {
                console.log('Error', response1.statusText);
            }
        } catch (error) {
            console.error(error);
        }
    }
}

// Function to process and display the data
function parttwo(data) {
    const meal = data.meals[0]; // Assuming there's at least one meal

    // Update meal details
    document.querySelector('#name').innerHTML = meal.strMeal;
    document.querySelector('#origin').innerHTML = meal.strArea;
    document.querySelector('#category').innerHTML = meal.strCategory;
    document.querySelector('#recipe').innerHTML = meal.strInstructions;
    document.querySelector('#imgg').src = meal.strMealThumb;

    // Display YouTube link
    const videoLink = document.querySelector('#videolink');
    videoLink.href = meal.strYoutube;
    // videoLink.textContent = "Watch Video";

    // Display ingredients
    const ingredients = getFormattedIngredients(meal);
    document.querySelector('#ingre').innerHTML = ingredients;
}

// Function to format and get ingredients
function getFormattedIngredients(meal) {
    let ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        
        if (ingredient && ingredient.trim() !== '') {
            ingredientsList.push(`${ingredient} - ${measure}`);
        }
    }
    return ingredientsList.join(', '); // Join with commas
}

// Button event listener
btn.addEventListener('click', async () => {
    console.log('Button Clicked');
    const data = await partone();
    if (data && data.meals) {
        parttwo(data);
    } else {
        alert('No recipes found. Please try a different search.');
    }
});
