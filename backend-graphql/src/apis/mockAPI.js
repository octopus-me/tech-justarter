import createHTTPClient from './axios';

const BASE_URL = 'http://localhost:3000';
const TIMEOUT = 5000;

class MockAPI {
  constructor(baseURL, timeout) {
    this.client = createHTTPClient(baseURL, timeout);
  }

  participate() {
    return this.client.get('/experiment/participate');
  }

  // TODO: implement other methods @gilson @ayrton
}

export default new MockAPI(BASE_URL, TIMEOUT);
