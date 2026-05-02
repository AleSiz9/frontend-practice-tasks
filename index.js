const fs = require('fs').promises;
const path = require('path');

// Список всех конечных папок (листьев)
const folders = [
  'javascript/fundamentals/variables-types',
  'javascript/fundamentals/functions-scope',
  'javascript/fundamentals/arrays-methods',
  'javascript/fundamentals/objects-classes',
  'javascript/fundamentals/es6-features',
  'javascript/algorithms/arrays',
  'javascript/algorithms/strings',
  'javascript/algorithms/sorting-searching',
  'javascript/algorithms/recursion',
  'javascript/algorithms/dynamic-programming',
  'javascript/dom-manipulation/events',
  'javascript/dom-manipulation/forms-validation',
  'javascript/dom-manipulation/dynamic-content',
  'javascript/dom-manipulation/browser-api',
  'javascript/async/promises',
  'javascript/async/async-await',
  'javascript/async/fetch-api',
  'javascript/patterns/oop',
  'javascript/patterns/functional',
  'javascript/patterns/design-patterns',
  'css/fundamentals/selectors-specificity',
  'css/fundamentals/box-model',
  'css/fundamentals/positioning',
  'css/fundamentals/typography',
  'css/layout/flexbox',
  'css/layout/grid',
  'css/layout/responsive',
  'css/visual-effects/animations',
  'css/visual-effects/transitions',
  'css/visual-effects/transforms',
  'css/visual-effects/filters-blend',
  'css/components/buttons',
  'css/components/cards',
  'css/components/navigation',
  'css/components/forms-ui',
  'css/advanced/custom-properties',
  'css/advanced/pseudo-elements',
  'css/advanced/modern-features',
  'projects/mini-games',
  'projects/ui-components',
  'projects/clone-websites',
  'projects/utility-tools',
  'solutions/javascript',
  'solutions/css',
  'solutions/projects',
  'templates/challenge-template',
  'templates/solution-template'
];

async function createFolders() {
  for (const folder of folders) {
    const fullPath = path.join(__dirname, folder);
    try {
      await fs.mkdir(fullPath, { recursive: true });
      console.log(`Создана папка: ${folder}`);
    } catch (err) {
      console.error(`Ошибка при создании ${folder}:`, err.message);
    }
  }
  console.log('Готово!');
}

createFolders();