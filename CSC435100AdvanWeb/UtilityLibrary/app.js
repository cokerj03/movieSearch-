// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the form and result display elements
    const form = selectElement('#converter-form'); // Form element
    const resultElement = selectElement('#result'); // Result display element
  
    // Add event listener for form submission
    addEvent(form, 'submit', (event) => {
      event.preventDefault(); // Prevent the form from refreshing the page
  
      // Get user input values
      const conversionType = selectElement('#conversion-type').value; // Get the selected conversion type
      const inputValue = parseFloat(selectElement('#input-value').value); // Get and parse the input value
  
      // Validate input value
      if (!isValidNumber(inputValue)) {
        resultElement.textContent = 'Result: Invalid input. Please enter a valid number.';
        return;
      }
  
      let result; // Variable to store the conversion result
      let unitFrom, unitTo; // Variables to store units of measure
  
      // Perform the conversion based on the selected type
      switch (conversionType) {
        case 'length':
          result = convertUnits(inputValue, 3.28084); // Convert meters to feet
          unitFrom = 'meters';
          unitTo = 'feet';
          break;
        case 'weight':
          result = convertUnits(inputValue, 2.20462); // Convert kilograms to pounds
          unitFrom = 'kilograms';
          unitTo = 'pounds';
          break;
        case 'temperature':
          result = (inputValue * 9) / 5 + 32; // Convert Celsius to Fahrenheit
          unitFrom = 'Celsius';
          unitTo = 'Fahrenheit';
          break;
        default:
          resultElement.textContent = 'Result: Unknown conversion type.';
          return;
      }
  
      // Display the conversion result with proper formatting and units
      resultElement.textContent = `Result: ${inputValue} ${unitFrom} = ${result.toFixed(2)} ${unitTo}`;
    });
  });
  
  // Utility function to select a DOM element
  function selectElement(selector) {
    const element = document.querySelector(selector);
    if (!element) throw new Error(`Element not found for selector: ${selector}`);
    return element;
  }
  
  // Utility function to add an event listener to an element
  function addEvent(element, event, handler) {
    if (!element || !event || typeof handler !== 'function') {
      throw new Error('Invalid parameters for addEvent.');
    }
    element.addEventListener(event, handler);
  }
  
  // Utility function to validate if a value is a valid number
  function isValidNumber(input) {
    return !isNaN(parseFloat(input)) && isFinite(input);
  }
  
  // Utility function to convert units using a conversion factor
  function convertUnits(value, conversionFactor) {
    if (typeof value !== 'number' || typeof conversionFactor !== 'number') {
      throw new Error('Both value and conversionFactor must be numbers.');
    }
    return value * conversionFactor;
  }
  