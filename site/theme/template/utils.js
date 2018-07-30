export function obj2arr(obj) {
  return Object.keys(obj).reduce((p, n) => (p.push(obj[n]), p), []);
}

export function ping(callback) {
  // eslint-disable-next-line
  const url = 'https://private-a' + 'lipay' + 'objects.alip' + 'ay.com/alip' + 'ay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png';
  const img = new Image();
  let done;
  const finish = (status) => {
    if (!done) {
      done = true;
      img.src = '';
      callback(status);
    }
  };
  img.onload = () => finish('responded');
  img.onerror = () => finish('error');
  img.src = url;
  return setTimeout(() => finish('timeout'), 1500);
}