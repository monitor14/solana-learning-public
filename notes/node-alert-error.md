# Why `alert is not defined` in Node.js

## Problem
I found some error when I put the alert keyword with script in Node.js ,it can't work ,but it was working with console.log.

## Cause
I search the information about this , then I understood alert user in browser , and console.log use in Node.js . 


## Fix
Use in browser 
```js
   alert ("Hello");
```

Use in Node.js 
```js
   console.log("Hello");
```

## Takeaway
I understand two different EVN and use different way to show. 
