import { generateGenericTokens, generateGroupTokens } from './generateTokens';
import fs from 'fs';
import path from 'node:path';
import { groupFallbacks } from '../src/definitions/groupFallbacks';
import { genericFallbacks } from '../src/definitions/genericFallbacks';

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

function dotToCSSVarName(str: string): string {
  return (
    '--smtc-' +
    str
      .split('.') // Split the string by dots
      .join('-') // Join the words back together
  );
}

function generateLibraryOutput() {
  // let primitiveTokens = generatePrimitiveTokens();
  let genericTokens = generateGenericTokens();
  let groupTokens = generateGroupTokens();

  // let primitiveTokenList = '';
  // let primitiveIndexExport = 'export {\n';
  // for (const token of primitiveTokens) {
  //   const tokenName = '_' + dotToCamelCase(token.name);
  //   const cssVarName = dotToCSSVarName(token.name);
  //   const exportToken = `export const ${tokenName} = 'var(${cssVarName})';`;
  //   primitiveTokenList += `${exportToken}\n`;
  //   primitiveIndexExport += `${tokenName},\n`;
  // }
  // primitiveIndexExport += `} from './primitives/tokens';\n`;

  // const primitiveListPath = path.resolve(__dirname, `../src/primitives/tokens.ts`);
  // // Write the JSON string to a file
  // fs.writeFile(primitiveListPath, primitiveTokenList, err => {
  //   if (err) {
  //     console.error('Error writing to file:', err);
  //   } else {
  //     console.log('JSON data successfully written to tokens.json');
  //   }
  // });

  let genericTokenList = '';
  let genericIndexExport = 'export {\n';
  // To do: Generate primitive fallbacks for generic tokens
  for (const token of genericTokens) {
    const tokenName = dotToCamelCase(token.name);
    const cssVarName = dotToCSSVarName(token.name);
    const fluentFallback = genericFallbacks[tokenName]?.fluent;
    const exportToken = `export const ${tokenName} = 'var(${cssVarName}, ${fluentFallback})';`;
    genericTokenList += `${exportToken}\n`;
    genericIndexExport += `${tokenName},\n`;
  }
  genericIndexExport += `} from './generics/tokens';\n`;

  const genericListPath = path.resolve(__dirname, `../src/generics/tokens.ts`);
  // Write the JSON string to a file
  fs.writeFile(genericListPath, genericTokenList, err => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('JSON data successfully written to tokens.json');
    }
  });

  // To do: Generate generic/primitive fallbacks for group tokens
  const groupTokenList: { [key: string]: string } = {};
  const groupExportList: { [key: string]: string } = {};
  for (const token of groupTokens) {
    const tokenGroup = token.group || 'ungrouped';
    const groupName = tokenGroup.split('.')[0];
    if (!groupTokenList[groupName]) {
      groupTokenList[groupName] = '';
    }

    if (!groupExportList[groupName]) {
      groupExportList[groupName] = 'export {\n';
    }

    const tokenName = dotToCamelCase(token.name);
    const cssVarName = dotToCSSVarName(token.name);
    const fluentFallback = groupFallbacks[tokenGroup][tokenName]?.fluent;
    const exportToken = `export const ${tokenName} = 'var(${cssVarName}, ${fluentFallback})';`;
    groupTokenList[groupName] += `${exportToken}\n`;
    groupExportList[groupName] += `${tokenName},\n`;
  }

  for (const groupName of Object.keys(groupTokenList)) {
    const tokens = groupTokenList[groupName];
    const groupListPath = path.resolve(__dirname, `../src/groups/${groupName}/tokens.ts`);
    groupExportList[groupName] += `} from './groups/${groupName}/tokens';\n`;
    //Create directory if it doesn't exist
    const dir = path.dirname(groupListPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write the JSON string to a file
    fs.writeFile(groupListPath, tokens, err => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('JSON data successfully written to tokens.json');
      }
    });
  }

  // Write the JSON string to a file
  const indexPath = path.resolve(__dirname, `../src/index.ts`);
  // const allExports = primitiveIndexExport + genericIndexExport + Object.values(groupExportList).join('\n');
  const allExports = genericIndexExport + Object.values(groupExportList).join('\n');
  fs.writeFile(indexPath, allExports, err => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('JSON data successfully written to tokens.json');
    }
  });
}

generateLibraryOutput();
