//define all Api for project, It calls commonApi function
import CommonApi from "./CommonApi";

//upload video api, this fn is called in Add component

export const uploadVideoApi = async (videoData) => {
  return await CommonApi("post", "/allVideos", videoData);
};

//get video api, this fn is called in AllVideos component
export const getVideoApi = async () => {
  return await CommonApi("get", "/allVideos", "");
};

export const addHistory = async (historyData) => {
  return await CommonApi("post", "/allHistory", historyData);
};

export const getHistoryApi = async () => {
  return await CommonApi("get", "/allHistory", "")
};

export const deleteHistoryApi = async (id) => {
  return await CommonApi('delete', `/allHistory/${id}`, {});
};

export const deleteVideoApi = async (id) => {
  return await CommonApi("delete", `/allVideos/${id}`, {});
}

export const addCategoryApi = async (category) => {
  return await CommonApi("post", "/allCategories", category)
}

export const getCategoryApi = async () => {
  return await CommonApi("get", "/allCategories", " ");
}