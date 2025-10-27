import React from "react";

const Timeline = () => {
  const events = [
    { year: "2001", desc: "Born in Thiruvannamalai.", icon: "baby.png" },
    { year: "2015", desc: "Completed SSLC.", icon: "graduation-cap.png" },
    { year: "2018", desc: "Completed HSLC.", icon: "graduation-cap.png" },
    { year: "2021", desc: "Worked at Cupshup.", icon: "company.png" },
    { year: "2022", desc: "Worked at Access Health Care.", icon: "company.png" },
    { year: "2024", desc: "Relationship Manager at India Filings.", icon: "briefcase.png" },
    { year: "2024", desc: "Founded Aperiofincraft & Passion Path Pvt Ltd.", icon: "entrepreneur.png" },
    { year: "Future", desc: "Building enterprises and scaling ventures.", icon: "rocket.png" },
  ];

  return (
    <section id="timeline">
      <div id="My_journey"><h2>My Journey</h2></div>
      <div className="timeline">
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <img
                src={`https://img.icons8.com/ios-filled/50/ffffff/${event.icon}`}
                alt={event.year}
              />
              <div>
                <h3>{event.year}</h3>
                <p>{event.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
