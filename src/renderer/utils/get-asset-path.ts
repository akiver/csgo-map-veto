import path from 'path'

/**
 * Return the correct path to a static asset from the "static" folder.
 * When running in dev mode, webpack dev server try to get assets from webpack-dev-server:
 * http://localhost:9000/static/images/img.png
 * But the correct "path" is:
 * http://localhost:9000/images/img.png
 */
const getAssetPath = (assetPath: string) => {
  if (process.env.NODE_ENV !== 'production') {
    return `./${assetPath}`
  }

  return path.join(__static, assetPath)
}

export { getAssetPath }
