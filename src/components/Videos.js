import Video from './Video';
import { Link } from 'react-router-dom'
import UserVideoList from '../hooks/UserVideoList';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videoList, hasmore } = UserVideoList(page);
  return (
    <div>
      {videoList.length > 0 && videoList.map((userVideo, index) => (

        userVideo.length > 0 &&
        (
          <InfiniteScroll dataLength={userVideo.length} hasMore={hasmore} next={() => setPage(page + 8)} key={index + 1}>
            {userVideo.map((data, index) => (
              data.noq > 0 ? (
                <Link to={`/quiz/${data.youtubeID}`} key={index + 1}>
                  <Video title={data.title} id={data.youtubeID} noq={data.noq} />
                </Link>
              ) : (
                <Video title={data.title} id={data.youtubeID} noq={data.noq}  key={index + 1}/>
              )

            ))}
          </InfiniteScroll>
        )
      ))
      }

      {!loading && videoList.length === 0 && (<div>No data found</div>)}
      {error && (<div>No data found</div>)}
      {loading && (<div>Loading .....</div>)}
    </div>
  );
}
