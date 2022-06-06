// example config.js file
// the actual file should be ignored by git
// based on the articles below
//(1) https://medium.com/@peterpme/environment-variables-in-expo-using-release-channels-4934594c5307
//(2) https://alxmrtnz.com/thoughts/2019/03/12/environment-variables-and-workflow-in-expo.html

// code based on (2)
import Constants from 'expo-constants'

const ENV = {
  dev: {
    amplitudeApiKey: null,
  },
  staging: {
    // Add keys you want here
  },
  prod: {
    // Add keys you want here
  },
}

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.dev
  } else if (env === 'staging') {
    return ENV.staging
  } else if (env === 'prod') {
    return ENV.prod
  }
}

export default getEnvVars
