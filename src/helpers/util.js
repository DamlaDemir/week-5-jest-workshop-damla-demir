export function isResponseOk(response) {
  return response && response.status === 200 && response.data;
}
