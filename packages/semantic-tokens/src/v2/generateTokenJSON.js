import { generatePrimitiveTokens, generateGenericTokens, generateGroupTokens } from './generateTokens.js';
import fs from 'fs';

// Function to generate tokens and write to a JSON file
export function generateTokenJSON() {
  let primitiveTokens = generatePrimitiveTokens();
  let genericTokens = generateGenericTokens();
  let groupTokens = generateGroupTokens();

  const results = {
    primitives: primitiveTokens,
    generics: genericTokens,
    components: groupTokens,
  };

  // Convert the JSON object to a string
  const jsonData = JSON.stringify(results, null, 2); // Pretty print with 2 spaces

  // Write the JSON string to a file
  fs.writeFile('tokens.json', jsonData, err => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('JSON data successfully written to tokens.json');
    }
  });
}

generateTokenJSON();
