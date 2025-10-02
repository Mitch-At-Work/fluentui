import {
  generatePrimitiveTokens,
  generatePropertyTokens,
  generateGroupTokens,
  generateComponentTokens,
  appState,
  properties
} from "./generateTokens.js";

/**
 * Main function to generate and render list
 */
function main() {
  let primitiveTokens = appState.showPrimitives
    ? generatePrimitiveTokens()
    : [];
  let propertyTokens = generatePropertyTokens();
  let groupTokens = generateGroupTokens();
  let componentTokens = generateComponentTokens();

  const results = [
    ...primitiveTokens,
    ...propertyTokens,
    ...groupTokens,
    ...componentTokens
  ];

  let resultHTML = `
    <table>
    <caption id="caption" aria-live="polite"></caption>
    <thead>
      <tr>
        <th>Token Name</th>
        <th>Fallback</th>
        <th>DTCG Type</th>
      </tr>
    </thead>
    <tbody>
  `;

  const tokens = results.sort((a, b) => a.name.localeCompare(b.name)).filter(t => t.name.includes(filter.value))

  for (const token of tokens) {
    resultHTML += `
      <tr style="color: ${properties[token.property]?.color || "red"}">
        <td>${token.name}</td>
        <td><small>${token.fallback ?? ""}</small></td>
        <td>${token.type}</td>
      </tr>`;
  }

  resultHTML += `
    </tbody>
  </table>`;

  const target = document.body.querySelector("table-goes-here");
  target.replaceChildren();
  target.insertAdjacentHTML("beforeend", resultHTML);

  document.querySelector("#caption").textContent = `
  ${tokens.length} Total Tokens / ${
    tokens.filter((t) => !t.fallback).length
  } Required Tokens`;
}

// Update state when checkboxes change
document.querySelectorAll('input').forEach((input) =>
  input.addEventListener("change", (e) => {
    // Todo, enable this later
    // appState.propertyFirst = !!switcher.checked;

    // appState.groupCollectionName = appState.propertyFirst
    //   ? "ctrlGroup"
    //   : "group";

    // Object.assign(appState, {
    //   propertyFirst: !!switcher.checked,
    //   showPrimitives: !!showPrimitives.checked,
    //   groupCollectionName: !!switcher.checked ? "ctrlGroup" : "group"
    // });
    console.log("Running main");
    main();
  })
);

main();
