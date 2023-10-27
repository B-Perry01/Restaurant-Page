import {default as pageLoad} from "./pageLoad";"./pageLoad.js";

if (process.env.NODE_ENV !== 'production') {
    console.log('Development mode!');
  }

pageLoad();