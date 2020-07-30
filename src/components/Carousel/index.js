import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink, VideoCardTitle } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem} from './components/Slider';
import { ThemeProvider } from "styled-components";

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryText = category.text;
  const categoryColor = category.cor;
  const categoryLink = category.link;
  const videos = category.videos;

  const theme = {
    main: categoryColor
  };

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryLink && 
            <ExtraLink href={categoryLink} target="_blank">
              {categoryText}  
            </ExtraLink>
          }
        </>
      )}
      <ThemeProvider theme={theme}>

        <Slider>
          {videos.map((video, index) => {
            if (ignoreFirstVideo && index === 0) {
              return null;
            }

            return (
              <SliderItem key={video.titulo}>
                <VideoCard
                  videoTitle={video.titulo}
                  videoURL={video.url}
                  categoryColor={categoryColor}
                />
                <VideoCardTitle>{video.titulo}</VideoCardTitle>
              </SliderItem>
            );
          })}
        </Slider>
      </ThemeProvider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;