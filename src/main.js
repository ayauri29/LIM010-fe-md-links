const isValid = require('is-valid-path');
const path = require('path');
const slash = require('slash');

export const validatePath = (firstPath) => {
  if (isValid(firstPath)) {
    return true;
  }
  return false;
};

export const getAbsolutePath = (firstPath) => {
  if (path.isAbsolute(firstPath)) {
    return firstPath;
  }
  return slash(path.resolve(firstPath));
};
