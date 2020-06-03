$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.hydrate-button').click(clickedHydrateButton);

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_name = prompt("Please enter the name of your pet");
    var pet_info = {name:pet_name, weight:1, happiness:0, thirst:0};
  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info['happiness'] += 2;
      // Increase pet weight
      pet_info['weight'] += 3;
      // Increase thirst
      pet_info['thirst'] += 5;
      alert("Yum!");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info['happiness'] += 2;
      // Decrease pet weight
      pet_info['weight'] -= 1;
      // Increase thirst
      pet_info['thirst'] += 10
      alert("Yay!");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info['happiness'] -= 3;
      // Decrease pet weight
      pet_info['weight'] -= 5;
      // Increase thirst
      pet_info['thirst'] += 25;
      alert("This it tough!");
      checkAndUpdatePetInfoInHtml();
    }
  
    function clickedHydrateButton() {
      // Just set it's thirsty count to 0
      pet_info['thirst'] = 0;
      alert("Thank you!");
      checkAndUpdatePetInfoInHtml();
    }

    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
      if ( pet_info['weight'] < 0 ) {
        pet_info['weight'] = 0;
      }
      // Caps happiness
      if ( pet_info['happiness'] > 100 ) {
        pet_info['happiness'] = 100;
        alert("My tail can't spin any faster!");
      }
      // Try to prevent happiness from going below -50 or -75 (If excercise it hit)
      if ( pet_info['happiness'] <= -50 ) {
        pet_info['happiness'] = -50;
        alert("Please pay attention to me.");
      }
      // caps thirst, reduces happiness if thirst ever tries to exceed 100
      if ( pet_info['thirst'] > 100) {
        pet_info['thirst'] = 100;
        pet_info['happiness'] -= 25;
        alert("Please give me water!");
      }
    }
    


    // Updates your HTML with the current values in your pet_info dictionary
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.thirst').text(pet_info['thirst']);
    }
  