import React from 'react';
import './App.css';
import { FaYoutube } from "react-icons/fa";

function App() {
  const videos = [
    { id: 1, title: "Krishna ", url: "https://www.youtube.com/watch?v=CeprkZEQQAU" },
    { id: 2, title: "DAOKO × Kenshi Yonezu “Fireworks” MUSIC VIDEO", url: "https://www.youtube.com/watch?v=-tKVN2mAKRI" },
    { id: 3, title: "Uchiagehanabi", url: "https://www.youtube.com/watch?v=aml2a_5vptY" },
    { id: 4, title: "Haiirotoao (+ Masaki Suda)", url: "https://www.youtube.com/watch?v=xhqb7JJvK6Y" },
    { id: 5, title: "The Rock ", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { id: 6, title: "teach to comedy", url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ" },
    { id: 7, title: "Kenshi Yonezu - Spinning Globe (Hayao Miyazaki, The Boy and The Heron)", url: "https://www.youtube.com/watch?v=abKcYyQ1V7Y" },
    { id: 8, title: "Trying to play", url: "https://www.youtube.com/watch?v=5NV6Rdv1a3I" }, 
    { id: 9, title: "Marshmello ft. Bastille - Happier (Official Music Video)", url: "https://www.youtube.com/watch?v=m7Bc3pLyij0" },
    { id: 10, title: "HINATA x NAUROTO", url: "https://www.youtube.com/watch?v=fzQ6gRAEoy0" },
    { id: 11, title: "Haiirotoao (+ Masaki Suda)", url: "https://www.youtube.com/watch?v=xhqb7JJvK6Y" }
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo"><FaYoutube />YouTube</div>
      </nav>
      <div className="video-grid">
        {videos.map((video) => {
          // Construct the thumbnail URL outside of the JSX
          const thumbnailUrl = `https://img.youtube.com/vi/${video.url.split('v=')[1]}/0.jpg`;

          return (
            <a 
              key={video.id} 
              href={video.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="video-item"
            >
              <div className="video-thumbnail">
                <img 
                  src={thumbnailUrl} 
                  alt={video.title} 
                />
              </div>
              <div className="video-title">{video.title}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default App;
