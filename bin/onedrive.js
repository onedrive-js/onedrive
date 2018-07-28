#!/usr/bin/env node
const program = require('commander');

program
  .version('0.0.1')
  .command('auth', 'authenticate OneDrive and retrieve a refresh token')
  .command('watch <directory>', 'sync a directory with OneDrive and watch for cahgnes')
  .parse(process.argv);
