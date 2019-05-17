# get-comments

[![npm version](https://img.shields.io/npm/v/@cat5th/get-comments.svg?style=flat-square)](https://www.npmjs.com/package/@cat5th/get-comments)
[![coverage](https://img.shields.io/codecov/c/github/harvey-woo/get-comments.svg?style=flat-square)](https://codecov.io/gh/harvey-woo/get-comments)
[![npm downloads](https://img.shields.io/npm/dt/@cat5th/get-comments.svg?style=flat-square)](https://www.npmjs.com/package/@cat5th/get-comments)
[![Build Status](https://img.shields.io/travis/harvey-woo/get-comments.svg?style=flat-square)](https://travis-ci.org/harvey-woo/get-comments)

A script that gets document comments

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

// get a single element
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

