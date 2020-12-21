import { useEffect, useState } from 'react';

const useMeetingState = () => {
  const [players, setPlayers] = useState<string[]>([]);

  useEffect(() => {
    if (window.performance) {
      if (performance.navigation.type == 1) {
        let estadoSalvo = sessionStorage.getItem('state') || '';
        estadoSalvo = JSON.parse(estadoSalvo);
        if (Array.isArray(estadoSalvo)) {
          setPlayers(estadoSalvo);
        }
      }
    }
  }, [window.performance]);

  const handleAddPlayer = (name: string): void => {
    const newPlayers = [...players, name];
    sessionStorage.setItem('state', JSON.stringify(newPlayers));
    setPlayers(newPlayers);
  };

  const handleRemovePlayer = (name: string): void => {
    const newPlayers = players.filter(
      (x) => x.toLocaleLowerCase() !== name.toLocaleLowerCase()
    );
    setPlayers(newPlayers);
  };

  return { players, handleAddPlayer, handleRemovePlayer };
};

export default useMeetingState;
