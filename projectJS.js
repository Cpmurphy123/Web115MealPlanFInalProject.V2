function generateMealPlan() {
    
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var goal = document.getElementById('goal').value;

 
  if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  
  var proteinPreference = document.getElementById('proteinPreference').value;
  var carbPreference = document.getElementById('carbPreference').value;
  var veggiePreference = document.getElementById('veggiePreference').value;

  
  var meals = generateMeals(proteinPreference, carbPreference, veggiePreference);

  var mealPlanOutput = '';
  mealPlanOutput += `<h2>Meal Plan for ${name}</h2>`;
  mealPlanOutput += `<p>Email: ${email}</p>`;
  mealPlanOutput += `<p>Goal for the Week: ${goal}</p>`;

  mealPlanOutput += '<table>';
  mealPlanOutput += '<tr><th>Day</th><th>Breakfast</th><th>Snack</th><th>Lunch</th><th>Snack</th><th>Dinner</th></tr>';
  for (var day in meals) {
      mealPlanOutput += `<tr><td>${day}</td>`;
      for (var meal in meals[day]) {
          mealPlanOutput += `<td>${meals[day][meal]}</td>`;
      }
      mealPlanOutput += '</tr>';
  }
  mealPlanOutput += '</table>';

  mealPlanOutput += '<button onclick="clearMealPlan()">Clear Planner</button>';
  mealPlanOutput += '<button onclick="printMealPlan()">Print Planner</button>';
  mealPlanOutput += '<button onclick="downloadMealPlan()">Download Planner</button>';
  
  document.body.innerHTML = mealPlanOutput;
}

function generateMeals(proteinPreference, carbPreference, veggiePreference) {
  var meals = {
    Monday: [
      `${proteinPreference} Omelette`,
      `Fruit Salad with ${carbPreference}`,
      `Grilled ${proteinPreference} with ${veggiePreference}`,
      `Yogurt and ${veggiePreference}`,
      `Baked ${proteinPreference} with Roasted ${veggiePreference}`
    ],
    Tuesday: [
      'Smoothie',
      'Nuts',
      `Fruit Salad with ${veggiePreference}`,
      `Quinoa Salad with ${veggiePreference}`,
      `Cheese and ${carbPreference} Crackers`,
    ],
    Wednesday: [
      `Pancakes with ${veggiePreference}`,
      'Greek Yogurt',
      `Chicken Wrap with ${carbPreference}`,
      'Hummus with Veggies',
      `Salmon with ${veggiePreference} Stir-fry`
    ],
    Thursday: [
      'Avocado Toast',
      'Trail Mix',
      `Turkey Sandwich with ${carbPreference}`,
      'Fruit Smoothie',
      `Spaghetti with Meat Sauce and ${veggiePreference}`
    ],
    Friday: [
      `Bagel with ${proteinPreference} Spread`,
      `Vegetable Sticks with ${veggiePreference} Dip`,
      `Shrimp and ${veggiePreference} Stir-fry`,
      'Protein Bar',
      `Beef and ${veggiePreference} Skewers`
    ],
    Saturday: [
      `Yogurt Parfait with ${carbPreference}`,
      'Hard-Boiled Eggs',
      `Caprese Salad with ${proteinPreference}`,
      `Apple Slices with Nut Butter ${veggiePreference}`,
      `Grilled ${proteinPreference} with Baked Potatoes and ${veggiePreference}`
    ],
    Sunday: [
      'Oatmeal with Berries',
      'Cottage Cheese with Pineapple',
      `Egg Salad Sandwich with ${veggiePreference}`,
      'Granola Bar',
      `Vegetarian Pizza with ${veggiePreference}`
    ]
  };

  return meals;
}

function isValidEmail(email) {
  
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function clearMealPlan() {
  location.reload();
  
  alert('Meal plan cleared.');
}

function printMealPlan() {
  window.print();
}

mealPlanOutput += '<button onclick="downloadMealPlan()">Download Planner</button>';

function downloadMealPlan(mealPlanOutput) {

  var mealPlan = mealPlanOutput + '</body></html>'; 

  var w = window.open();
  w.document.write(mealPlan);
  w.document.close();

  var downloadLink = document.createElement("a");
  var blob = new Blob([mealPlan], { type: "text/html;charset=utf-8" });
  var url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = "mealplan.html";
  downloadLink.style.display = "none"; // Set to "none" initially
  document.body.appendChild(downloadLink);
  
  downloadLink.click();

  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);

  alert('Meal plan downloaded.');
}

