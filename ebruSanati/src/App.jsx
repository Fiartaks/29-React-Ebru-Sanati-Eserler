import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import { courses } from "./data"; // courses değişkeni video ve resimleri içeriyor
import "./css/Course.css";

function App() {
  const [fullscreenMedia, setFullscreenMedia] = useState(null);

  const handleMediaClick = (media) => {
    setFullscreenMedia(media);
  };

  const exitFullscreen = () => {
    setFullscreenMedia(null);
  };

  return (
    <div>
      <Header />
      <div className="course-main">
        {courses.map((course) => (
          <div className="course" key={course.id}>
            {course.image ? (
              <img
                src={course.image}
                alt={course.title}
                onClick={() => handleMediaClick(course.image)}
                style={{ cursor: "pointer" }}
                width={210}
                height={130}
              />
            ) : (
              <video
              src={course.video}
              onClick={() => handleMediaClick(course.video)}
              className="video-player" // CSS sınıfını ekleyin
              loop
              autoPlay
              muted
              />
            )}
            <h4 className="course-title">{course.title}</h4>
            <p className="course-desc">{course.description}</p>
            <div className="course-link">
              <a style={{ textDecoration: "none" }} href={course.link}>
                Satin almak icin
              </a>
            </div>
          </div>
        ))}
      </div>

      {fullscreenMedia && (
        <div className="fullscreen" onClick={exitFullscreen}>
          {fullscreenMedia.endsWith('.mp4') ? (
            <video src={fullscreenMedia} controls autoPlay style={{ maxWidth: '80%', maxHeight: '80%' }} />
          ) : (
            <img src={fullscreenMedia} alt="Fullscreen view" />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
