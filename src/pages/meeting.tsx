import React, { useCallback, useEffect, useMemo, useState } from 'react';
import 'video.js/dist/video-js.css';

import PlayerVideo from '../components/Player';
import NovoPlayer from '../components/NovoPlayer';
import useMeetingState from '../hooks/useMeetingState';

function MeetingPage() {
  const [novoIntegranteModal, setNovoIntegranteModal] = useState<boolean>(
    false
  );
  const { handleAddPlayer, players } = useMeetingState();

  useEffect(() => {
    window.addEventListener(
      'addPlayer',
      function (e) {
        setNovoIntegranteModal(true);
      },
      false
    );

    const name = sessionStorage.getItem('name');
    if (name) {
      handleAddPlayer(name);
      sessionStorage.removeItem('name');  
    }
  }, []);

  const qtde = useMemo(() => players.length, [players.length]);

  function handleAdicionarIntegrante(nomeNovoIntegrante: string) {
    handleAddPlayer(nomeNovoIntegrante);
  }

  const getColItemSize = useCallback((): string => {
    if (qtde <= 2) {
      return `45%`;
    }

    if (qtde === 3) {
      return '35%';
    }

    if (qtde <= 4) {
      return '42%';
    }

    if (qtde <= 6) {
      return '30%';
    }

    return '22%';
  }, [qtde]);

  const getColItemHeight = useCallback((): string => {
    if (qtde <= 2) {
      return '80%';
    }

    if (qtde <= 4) {
      return '42%';
    }

    if (qtde <= 8) {
      return '30%';
    }

    return '25%';
  }, [qtde]);

  const handleFecharModal = (): void => {
    setNovoIntegranteModal(false);
  };

  const handleAceitar = (nomeNovoIntegrante: string): void => {
    handleAdicionarIntegrante(nomeNovoIntegrante);
    handleFecharModal();
  };

  return (
    <div className=''>
      <div className='h-screen flex justify-center items-start flex-wrap'>
        {players.map((x) => (
          <PlayerVideo
            nome={x}
            height={getColItemHeight()}
            width={getColItemSize()}
          />
        ))}
      </div>
      {novoIntegranteModal ? (
        <NovoPlayer
          handleAceitar={handleAceitar}
          handleRecusar={handleFecharModal}
        />
      ) : null}
    </div>
  );
}

export default MeetingPage;
