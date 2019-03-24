[![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/bookmarklet/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/bookmarklet)
[![CodeFactor Score](https://www.codefactor.io/repository/github/Richienb/bookmarklet/badge?style=for-the-badge)](https://www.codefactor.io/repository/github/Richienb/bookmarklet)

# Bookmarklet

[![NPM](https://nodei.co/npm/bookmarklet.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bookmarklet)

A cross-browser solution to bookmarking a URL.

## Importing

From your NodeJS application:

```js
const Bookmarklet = require("bookmarklet")
```

From your web application:

```html
<script src="https://unpkg.com/bookmarklet/bookmarklet.min.js"></script>
```

## Usage

```js
Bookmarklet(
    {
        url: "https://example.com", // URL
        title: "Example Website" // Title (Default: Automatically detected)
        useFallBack: true // Show bookmark instructions if needed (Default: True)
    }
)
```
