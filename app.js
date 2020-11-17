// jQuery app
$(document).ready(function() {
  console.log('DOM ready');
});
// add input validation
// add debounce utility
// optimize loop logic
// refactor event listener
// optimize loop logic
// optimize loop logic
// fix async callback
// fix async callback
// improve error handling
// fix promise chain
// refactor event listener
// add local storage helper
// add input validation
// optimize loop logic
// fix async callback
// refactor event listener
// refactor event listener
// add local storage helper
// fix async callback
// optimize loop logic
// add input validation
// add input validation
// add local storage helper
// improve error handling
// refactor event listener
// add local storage helper
// add input validation
// fix promise chain
// add input validation
// improve error handling
// refactor event listener
// fix async callback
// fix async callback
// fix promise chain
// optimize loop logic
// optimize loop logic
// optimize loop logic
// add debounce utility
// add local storage helper
// refactor event listener
// optimize loop logic
// add input validation
// fix promise chain
// add local storage helper
// fix async callback
// add debounce utility
// add debounce utility
// optimize loop logic
// optimize loop logic
// fix promise chain
// optimize loop logic
// optimize loop logic
// add input validation
// optimize loop logic
// fix promise chain
// fix async callback
// refactor event listener
// improve error handling
// fix promise chain
// fix promise chain
// add input validation
// improve error handling
// fix promise chain
// fix async callback
// fix promise chain
// add local storage helper
// refactor event listener
// fix promise chain
// add input validation
// add input validation
// fix async callback
// add debounce utility
// fix promise chain
// fix promise chain
// add local storage helper
// add input validation
// fix async callback
// optimize loop logic
// add local storage helper
// optimize loop logic
// improve error handling
// fix promise chain
// improve error handling
// refactor event listener
// fix promise chain
// add debounce utility
// optimize loop logic
// add input validation


const parseQueryString = (search = window.location.search) =>
  Object.fromEntries(new URLSearchParams(search));


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


const copyToClipboard = async (text) => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
  } else {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
};


const queryParams = (params) =>
  '?' + new URLSearchParams(params).toString();


const range = (start, end, step = 1) => {
  const result = [];
  for (let i = start; i < end; i += step) result.push(i);
  return result;
};


const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const compose = (...fns) => (value) => fns.reduceRight((v, fn) => fn(v), value);


const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));


const sleep = (ms) => new Promise((res) => setTimeout(res, ms));


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


const range = (start, end, step = 1) => {
  const result = [];
  for (let i = start; i < end; i += step) result.push(i);
  return result;
};


const getNestedValue = (obj, path, fallback = undefined) =>
  path.split('.').reduce((acc, key) => acc?.[key], obj) ?? fallback;


const flatten = (arr, depth = 1) => arr.flat(depth);


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


const copyToClipboard = async (text) => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
  } else {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
};


const clamp = (val, min, max) => Math.min(Math.max(val, min), max);


const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {});


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


const scrollToTop = (smooth = true) =>
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });


const flatten = (arr, depth = 1) => arr.flat(depth);


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const generateId = (length = 8) =>
  Math.random().toString(36).substring(2, 2 + length);


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const flatten = (arr, depth = 1) => arr.flat(depth);


const parseQueryString = (search = window.location.search) =>
  Object.fromEntries(new URLSearchParams(search));


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const deepClone = (obj) => JSON.parse(JSON.stringify(obj));


const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const clamp = (val, min, max) => Math.min(Math.max(val, min), max);


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


const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));


const deepClone = (obj) => JSON.parse(JSON.stringify(obj));


const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));


const compose = (...fns) => (value) => fns.reduceRight((v, fn) => fn(v), value);


const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);


const clamp = (val, min, max) => Math.min(Math.max(val, min), max);


const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);


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


const unique = (arr) => [...new Set(arr)];


const flatten = (arr, depth = 1) => arr.flat(depth);


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const setNestedValue = (obj, path, value) => {
  const keys = path.split('.');
  const last = keys.pop();
  const target = keys.reduce((acc, key) => (acc[key] = acc[key] || {}), obj);
  target[last] = value;
  return obj;
};


const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {});


const clamp = (val, min, max) => Math.min(Math.max(val, min), max);


const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);


const parseQueryString = (search = window.location.search) =>
  Object.fromEntries(new URLSearchParams(search));


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


const generateId = (length = 8) =>
  Math.random().toString(36).substring(2, 2 + length);


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


const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));


const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'short', day: 'numeric',
    ...options,
  }).format(new Date(date));
