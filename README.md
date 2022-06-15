# cdn-server
File cdn server

## Setup
 - Edit a config.json file
 - Rename tokens.example.json to tokens.json

## Create new token
Run command ``npm run create``
Enter username and token length

## Run app
Run command ``npm start``

## Endpoints

### GET /1/billing/retrieve-billing-data.json
Get basics billing data for the current user or for a given organization ID (as long as the current user is part of that organization). (it has been poorly implemented for now to unblock the Analyze team, and should only be used by Analyze) `official client only`

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `product` | required | string  | The product for which to perform the action. <br/><br/> Supported values: `publish` or `analyze`.                                                                     |
|     `organization_id` | optional | string  | The organization ID for which to perform the action. <br/><br/> Default is `null`. <br/><br/> If passed, we will check if the user is part of that organization before returning any information.                                                                     |
