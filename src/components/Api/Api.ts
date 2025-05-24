import axios from "axios";
import { UnsplashResponse } from "../types";

const API_KEY = "otlkal3vSHjIR6JX_6DdywDqgynWnyfsOiMAhCs4sAE";

export const getPhotos = async (
  topic = "",
  page = 1
): Promise<UnsplashResponse> => {
  const res = await axios.get<UnsplashResponse>(
    "https://api.unsplash.com/search/photos",
    {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
      params: {
        query: topic,
        per_page: 10,
        orientation: "landscape",
        page,
      },
    }
  );
  return res.data;
};
