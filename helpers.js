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


const sleep = (ms) => new Promise((res) => setTimeout(res, ms));


const queryParams = (params) =>
  '?' + new URLSearchParams(params).toString();


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


const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'short', day: 'numeric',
    ...options,
  }).format(new Date(date));


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const generateId = (length = 8) =>
  Math.random().toString(36).substring(2, 2 + length);


const parseQueryString = (search = window.location.search) =>
  Object.fromEntries(new URLSearchParams(search));


const range = (start, end, step = 1) => {
  const result = [];
  for (let i = start; i < end; i += step) result.push(i);
  return result;
};


const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);


const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


const queryParams = (params) =>
  '?' + new URLSearchParams(params).toString();


const flatten = (arr, depth = 1) => arr.flat(depth);


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


const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));


const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'short', day: 'numeric',
    ...options,
  }).format(new Date(date));


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


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const scrollToTop = (smooth = true) =>
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });


const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);


const parseQueryString = (search = window.location.search) =>
  Object.fromEntries(new URLSearchParams(search));


const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};


const deepClone = (obj) => JSON.parse(JSON.stringify(obj));


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


const flatten = (arr, depth = 1) => arr.flat(depth);


const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'short', day: 'numeric',
    ...options,
  }).format(new Date(date));


const sleep = (ms) => new Promise((res) => setTimeout(res, ms));


const range = (start, end, step = 1) => {
  const result = [];
  for (let i = start; i < end; i += step) result.push(i);
  return result;
};


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
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


const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


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


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


const range = (start, end, step = 1) => {
  const result = [];
  for (let i = start; i < end; i += step) result.push(i);
  return result;
};


const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


const clamp = (val, min, max) => Math.min(Math.max(val, min), max);


const sleep = (ms) => new Promise((res) => setTimeout(res, ms));


const flatten = (arr, depth = 1) => arr.flat(depth);


const parseQueryString = (search = window.location.search) =>
  Object.fromEntries(new URLSearchParams(search));


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'short', day: 'numeric',
    ...options,
  }).format(new Date(date));


const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {});


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


const sleep = (ms) => new Promise((res) => setTimeout(res, ms));


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {});


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const unique = (arr) => [...new Set(arr)];


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


const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {});


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'short', day: 'numeric',
    ...options,
  }).format(new Date(date));


const flatten = (arr, depth = 1) => arr.flat(depth);


const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


const setNestedValue = (obj, path, value) => {
  const keys = path.split('.');
  const last = keys.pop();
  const target = keys.reduce((acc, key) => (acc[key] = acc[key] || {}), obj);
  target[last] = value;
  return obj;
};


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));


const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


const range = (start, end, step = 1) => {
  const result = [];
  for (let i = start; i < end; i += step) result.push(i);
  return result;
};


const generateId = (length = 8) =>
  Math.random().toString(36).substring(2, 2 + length);


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


const clamp = (val, min, max) => Math.min(Math.max(val, min), max);


const deepClone = (obj) => JSON.parse(JSON.stringify(obj));


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


const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


const generateId = (length = 8) =>
  Math.random().toString(36).substring(2, 2 + length);


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);


const clamp = (val, min, max) => Math.min(Math.max(val, min), max);


const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));


const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));


const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);


const getNestedValue = (obj, path, fallback = undefined) =>
  path.split('.').reduce((acc, key) => acc?.[key], obj) ?? fallback;


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};


const unique = (arr) => [...new Set(arr)];


const queryParams = (params) =>
  '?' + new URLSearchParams(params).toString();


const queryParams = (params) =>
  '?' + new URLSearchParams(params).toString();


const unique = (arr) => [...new Set(arr)];


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const flatten = (arr, depth = 1) => arr.flat(depth);


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


const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const getNestedValue = (obj, path, fallback = undefined) =>
  path.split('.').reduce((acc, key) => acc?.[key], obj) ?? fallback;


const deepClone = (obj) => JSON.parse(JSON.stringify(obj));


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


const deepClone = (obj) => JSON.parse(JSON.stringify(obj));


const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {});


const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'short', day: 'numeric',
    ...options,
  }).format(new Date(date));


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const sleep = (ms) => new Promise((res) => setTimeout(res, ms));


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


const getNestedValue = (obj, path, fallback = undefined) =>
  path.split('.').reduce((acc, key) => acc?.[key], obj) ?? fallback;


const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {});


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


const toKebabCase = (str) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();


const unique = (arr) => [...new Set(arr)];


const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());

// [2026-01-29 09:00:00]
// update

// [2026-04-23 09:00:00]
// update

// [2026-04-23 10:17:00]
// update

// [2026-05-16 10:17:00]
// update

// [2026-06-15 09:00:00]
// update

// [2026-06-15 10:17:00]
// update

// [2026-06-17 09:00:00]
// update

// [2026-06-17 10:17:00]
// update

// [2026-07-08 10:17:00]
// update

// [2026-07-08 11:34:00]
// update

// [2026-07-08 12:51:00]
// update

// [2026-07-19 10:17:00]
// update

// [2026-07-19 11:34:00]
// update

// [2026-07-31 10:17:00]
// update

// [2026-01-05 09:00:00]
// update

// [2026-01-15 09:00:00]
// update

// [2026-04-01 10:17:00]
// update

// [2026-04-01 11:34:00]
// update

// [2026-04-15 10:17:00]
// update

// [2026-04-22 10:17:00]
// update

// [2026-04-25 10:17:00]
// update

// [2026-04-25 11:34:00]
// update

// [2026-04-25 12:51:00]
// update

// [2026-05-04 11:34:00]
// update

// [2026-05-05 09:00:00]
// update

// [2026-05-05 10:17:00]
// update

// [2026-04-23 09:00:00]
// update

// [2026-04-25 09:00:00]
// update

// [2026-05-16 10:17:00]
// update

// [2026-05-23 09:00:00]
// update

// [2026-05-28 10:17:00]
// update

// [2026-05-28 11:34:00]
// update

// [2026-06-14 09:00:00]
// update

// [2026-06-15 11:34:00]
// update

// [2026-07-29 09:00:00]
// update

// [2026-07-29 10:17:00]
// update

// [2026-07-31 09:00:00]
// update

// [2026-01-20 09:00:00]
// update

// [2026-04-13 11:34:00]
// update

// [2026-04-15 10:17:00]
// update

// [2026-04-21 09:00:00]
// update

// [2026-04-21 10:17:00]
// update

// [2026-05-05 09:00:00]
// update

// [2026-05-05 10:17:00]
// update

// [2026-05-26 09:00:00]
// update

// [2026-05-26 10:17:00]
// update

// [2026-06-18 09:00:00]
// update

// [2026-07-17 09:00:00]
// update

// [2026-07-17 10:17:00]
// update

// [2026-07-30 09:00:00]
// update

// [2026-03-15 11:34:00]
// update

// [2026-04-08 10:17:00]
// update

// [2026-04-10 10:17:00]
// update

// [2026-04-25 10:17:00]
// update

// [2026-06-10 10:17:00]
// update
