#!/usr/bin/env node
import readlineSync from 'readline-sync';
export const name = str => readlineSync.question(str);


