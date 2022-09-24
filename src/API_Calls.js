import axios from "axios";

export const getMangaList = async () => {
  const response = await axios
    .get("https://api.mangadex.org/manga", { params: { limit: 50 } })
    .then((res) => {
      const data = res.data.data;
      console.log(data);
      return data;
    });
};
