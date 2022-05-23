const images = import.meta.globEager('./maps/*.png');

export function getMapImageSrcFromMapName(mapName: string) {
  for (const path of Object.keys(images)) {
    if (path.includes(mapName)) {
      return images[path].default;
    }
  }

  return undefined;
}
