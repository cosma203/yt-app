import axios from 'axios';

const KEY = 'AIzaSyBlG38oRgM4vn6OeAWm6ovnL-RthoL7ptI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { part: 'snippet', type: 'video', maxResults: 5, key: KEY },
});
