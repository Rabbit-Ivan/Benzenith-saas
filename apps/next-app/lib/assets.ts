const assetVersion = process.env.NEXT_PUBLIC_ASSET_VERSION ?? "v1";

export const withAssetVersion = (path: string) => {
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}v=${assetVersion}`;
};
