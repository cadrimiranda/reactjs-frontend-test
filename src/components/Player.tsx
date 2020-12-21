import { FunctionComponent, useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import styled from 'styled-components';
import { VolumeOff, VolumeUp } from '@material-ui/icons';

const Container = styled.div`
  position: relative;
  margin: 2px 3px;

  &:hover {
    .background-nome-player {
      display: flex;
    }
  }

  .background-nome-player {
    position: absolute;
    bottom: 0;
    display: none;
    width: auto;
    background-color: #a8a8a8;
    padding: 5px 10px;
    z-index: 200;

    > button {
      margin-right: 10px;
    }

    > p {
      color: white;
    }
  }
`;

const PlayerVideo: FunctionComponent<{
  height: string;
  width: string;
  nome: string;
}> = ({ height, width, nome }) => {
  const [muted, setMuted] = useState<boolean>(true);
  const videoNode = useRef<HTMLVideoElement>();
  const player = useRef<videojs.Player>();

  useEffect(() => {
    if (videoNode.current) {
      player.current = videojs(videoNode.current, {
        sources: [
          {
            src: '//vjs.zencdn.net/v/oceans.mp4',
            type: 'video/mp4',
          },
        ],
        autoplay: true,
        muted,
        controls: false,
        fluid: true,
        loop: true,
        controlBar: {
          volumePanel: {
            inline: false,
          },
        },
      });
    }

    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [videoNode]);

  return (
    <Container style={{ height, width }}>
      <div className='background-nome-player'>
        <button type='button' onClick={() => setMuted(!muted)}>
          {muted ? <VolumeOff style={{ color: 'red' }} /> : <VolumeUp />}
        </button>
        <p>{nome}</p>
      </div>
      <video
        id='video'
        /* @ts-ignore */
        ref={videoNode}
        style={{ width: '100%', height: '100%' }}
        className='video-js'
        muted={muted}
      />
    </Container>
  );
};

export default PlayerVideo;
