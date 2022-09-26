import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import { drawerWidth } from "../components/NavigationDrawer";
import { Grid, Tooltip } from "@mui/material";
// import required modules
import { Pagination } from "swiper";
import { AnimeSlider } from "../components/AnimeSlider";
import { OnePieceLoadingAnimation } from "../components/LoadingAnimation";

export const TrendingAnimePage = () => {
  const [newAnimeList, setNewAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getAnimeList = useCallback(async () => {
    const config = {
      params: {
        order_by: "start_date",
        limit: 24,
        page: page,
      },
    };
    setIsLoading(true);
    const response = await axios.get("https://api.jikan.moe/v4/anime", config);
    setNewAnimeList(response.data.data);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    getAnimeList();
    console.log(newAnimeList);
  }, [getAnimeList]);

  return (
    <div
      className="container"
      style={{
        marginLeft: `${drawerWidth}px`,
      }}
    >
      {isLoading ? (
        <OnePieceLoadingAnimation />
      ) : (
        <div>
          <div className="slider_section">
            <Swiper pagination={true} modules={[Pagination]}>
              {newAnimeList.map((anime) => (
                <SwiperSlide key={anime.mal_id}>
                  <AnimeSlider
                    image_url={anime.images.webp.large_image_url}
                    title={anime.title}
                    status={anime.status}
                    synopsis={anime.synopsis}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="anime_content">
            <Grid sx={{ flexGrow: 1 }} container spacing={8}>
              {newAnimeList.map((anime) => (
                <Grid key={anime.mal_id} item xs={12} sm={6} md={4} lg={3}>
                  <Tooltip
                    title={
                      anime.synopsis == null ? (
                        <p style={{ fontSize: "1rem" }}>No Synopsis</p>
                      ) : (
                        <p style={{ fontSize: "1rem" }}>{anime.synopsis}</p>
                      )
                    }
                    followCursor
                  >
                    <div
                      className="anime_card"
                      style={{
                        backgroundImage:
                          'url("' + anime.images.webp.large_image_url + '")',
                      }}
                    >
                      <div className="anime_card_content">
                        <h3>{anime.title}</h3>
                      </div>
                    </div>
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
};
{
  /* <AnimeCard
  image_url={anime.images.webp.large_image_url}
  title={anime.title}
  synopsis={anime.synopsis}
/>; */
}
