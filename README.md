# ajv-uuid

Adds a `uuid` format to [Ajv](https://ajv.js.org).

## Install

```bash
npm i --save @socketkit/ajv-uuid
```

## Setup

```javascript
import Ajv from 'ajv'
import base64 from '@socketkit/ajv-base64'
const ajv = new Ajv()
base64(ajv)
```

## Usage

When defining your JSON schema, use the `format` keyword with ther value set to `uuid`. For example

```json
{
  "type": "object",
  "properties": {
    "uuid": {
      "type": "string",
      "format": "uuid"
    }
  }
}
```
