#List for FP
##### By Yiyi Wang    
list data structure for functional programming

##### How to use
include <strong> list.js </strong>
##### Code Structure
> $List   
*       . first
*       . rest  
> $List.prototype.length  
> $List.prototype.toString  
> $List.prototype.reverse  
> $List.prototype.slice  
> $List.prototype.ref  
> $List.prototype.append  
> $List.prototype.toArray      
> $List.prototype.forEach    
> $List.prototype.foreach      
> $List.prototype.map      

> list  
> cons  
> car  
> cdr  

##### API (demo under ECMAScript 6 (ECMAScript 5 Compatible))
###### create list  
```javascript
 var x = list(1, 2, 3, 4);
 var y = list(3, 4, 5, 6);
```
###### cons list (like lisp)
```javascript
var x = cons(1, cons(2, cons(3, cons(4, null))));
var y = cons(2, 3);
```

###### access element in list (like lisp)
```javascript
var x = list(1, 2, 3, 4);
car(x);                              // 1              get first element
cdr(x);                              // (2, 3, 4)      get rest elements
```
  or
```javascript
var x = list(1, 2, 3);
x.first                             // 1             get first element
x.rest                              // (2, 3, 4)     get rest element
```
###### toString
```javascript
var x = list(1, 2, 3);
console.log(x.toString());          // string "(1, 2, 3)"          
```
###### length
```javascript
var x = list(1, 2, 3);
x.length();                        // 3
```
###### reverse
```javascript
var x = list(1, 2, 3);
x.reverse();                       // (3, 2, 1)
```
###### slice
```javascript
var x = list(1, 2, 3, 4, 5, 6);
x.slice(2);                           // (3, 4, 5, 6)        slice starting from 2
x.slice(-2);                          // (5, 6)  slice 2 elements from end
x.slice(2, 4);                        // (3, 4)  slice between offsets 2 and 4  [2, 4)
```

###### ref
```javascript
var x = list(1, 2, 3, 4, 5, 6);
x.ref(1);                            // 2
x.ref(-2)                            // 5
```
###### append
```javascript
var x = list(1, 2, 3); 
x.append(4, 5);                     // (1, 2, 3, 4, 5)
x.append(4);                        // (1, 2, 3, 4)
```

###### toArray
```javascript
var x = list(1, 2, 3);
x.toArray();                       // [1, 2, 3]
```

###### forEach / foreach
```javascript
var x = list(1, 2, 3, 4, 5, 6);
x.foreach(i => console.log(i));    // 1 2 3 4 5 6
```

###### map
```javascript
var x = list(1, 2, 3);
x.map(i => i * 2);                // (2, 4, 6)
```

###### filter
```javascript
var x = list(-3, 4, -12, 7, 10, -1);
x.filter(i => i > 0);            // (4, 7, 10)
```
==============================================================================================  
The MIT License (MIT)
Copyright (c) 2014 YiyiWang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
