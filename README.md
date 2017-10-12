# run-script
Run JavaScript functions easily using new Function


Usage:
```js
import runScript from 'run-script';

const result = runScript('return true;'); // result = true
const result = runScript('return prop;', { prop: 'test' }); // result = 'test'
const result = runScript('return this.prop;', {}, { prop: 'context' }); // result = 'context'
```
