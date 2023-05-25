export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: 'Loading...',
    message: 'Data is being loaded, Please wait',
  },
  success: {
    title: 'Success',
    message: 'Data is being loaded, Please wait',
  },
  responseFailure: {
    title: 'Error',
    message:
      'An error occured while fetching response from the server. Please try again',
  },
  requestFailure: {
    title: 'Error',
    message: 'An error occured while parsing request data',
  },
  networkFailure: {
    title: 'Error',
    message:
      'Unable to connect with the server. Please check internet connectivity and tyr again later',
  },
};

//API SERVICE CALL SAMPLE
// NEED SERVICE CALL: {url: '/...', method: 'POST/GET/DELETE/PUT', params: true/false, query: true/false}

export const SERVICE_URLS = {
  userSignup: { url: '/signup', method: 'POST' },
  userLogin: { url: '/login', method: 'POST' },
  uploadFile: { url: '/file/upload', method: 'POST' },
  createPost: { url: 'create', method: 'POST' },
  getAllPosts: { url: '/posts', method: 'GET', params: true },
  deletePost: { url: 'delete', method: 'DELETE', query: true },
  getPostById: { url: 'post', method: 'GET', query: true },
  newComment: { url: '/comment/new', method: 'POST' },
  getAllComments: { url: 'comments', method: 'GET', query: true },
  deleteComment: { url: 'comment/delete', method: 'DELETE', query: true },
  updatePost: { url: 'update', method: 'PUT', query: true },
  getRefreshToken: { url: '/token', method: 'POST' },
};
