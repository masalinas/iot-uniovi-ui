
declare var ENV;

export const environment = {
  production: true,
  basePath: ENV.basePath === '$BASE_PATH' ? 'http://127.0.0.1:3000' : ENV.basePath,
  brokerPath: ENV.brokerPath === '$BROKER_PATH' ? 'http://localhost:8080' : ENV.brokerPath,
  brokerDeviceTopic: ENV.brokerDeviceTopic === '$BROKER_DEVICE_TOPIC' ? 'uniovi/poc/#' : ENV.brokerDeviceTopic,
  brokerFeedbackTopic: ENV.brokerFeedbackTopic === '$BROKER_FEEDBACK_TOPIC' ? 'uniovi/poc/feedback' : ENV.brokerFeedbackTopic
};
