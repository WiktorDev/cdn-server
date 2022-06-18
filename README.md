# cdn-server
File cdn server
Demo: https://cdn.wiktor.tech/

## Setup
 - Edit a config.json file
 - Create ``files`` directory in ``/public/``
 - Rename tokens.example.json to tokens.json

## Create new token
Run command ``npm run create``
Enter username and token length

## Run app
Run command ``npm start``

## Endpoints

### POST /upload
Upload file

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `token` | required | string  | The auth token for authorization user                                                                     |
|     `file` | required | file  | The file you want to send                                                                   |
