import express from 'express';
import * as test from './databaseQuery'

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  readline.question(`enter user ID? `, async (id) => {
    await test.test3(id);
    readline.close()
  })