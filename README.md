# Cloud function with http trigger type
Google Cloud Function triggered by HTTP call. It means that we can directly invoke the function via a HTTPs endpoint.

This function is simple example of cloud function with http trigger type which send message to Slack channel via webhook. 
We will use test slack channel `test-webshop-cf` to test how this function works.

Runtime: Node.js

#### Guidebook to run this function
 1. Clone this repo
 ```
 git clone git@github.com:lemon57/cloud-function-http-trigger-js.git
 ```
 2. Define Slack webhook url in `.env` file. You can find the webhook url -> [Slack channel webhook](https://api.slack.com/apps/A03FHHA7URG/incoming-webhooks?).
 3. Deploy this function to GC. Wait a few min :coffee:
 ```
 gcloud functions deploy <CF_NAME> <TRIGGER_TYPE> \
  --region=<REGION_NAME> \
  --runtime=<CF_RUNTIME>
 ```
 Replace CF_NAME by your own name of this function.\
 Replace TRIGGER_TYPE by correct trigger type for current function. In this case it is `--trigger-http`\
 Replace REGION_NAME by region of current project, in our case is `europe-west1`\
 Replace CF_RUNTIME by actual runtime, in our case is `nodejs16`.
 
 4. Check that the function deployed successfully: by command or through GCC UI.
 ```
 gcloud functions describe <CF_NAME> --region=<REGION_NAME>
 ```
 5. Invoke function by command:
 ```
 gcloud functions call \
    --data '{"message":"Hello from boozt GCF workshop. Created by {your_name}"}' \
    <CF_NAME> --region=<REGION_NAME>
 ```
 or by `curl` command
 ```
 curl -H "Content-Type: application/json" \
    -X POST \
    -d '{"message":"Trigger GCF by curl command. By {your_name}"}' \
    https://<REGION>-<PROJECT_ID>.cloudfunctions.net/<NAME>
 ```
 6. Check the logs:
 ```
 gcloud functions logs read --execution-id=<EXECUTION_ID> --region=<REGION_NAME>
 ```
 Take `EXECUTION_ID` from the output after executing the command: `gcloud functions call`.
 7. Check slack channel `test-webshop-cf` 

 Enjoy :fireworks:
