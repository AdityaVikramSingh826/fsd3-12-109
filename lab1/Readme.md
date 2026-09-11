# EventLoop 

JS is a synchronous and single threaded byfault 
 
 ## there can be async behaviour 

- with  browserAPI-
setTimeout ,setInterval , setImmediate , nextTick<br>
- with Promises<br>
- with Event handlers

### Important Topic 
- promises
- synchr and asynchr

## Promise
- A function not executed immediately but it must be executed after a while.
- It has some status during the execution.
- At final it may resolve ()=>seccess ; reject=>unsuccess 

## CALL BACK FUNCTION
- That as argument or the parameter to another function.

## Modern javascript is divided into two categories:
- 1)CommonJS (.cjs)-> supports OOPS -> require
  - priority (nextTick,promise,setImmediate/setTimeout)
- 2)ModuleJS(.mjs)-> follow modular approach -> import
  - priority (promise,nextTick,setImmediate/setTimeout)
