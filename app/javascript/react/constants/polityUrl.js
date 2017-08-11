let polityUrl;

switch (process.env.NODE_ENV) {
  case 'production':
    polityUrl = 'https://polity.enthusiastick.io'
    break;
  default:
    polityUrl = 'http://localhost:3000'
}

export default polityUrl;
