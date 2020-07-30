# gcp-nodejs-appengine

Master [![Build Status](https://dev.azure.com/vinaymavi/MCRC/_apis/build/status/myjunior.api-gcp-pass-engine?branchName=master)](https://dev.azure.com/vinaymavi/MCRC/_build/latest?definitionId=4&branchName=master)

Develop [![Build Status](https://dev.azure.com/vinaymavi/MCRC/_apis/build/status/myjunior.api-gcp-pass-engine?branchName=develop)](https://dev.azure.com/vinaymavi/MCRC/_build/latest?definitionId=4&branchName=develop)

User Management Backend service

## Local Development

<!-- TODO Architecure daigram required -->

- Run Development Server

`npm run dev`

### Environment variables

**GOOGLE_APPLICATION_CREDENTIALS**

This environment variable is used for sign-in to GCP account

Export `GOOGLE_APPLICATION_CREDENTIALS` environment variable

`export GOOGLE_APPLICATION_CREDENTIALS='<service-account-key-file>'`

**DEBUG**
This is a boolen flag used to enable and disable `express.js` debugging.

**CORS_WHITE_LIST**

This environment variable is used for white listing the URLs for `CROS` requests.

**JWT_SECRET**

This environment variable is used to configure JWT secret.

**MYJUNIOUR_TASK_SUCCESS_URL**

URL to send success response of the task

**MYJUNIOUR_TASK_ERROR_URL**

URL to send error response of the task

### Documentation

- https://dev.azure.com/vinaymavi/MCRC/_wiki/wikis/MCRC.wiki/25/APIs
- https://documenter.getpostman.com/view/3537864/T1DtfGGQ?version=latest#45f3b74c-e4e8-4285-afdf-04cb68b00b46
