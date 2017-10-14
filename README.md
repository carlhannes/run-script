# run-script
`runScript('return true;'); // returns true` - Dead simple eval execution.

Please note: this is a simple wrapper for creating new dynamic functions, similar to eval, which has performance and security issues. You may have heard "eval is evil", and while eval and `new Function()` can be harmful, it exists for a reason. 
To read up on this, check out [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function][new Function()] and [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval][eval()]

Some circumstances when invoking scripts is a good thing:
* Hot-loading mechanisms (although you might prefer swapping script-elements when using a browser)
* "Playgrounds" such as CodePen, JSFiddle or JSBin
* Creating interactive coding tutorials
* Mimicing quick-search bars such as the Mac `cmd+space` Spotlight search tool (for adding, subtracting etc for example)

However, please refrain from using `eval()`, `new Function` or this `run-script` needlessly, if you want to convert to/from JSON, consider using `JSON.parse` and `JSON.stringify` instead. Same goes for any kind of serializing.

## Usage
```js
import runScript from 'run-script';

/*
runScript(
  script = 'string',
  arguments = {object}, (OPTIONAL) - arguments to be passed to the function, key/value object
  context = {object}, (OPTIONAL) - what to put as `this`
);
*/

const result = runScript('return true;'); // result = true
const result = runScript('return prop;', { prop: 'test' }); // result = 'test'
const result = runScript('return this.prop;', {}, { prop: 'context' }); // result = 'context'
```

