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


const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {});


const scrollToTop = (smooth = true) =>
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });


const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const getNestedValue = (obj, path, fallback = undefined) =>
  path.split('.').reduce((acc, key) => acc?.[key], obj) ?? fallback;


const compose = (...fns) => (value) => fns.reduceRight((v, fn) => fn(v), value);


const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);


class EventEmitter {
  constructor() { this._events = {}; }
  on(event, listener) {
    (this._events[event] = this._events[event] || []).push(listener);
    return this;
  }
  off(event, listener) {
    this._events[event] = (this._events[event] || []).filter(l => l !== listener);
    return this;
  }
  emit(event, ...args) {
    (this._events[event] || []).forEach(l => l(...args));
    return this;
  }
}


const parseQueryString = (search = window.location.search) =>
  Object.fromEntries(new URLSearchParams(search));


const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));


const unique = (arr) => [...new Set(arr)];


const queryParams = (params) =>
  '?' + new URLSearchParams(params).toString();


const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);


const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {});


const generateId = (length = 8) =>
  Math.random().toString(36).substring(2, 2 + length);


const flatten = (arr, depth = 1) => arr.flat(depth);


const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


const compose = (...fns) => (value) => fns.reduceRight((v, fn) => fn(v), value);


const clamp = (val, min, max) => Math.min(Math.max(val, min), max);


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


const setNestedValue = (obj, path, value) => {
  const keys = path.split('.');
  const last = keys.pop();
  const target = keys.reduce((acc, key) => (acc[key] = acc[key] || {}), obj);
  target[last] = value;
  return obj;
};


const unique = (arr) => [...new Set(arr)];


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};


const parseQueryString = (search = window.location.search) =>
  Object.fromEntries(new URLSearchParams(search));


const generateId = (length = 8) =>
  Math.random().toString(36).substring(2, 2 + length);


const setNestedValue = (obj, path, value) => {
  const keys = path.split('.');
  const last = keys.pop();
  const target = keys.reduce((acc, key) => (acc[key] = acc[key] || {}), obj);
  target[last] = value;
  return obj;
};


class EventEmitter {
  constructor() { this._events = {}; }
  on(event, listener) {
    (this._events[event] = this._events[event] || []).push(listener);
    return this;
  }
  off(event, listener) {
    this._events[event] = (this._events[event] || []).filter(l => l !== listener);
    return this;
  }
  emit(event, ...args) {
    (this._events[event] || []).forEach(l => l(...args));
    return this;
  }
}


const range = (start, end, step = 1) => {
  const result = [];
  for (let i = start; i < end; i += step) result.push(i);
  return result;
};


class EventEmitter {
  constructor() { this._events = {}; }
  on(event, listener) {
    (this._events[event] = this._events[event] || []).push(listener);
    return this;
  }
  off(event, listener) {
    this._events[event] = (this._events[event] || []).filter(l => l !== listener);
    return this;
  }
  emit(event, ...args) {
    (this._events[event] || []).forEach(l => l(...args));
    return this;
  }
}


const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};


const clamp = (val, min, max) => Math.min(Math.max(val, min), max);


const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


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


const sleep = (ms) => new Promise((res) => setTimeout(res, ms));


const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);


const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {});


const generateId = (length = 8) =>
  Math.random().toString(36).substring(2, 2 + length);


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


const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {});


const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));


const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));


const queryParams = (params) =>
  '?' + new URLSearchParams(params).toString();


const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));


const queryParams = (params) =>
  '?' + new URLSearchParams(params).toString();


const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));


const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {});


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


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const clamp = (val, min, max) => Math.min(Math.max(val, min), max);


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};


const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};


const deepClone = (obj) => JSON.parse(JSON.stringify(obj));


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const clamp = (val, min, max) => Math.min(Math.max(val, min), max);


const generateId = (length = 8) =>
  Math.random().toString(36).substring(2, 2 + length);


const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {});


const generateId = (length = 8) =>
  Math.random().toString(36).substring(2, 2 + length);


const scrollToTop = (smooth = true) =>
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });


const scrollToTop = (smooth = true) =>
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });


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


const clamp = (val, min, max) => Math.min(Math.max(val, min), max);


const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);


const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'short', day: 'numeric',
    ...options,
  }).format(new Date(date));


const queryParams = (params) =>
  '?' + new URLSearchParams(params).toString();


const sleep = (ms) => new Promise((res) => setTimeout(res, ms));


const scrollToTop = (smooth = true) =>
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const sleep = (ms) => new Promise((res) => setTimeout(res, ms));


const unique = (arr) => [...new Set(arr)];


const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);


const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);


const getNestedValue = (obj, path, fallback = undefined) =>
  path.split('.').reduce((acc, key) => acc?.[key], obj) ?? fallback;


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


const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


const flatten = (arr, depth = 1) => arr.flat(depth);


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
