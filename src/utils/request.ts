import qs from 'querystring';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const request = {
  async get(url: string, data?: any) {
    const response = await fetch(`${baseURL}${url}?${qs.stringify({ ...data })}`);
    return response.json();
  },
};

export default request;
