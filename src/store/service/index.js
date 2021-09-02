import axios from 'axios';

const apiHeader = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
};

class Service {
  async getRequest(api) {
    const response = await axios.get(
      api,
      {
        headers: apiHeader(),
      },
    );

    try {
      return response.data;
    } catch (error) {
      return error;
    }
  };
};

export default new Service();