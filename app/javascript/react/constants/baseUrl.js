let baseUrl;

switch (process.env.NODE_ENV) {
  case 'production':
    baseUrl = 'https://polity.enthusiastick.io'
    break;
  default:
    baseUrl = 'http://localhost:3000'
}

export default baseUrl;
