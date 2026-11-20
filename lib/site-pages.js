import metadata from '../data/pages.json';
export function pageNames() { return Object.keys(metadata).filter(name => name !== '404.html'); }
export function loadPage(name) { return metadata[name]; }
