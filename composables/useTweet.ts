export default () => {
  const postTweet = (formData: any) => {
    const form = new FormData();
    form.append("text", formData.text);

    formData.mediaFiles.forEach((mediaFile: string | Blob, index: string) => {
      form.append("media_file_" + index, mediaFile);
    });

    return useFetchApi("/api/user/tweets", {
      method: "POST",
      body: form,
    });
  };

  return {
    postTweet,
  };
};
