#!/usr/bin/env node
const isValid = require('is-valid-path');

/**
 * Validar si es una ruta válida o no
 * @param  {string}
 * @return  {boolean}
 */
export const validatePath = (path) => (isValid(path) ? true : false);

/**
 * Leer el path y preguntar si la ruta es absoluta, si es relativa la convierte en absoluta
 * @param  {string}
 * @return  {string}
 * if(path isAbolute() return path)
 * if(path isRelative() convertToAbsolute)
 * path.resolve() => convierte a ruta absoluta
 */
export const getAbsolutePath = (path) => path;
