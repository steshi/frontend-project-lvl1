#!/usr/bin/env node
import readlineSync from 'readline-sync';
export const name = (str) => {
 const result = readlineSync.question(str);
 return result;
 };

