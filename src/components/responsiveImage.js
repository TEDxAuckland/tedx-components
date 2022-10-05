export function addHost(host, image) {
  return `${host}${image}`;
}

export function getResizedImage(host, image, width) {
  const imageName = image.replace(/^\/uploads\//, '').replace(/.jpg$/, '');
  return addHost(host, `/assets/resized/${imageName}-${width}.jpg`)
}
