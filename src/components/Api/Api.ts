import axios from "axios";

const API_KEY = "otlkal3vSHjIR6JX_6DdywDqgynWnyfsOiMAhCs4sAE";

export interface UnsplashUser {
  name: string;
}

export interface UnsplashUrls {
  small: string;
  regular: string;
}

export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: UnsplashUrls;
  user: UnsplashUser;
  likes: number;
}

export interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

export const getPhotos = async (
  topic: string = "",
  page: number = 1
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
