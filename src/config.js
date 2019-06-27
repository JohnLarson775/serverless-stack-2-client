const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-1crv46ac7lw3g"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://olt81zovnb.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_v2CcDsbMr",
    APP_CLIENT_ID: "6u0ftcj3pjtqv54ack5m70ga39",
    IDENTITY_POOL_ID: "us-east-1:127a0831-57c9-4ee8-b5ca-79885af364f4"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-serverlessdeploymentbucket-k8wwqc79vq13"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://c6e35t4tgc.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ckO1DGl05",
    APP_CLIENT_ID: "417fmgsg875256n07h3c0f2gst",
    IDENTITY_POOL_ID: "us-east-1:c081e91d-8aea-40b0-86ae-7e5fa12620c2"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};