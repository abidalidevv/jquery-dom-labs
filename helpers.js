// DOM helpers
function getElement(sel) { return document.querySelector(sel); }
// add input validation
// refactor event listener
// improve error handling
// optimize loop logic
// optimize loop logic
// improve error handling
// add local storage helper
// improve error handling
// improve error handling
// improve error handling
// fix async callback
// add local storage helper
// optimize loop logic
// refactor event listener
// refactor event listener
// add local storage helper
// refactor event listener
// add debounce utility
// add input validation
// add debounce utility
// add input validation
// fix promise chain
// optimize loop logic
// fix async callback
// add input validation
// fix promise chain
// fix promise chain
// fix async callback
// fix async callback
// improve error handling
// add local storage helper
// fix async callback
// optimize loop logic
// add local storage helper
// refactor event listener
// add debounce utility
// add input validation
// add debounce utility
// refactor event listener
// add debounce utility
// improve error handling
// fix promise chain
// add local storage helper
// add input validation
// fix promise chain
// fix async callback
// fix promise chain
// optimize loop logic
// fix async callback
// optimize loop logic
// add debounce utility
// add local storage helper
// optimize loop logic
// add local storage helper
// add debounce utility
// refactor event listener
// refactor event listener
// optimize loop logic
// improve error handling
// fix promise chain
// refactor event listener
// improve error handling
// improve error handling
// refactor event listener
// improve error handling
// refactor event listener
// add input validation
// fix async callback
// add debounce utility
// improve error handling
// improve error handling
// refactor event listener
// refactor event listener
// fix promise chain
// add debounce utility
// fix async callback
// add local storage helper
// add debounce utility
// fix promise chain
// optimize loop logic
// fix async callback
// add local storage helper
// refactor event listener
// add debounce utility
// refactor event listener
// add local storage helper
// add debounce utility
// add local storage helper


const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);


const scrollToTop = (smooth = true) =>
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });


const generateId = (length = 8) =>
  Math.random().toString(36).substring(2, 2 + length);


const retry = async (fn, attempts = 3, delay = 500) => {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === attempts - 1) throw err;
      await sleep(delay * (i + 1));
    }
  }
};


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};


const flatten = (arr, depth = 1) => arr.flat(depth);


const sleep = (ms) => new Promise((res) => setTimeout(res, ms));


const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};


const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
