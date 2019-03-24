[![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/bookmarker/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/bookmarker)
[![CodeFactor Score](https://www.codefactor.io/repository/github/Richienb/bookmarker/badge?style=for-the-badge)](https://www.codefactor.io/repository/github/Richienb/bookmarker)

# Bookmarker

[![NPM](https://nodei.co/npm/bookmarker.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bookmarker)

A cross-browser solution to bookmarking a URL.

## Importing

From your NodeJS application:

```js
const Bookmarker = require("bookmarker")
```

From your web application:

```html
<script src="https://unpkg.com/bookmarker/bookmarker.min.js"></script>
```

## Usage

```js
Bookmarker(
    {
        url: "https://example.com", // URL
        title: "Example Website" // Title (Default: Automatically detected)
        useFallBack: true // Show bookmark instructions if needed (Default: True)
    }
)
```
