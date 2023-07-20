export const mediaFileTransformer = (mediaFile: { id: any; url: any; }) => {
  return {
    id: mediaFile.id,
    url: mediaFile.url,
  };
};
