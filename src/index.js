const _ = require('lodash');

const res1 = {a : {response : {text:'hi'}}, b :60}
const res2 = {a : {response : {text:'hello'}}, c :70}

console.log(_.merge(res1, res2));