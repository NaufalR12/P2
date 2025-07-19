import React, { useRef, useState, useEffect } from "react";

const MUSIC_URL =
  "https://res.cloudinary.com/ddfcjabrm/video/upload/v1752932299/Ldr._Harjuna_Mangsah_e75tq5.mp4";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Mulai dari pause
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay gagal, user harus klik tombol
        });
      }
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleAudioError = () => {
    setError(true);
  };

  return (
    <div style={{ position: "fixed", bottom: 30, right: 30, zIndex: 1000 }}>
      <audio ref={audioRef} src={MUSIC_URL} loop onError={handleAudioError} />
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
        style={{
          background: "linear-gradient(135deg, #8b4513, #daa520)",
          border: "none",
          borderRadius: 50,
          boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
          width: 56,
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          outline: "none",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {isPlaying ? (
          // Pause Icon
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="6" y="6" width="5" height="16" rx="2" fill="#fff" />
            <rect x="17" y="6" width="5" height="16" rx="2" fill="#fff" />
          </svg>
        ) : (
          // Play Icon
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14" cy="14" r="14" fill="rgba(255,255,255,0.08)" />
            <polygon points="11,8 22,14 11,20" fill="#fff" />
          </svg>
        )}
      </button>
      {error && (
        <div style={{ color: "red", marginTop: 8 }}>
          Gagal memuat audio. Cek link Cloudinary atau format file!
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
