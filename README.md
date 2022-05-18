# Cloud function with http trigger type
Google Cloud Function triggered by HTTP call. It means that we can directly invoke the function via a HTTPs endpoint.
Runtime: Node.js
This function is simple example of cloud function with http trigger type which send message to Slack channel via webhook. 

#### Guidebook to run this function
 1. Clone this repo
 ```
 git clone git@github.com:lemon57/cloud-function-http-trigger-js.git
 ```
 2. Define Slack webhook url in `.env` file. You can find the webhook url -> [Slack channel webhook](https://api.slack.com/apps/A03FHHA7URG/incoming-webhooks?).
 3. Deploy this function to GC. Wait a few min :coffee:
 ```
 gcloud functions deploy <NAME> <TRIGGER_TYPE> --region=<REGION_NAME> --runtime=<CF_RUNTIME>
 ```
 4. Check that the function deployed successfully: by command or through GCC UI.
 ```
 gcloud functions describe <NAME> --region=<REGION_NAME>
 ```
 5. Invoke function by command:
 ```
 gcloud functions call \
    --data '{"message":"Hello from boozt GCF workshop. Created by {your_name}"}' \
    <NAME> --region=<REGION_NAME>
 ```
 or by `curl` command
 ```
 curl -H "Content-Type: application/json" \
    -X POST \
    -d '{"message":"Trigger GCF by curl command. By {your_name}"}' \
    https://<REGION>-<PROJECT_ID>.cloudfunctions.net/<NAME>
 ```

 Enjoy :fireworks: