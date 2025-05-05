//define all Api for project, It calls commonApi function
import CommonApi from "./CommonApi";

//upload video api, this fn is called in Add component

export const uploadVideoApi = async (videoData) => {
  return await CommonApi("post", "/allVideos", videoData);
};
