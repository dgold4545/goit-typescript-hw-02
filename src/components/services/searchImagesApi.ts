import axios from "axios";
import { FetchImages } from "../App/App.types";

const createApi = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID hwWs5KXFx0JpzqD3vIsMGdy9xAvhR9aLwupMziIehuA",
  },
});

export default async function fetchImagesWithQuery(query:string, page: number): Promise<FetchImages> {
  const params = {
    query,
    page,
    per_page: 12,
    orientation: "landscape",
  };

  const { data } = await createApi.get<FetchImages>("search/photos", { params });
  return data;
}

