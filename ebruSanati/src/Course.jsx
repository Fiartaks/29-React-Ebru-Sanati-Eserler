import React from "react";

function Course({ course }) {
  const { id, title, description, price, link, image,video } = course;
  return (
    <div className="course">
      
        <img src={image} width={210} height={130}/>
        <video src={video} width={210} height={130}/>

        <h4 className="course-title">{title}</h4>
        <p className="course-desc">{description}</p>
        <div className="course-link" ><a style={{textDecoration:'none'}} href={link}>Satin almak icin</a></div>
      
    </div>
  );
}

export default Course;
