import { generatePrimitiveTokens, generateGenericTokens, generateGroupTokens } from './generateTokens';
import fs from 'fs';
import path from 'node:path';

function dotToCamelCase(str: string): string {
  return str
    .split('.') // Split the string by dots
    .map(
      (word, index) =>
        index === 0
          ? word // Keep the first word lowercase
          : word.charAt(0).toUpperCase() + word.slice(1), // Capitalize the first letter of subsequent words
    )
    .join(''); // Join the words back together
}

function dotToCSSVar(str: string): string {
  return (
    'smtc--' +
    str
      .split('.') // Split the string by dots
      .map(
        (word, index) =>
          index === 0
            ? word // Keep the first word lowercase
            : word.charAt(0).toUpperCase() + word.slice(1), // Capitalize the first letter of subsequent words
      )
      .join('-')
  ); // Join the words back together
}

function generateLibraryOutput() {
  let primitiveTokens = generatePrimitiveTokens();
  let genericTokens = generateGenericTokens();
  let groupTokens = generateGroupTokens();

  let primitiveTokenList = '';
  for (const token of primitiveTokens) {
    const tokenName = dotToCamelCase(token.name);
    const cssVarName = dotToCSSVar(token.name);
    const exportToken = `export const ${tokenName} = 'var(${cssVarName})';`;
    primitiveTokenList += `${exportToken}\n`;
  }

  const primitiveListPath = path.resolve(__dirname, `../src/primitives/tokens.ts`);
  // Write the JSON string to a file
  fs.writeFile(primitiveListPath, primitiveTokenList, err => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('JSON data successfully written to tokens.json');
    }
  });

  for (const token of genericTokens) {
    console.log('Generic Token:', token);
  }

  for (const token of groupTokens) {
    console.log('Group Token:', token);
  }
}

generateLibraryOutput();
