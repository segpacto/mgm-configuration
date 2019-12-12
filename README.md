# afm-graphql

Name           | Description
:------------- | :-----------------------------------------------------------------------------
Language       | ES6 / Node.js
Main Framework | [moleculer](https://github.com/moleculerjs/moleculer)

## Description
This a Service to storage Clients configurations based on Tenants. Could be used for systems or users.

## TODO
* Implementation of Test
* Implement a swagger based documentation
* Implementation `deleteConfiguration`

## Development

### Run the app locally

```bash
npm run dev
```
By default the service should be available on `http://0.0.0.0:3001/` on path `configuration-api`

### Sample of Curl actions :
* Create configuration :
  `curl --request GET \
    --url http://localhost:3001/configuration-api/createConfiguration \
    --header 'content-type: application/json' \
    --data '{
    "tenant": "local",
    "clientId": "1234567890",
    "configuration": {
      "test" : "testing",
      "asdada": 1
    }
  }'`
*  Get configuration:
  `curl --request GET \
    --url http://localhost:3001/configuration-api/getConfiguration \
    --header 'content-type: application/json' \
    --data '{
    "tenant": "local",
    "clientId": "123456789aa0"
  }'`
* Update configuration:
  `curl --request GET \
    --url http://localhost:3001/configuration-api/updateConfiguration \
    --header 'content-type: application/json' \
    --data '{
    "tenant": "local",
    "clientId": "123456789aa0",
    "configuration": {
      "test" : "testing",
      "asdada": 13423422
    }
  }'`


### Run tests
There are not yet Tests implemented.

## Directory structure

* `src/config/`: default config gets merged with env configs
* `src/models/`: MongoDb models
* `helm/`: kubernetes configuration
* `src/services/`: Services available on the Microservice


