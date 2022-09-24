import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const MostPopularList = () => {
  const [mostPopularList, setMostPopularList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getMostPopular = useCallback(async () => {
    const config = {
      params: {
        limit: 10,
        order_by: "rating",
      },
    };
    setIsLoading(true);
    const response = await axios.get("https://api.jikan.moe/v4/anime", config);
    setMostPopularList(response.data.data);

    setIsLoading(false);
    console.log(mostPopularList);
  }, []);

  useEffect(() => {
    getMostPopular();
  }, [getMostPopular]);

  return (
    <section className="most_popular_section">
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          mostPopularList.map((anime) => (
            <SwiperSlide>
              <div className="anime_card" key={anime.mal_id}>
                <div
                  className="card_header"
                  // style={{ backgroundImage: "url(" + anime.animeImg + ")" }}
                >
                  {/* <img src={anime.images.jpg.image_url} alt="Cover" /> */}
                </div>
                <div className="card_body">
                  <p className="releasedate">{Date(anime.aired.from)}</p>
                  <h2 className="title">{anime.title}</h2>
                  <a href={anime.url} target="_blank" rel="noreferrer">
                    <Button
                      className="drawer-button"
                      sx={{
                        textTransform: "none",
                        marginTop: "0.21rem",
                        marginBottom: "1.4rem",
                        color: "#14213D",
                        fontSize: "0.8rem",
                        fontWeight: "bold",

                        // "&:hover": {
                        //   color: "black",
                        // },
                      }}
                    >
                      <span className="fa fa-chevron-right">Watch</span>
                    </Button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}
        ...
      </Swiper>
    </section>
  );
};
