const nxPreset = require('@nx/jest/preset').default;

module.exports = { ...nxPreset };


// Jest: Cannot use import statement outside a module
// https://github.com/nrwl/nx/issues/14001
process.env = Object.assign(process.env, {
  NODE_ENV: 'test',
});
