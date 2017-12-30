const shallowEqualArrays = require('shallow-equal/arrays');
const CSSselect = require('css-select');
const CSSselectPatched = require('./css-select-patched/index.js');
const adapter = require('css-select-browser-adapter');

const log = require('./log');

const runTests = async () => {
  const queries = [
    'div *',
    'div div *',
    'div div div *',
    'div div div div *',
    'div div div div div *',
    'div div div div div div *',
    'div div div div div div div *',
    'div div div div div div div div *',
    'div div div div div div div div div *',
    'div div div div div div div div div div *',
    'div div div div div div div div div div div *',
    'div div div div div div div div div div div div *',
    'div div div div div div div div div div div div div *',
    'div div div div div div div div div div div div div div *',
    'div div div div div div div div div div div div div div div *',
    'div div div div div div div div div div div div div div div div *',
    'div div div div div div div div div div div div div div div div div *',
    'div div div div div div div div div div div div div div div div div div *',
    'div div div div div div div div div div div div div div div div div div div *',
    'div .non-existing div div div div div div div div div div div div div a',
    'div div div div div div div div div div div div div div a',
    'body div div div div div div div div div div div div div div div div div div div div div *',
    'div span',
    'div div div div div span',
    'body div span',
    'body body',
    'body div div div',
    'div div div',
    'div span div',
    'div',
  ];

  for (query of queries) {
    const t0 = Date.now();
    const elsOriginal = CSSselect(query, document.body, { adapter });
    const t1 = Date.now();
    const elsPatched = CSSselectPatched(query, document.body, { adapter });
    const t2 = Date.now();

    log([
      query,
      `${t1 - t0}ms`,
      elsOriginal.length,
      `${t2 - t1}ms`,
      elsPatched.length,
      shallowEqualArrays(elsOriginal, elsPatched),
      `${Math.round((t1 - t0) / (t2 - t1) * 100) - 100}%`
    ]);
    await new Promise(resolve => setTimeout(resolve, 0));
  };
};

const go = async () => {
  log(['QUERY', '1.3.0RC0 TIME', 'ELS', 'PATCHED TIME', 'ELS', 'SHALLOWEQUAL', 'SPEED UP']);
  await runTests();
  log(['DONE']);
};
go()