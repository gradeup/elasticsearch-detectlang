# elasticsearch-detectlang
> Elasticsearch js plugin for [langdetect](https://github.com/jprante/elasticsearch-langdetect) module

## Install

```
$ npm install elasticsearch-detectlang
```


## Usage

```js
'use strict';

const hosts = ['127.0.0.1'];
const elasticsearch = require('elasticsearch');
const esDetectLang = require('elasticsearch-detectlang');

const client = new elasticsearch.Client({
  hosts,
  plugins: [esDetectLang.plugin],
});

client
	.detectLang({ text: 'Hello World' })
	.then(console.log)
	// => { "languages": [{ "language": "en", "probability": 0.9999955765197549 }] }
```

## API

### client.detectLang({ text }, cb)

#### text.

Type: `string`

The text whose language is to be determined

#### cb

Type: `function`<br>
Default: `noop`

Callback function to be called with result. If missing it returns a promise

## License

MIT © [Nikhil Srivastava](https://twitter.com/_niksrc)
