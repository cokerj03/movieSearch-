document.addEventListener('DOMContentLoaded', () => {
    const form = selectElement('#converter-form');
    const resultElement = selectElement('#result');
  
    addEvent(form, 'submit', (event) => {
      event.preventDefault();
  
      const conversionType = selectElement('#conversion-type').value;
      const inputValue = parseFloat(selectElement('#input-value').value);
  
      if (!isValidNumber(inputValue)) {
        resultElement.textContent = 'Result: Invalid input.';
        return;
      }
  
      let result;
  
      switch (conversionType) {
        case 'length':
          result = convertUnits(inputValue, 3.28084); // meters to feet
          break;
        case 'weight':
          result = convertUnits(inputValue, 2.20462); // kg to pounds
          break;
        case 'temperature':
          result = (inputValue * 9) / 5 + 32; // Celsius to Fahrenheit
          break;
        default:
          result = 'Unknown conversion type.';
      }
  
      resultElement.textContent = `Result: ${result.toFixed(2)}`;
    });
  });
  