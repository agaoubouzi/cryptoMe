import React, { useEffect } from 'react';
import { getNews } from '../../actions/cryptoActions';
import { useDispatch, useSelector } from "react-redux";
import InfiniteCarousel from 'react-leaf-carousel';
import Post from "./post"
import PostPlaceholder from "../../Placeholders/postPlaceholder"

import './news.scss';




const News = () => {
  const dispatch = useDispatch();
  const fetchData = () => dispatch(getNews());

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const newsData = useSelector(state => state.crypto.newsData)



  return (
    <div className="news">
      {newsData.length !== 0 ? (
        <>
          <h2 className="h2-title">Todays Cryptocurrency <span className="toggle"><span>Prices</span><span>News</span></span></h2>
          <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 968,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              }
            ]}
            sidesOpacity={.9}
            sideSize={3}
            lazyLoad={true}
            autoCycle={true}
            slidesToScroll={1}
            slidesToShow={4}
            scrollOnDevice={false}
          >
            {
              newsData.map((news, key) => <Post key={key} post={news} />)
            }
          </InfiniteCarousel>
        </>
      ) : (
        <>
          <PostPlaceholder />
        </>
      )
      }
    </div>
  );
}


export default News;