# Production Ready Blog Template [![renovate-app badge][renovate-badge]][renovate-app] [![CircleCI](https://circleci.com/gh/italoayres/ready-next-blog.svg?style=svg)](https://circleci.com/gh/italoayres/ready-next-blog)

Powered by NextJS, Zeit NOW, Netlify CMS 

## Install and run

```sh
npm install
npm run dev
npm run debug
npm run e2e
```

## Coverage

The tests are instrumented following the instructions in [Cypress code coverage guide](https://on.cypress.io/code-coverage). In particular, the front-end is instrumented using [.babelrc](.babelrc) file like

```json
{
  "presets": ["next/babel"],
  "plugins": ["istanbul"]
}
```

When you run tests, the code coverage report is saved in `coverage` folder. There are reports in several formats, but open the HTML one for human-readable report.

```shell
$ open coverage/lcov-report/index.html
```

![Code coverage report](images/report.png)

To fetch the server-side code coverage, the `@cypress/code-coverage` plugin needs an endpoint. This endpoint is implemented in [pages/api/__coverage__.js](pages/api/__coverage__.js) file following the [Next.js API convention](https://nextjs.org/docs#api-routes). This endpoint just returns the existing global coverage object or `null`


## Cypress

- [Cypress code coverage guide](https://on.cypress.io/code-coverage)

### Small print

Author: Italo Ayres &lt;italoayres@gmail.com&gt; &copy; 2020

* [@ayresitalo](https://twitter.com/ayresitalo)
* [italoayres.com](https://italoayres.com)
* [blog](https://italoayres.com/blog)

## MIT License

Copyright (c) 2019 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
