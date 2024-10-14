const formElement = document.querySelector("#form");
const nameField = document.querySelector("#name-field");
const nameInputElement = document.querySelector("#name-input");
const ageField = document.querySelector("#age-field");
const ageInputElement = document.querySelector("#age-input");
let nameIsValid = true;
let ageIsValid = true;

formElement.addEventListener("submit", formHandler);
function formHandler(e) {
  e.preventDefault();
  valueChecker(fetchInputValue(nameInputElement), "NAME");
  valueChecker(fetchInputValue(ageInputElement), "AGE");
  succesfullyMessage(nameIsValid , ageIsValid);
}
function fetchInputValue(element) {
  let value = element.value.trim();
  if (value !== "") {
    return value;
  } else {
    return false;
  }
}
function valueChecker(value, type) {
  switch (type) {
    case "NAME":
      if (value === false) {
        // if allready error is there in dom , don't add it
        if (document.querySelector("#name-error-span") === null) {
          showError(nameField, "NAME");
          nameIsValid = false;
        }
      } else {
        // if there is name error span then remove it
        if (document.querySelector("#name-error-span"))
          document.querySelector("#name-error-span").remove();
        nameIsValid = true;
      }
      break;
    case "AGE":
      if (value < 18 || value > 100) {
        // if allready error is there in dom , don't add it
        if (document.querySelector("#age-error-span") === null) {
          showError(ageField, "AGE");
          ageIsValid = false;
        }
      } else {
        // if there is age error span then remove it
        if (document.querySelector("#age-error-span")) {
          document.querySelector("#age-error-span").remove();
          ageIsValid = true;
        }
      }
      break;
  }
}
function showError(place, type) {
  switch (type) {
    case "NAME":
      const nameErrorElement = document.createElement("span");
      nameErrorElement.textContent = " invalid Name";
      nameErrorElement.id = "name-error-span";
      place.append(nameErrorElement);
      break;
    case "AGE":
      const ageErrorElement = document.createElement("span");
      ageErrorElement.textContent = " invalid Age";
      ageErrorElement.id = "age-error-span";
      place.append(ageErrorElement);
      break;
  }
}
function succesfullyMessage(nameStatus , ageStatus) {
  if (nameStatus === true && ageStatus === true) {
    alert("form submitted successfully.");
    resetInputValue(nameInputElement);
    resetInputValue(ageInputElement);
    nameStatus = true;
    ageStatus = true;
  }
}
function resetInputValue(element) {
  element.value = null;
}
