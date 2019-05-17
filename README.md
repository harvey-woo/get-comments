A script that gets documentation comments

## Installation

```
yarn add @cat5th/get-comments
```

or

```
npm i @cat5th/get-comments
```

## Usage

```html
<!DOCTYPE HTML>
<html>
<head></head>
<body>
  <!--hello-->
  <!--hello2-->  
</body>
</html>
```

```javascript
import { getComment, getComments } from '@cat5th/get-comments'

// get singal element
getComment('hello') // => <!--hello-->

// get comments
getComments('hello') // => <!--hello-->,<!--hello2-->

// by function
getComments((elem) => {
  // you can filter elem here 
  return true
}) // => <!--hello-->,<!--hello2-->

// or regexp
getComment(/hello/)

// or undefined means all comments
getComments(undefined)
getComments()

// the 2nd param is used to limit the lookup context
getComments(undefined, document.querySelector('div'))
```

