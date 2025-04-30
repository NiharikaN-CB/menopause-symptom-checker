function checkSymptoms() {
    const age = document.getElementById("age").value;
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    const symptomCount = checkboxes.length;
    const resultDiv = document.getElementById("result");
  
    if (symptomCount >= 5 && (age === "46_55" || age === "over_55")) {
      resultDiv.innerHTML = "You may be experiencing menopause. Consider seeing a doctor.";
    } else if (symptomCount >= 3 && age === "40_45") {
      resultDiv.innerHTML = "You may be in the early stages of perimenopause.";
    } else if (symptomCount >= 2 && age === "under_40") {
      resultDiv.innerHTML = "This might be early menopause or hormonal changes. Please consult a doctor.";
    } else {
      resultDiv.innerHTML = "Your symptoms may not indicate menopause. But it's always good to stay informed!";
    }
  }
  