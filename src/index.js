#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default (str) => readlineSync.question(str);
