import React from 'react';
import { VideoCardGroupContainer, VideoCardList, Title, ExtraLink, VideoCardTitle } from './styles';
import VideoCard from './components/VideoCard';

function VideoCardGroup({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryText = category.text;
  const categoryColor = category.cor;
  const categoryLink = category.link;
  const videos = category.videos;
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
      <VideoCardList>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
			  <VideoCardTitle>{video.titulo}</VideoCardTitle>
            </li>
          );
        })}
      </VideoCardList>
    </VideoCardGroupContainer>
  );
}

export default VideoCardGroup;