export function groupBy(key: string, array: any[]) {
  return array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});
}

export function getInitialsFromName(name: string): string {
  const names = name.split(' ');
  let initialName = names[0].substring(0, 1).toUpperCase();
  if (names.length > 1) {
    let index = names.length - 1;
    while (true) {
      if (names[index] === '') {
        index--;
      } else {
        break;
      }
    }
    initialName += (index > 0 ) ? names[index].substring(0, 1).toUpperCase() : '';
  }
  return initialName;
}

export function getBase64ImageFromURL(url) {
  return new Promise<string>((resolve, reject) => {
    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL('image/png');
      resolve(dataURL);
    };
    img.onerror = error => {
      reject(error);
    };
    img.src = url;
  });
}
