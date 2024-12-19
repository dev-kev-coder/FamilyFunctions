import React from 'react';
import GameCard from './components/GameCard';

const App = () => {
  const handleHostOnClick = () => {
    const socket = new WebSocket('https://localhost:44369/');

    socket.addEventListener('open', (e) => {
      socket.send(
        'connection was detected as open here is a message from the server'
      );
    });

    socket.addEventListener('message', (e) => {
      console.log('Payload received from Server...', e.data);
    });

    socket.addEventListener('close', (e) => {
      // This ran even though there was never a successful connection
      console.log('Connection to server has been killed');
    });

    console.log('This is the hanlde on click');
  };

  return (
    <div>
      <GameCard
        FrontCardContent={<h2 className="card-title">Letters</h2>}
        BackCardContent={
          <>
            <p className="card-description">
              Can you guess answer all the questions in time?
            </p>

            <div className="card-button-container">
              <button className="btn-neon-ripple" onClick={handleHostOnClick}>
                Host
              </button>
              <button className="btn-neon-ripple">Join</button>
            </div>
          </>
        }
      />
    </div>
  );
};

export default App;
