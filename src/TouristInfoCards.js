import React from "react";
const TouristInfoCards = () => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img
          src="https://www.telegraph.co.uk/content/dam/Travel/Cruise/June-2020/glasgow-scotland-city-skyline-getty-xlarge.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            is a city with striking architecture, contemporary art spaces and
            fascinating museums, many of which are free. Glasgow city centre is
            one of the best shopping destinations in the UK
          </p>
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/3d/31/60/manchester-town-hall.jpg?w=1000&h=600&s=1"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            It’s one of those cities that has a little something for everyone.
            There’s just so much variety, culture and that warm ‘northern’
            hospitality
          </p>
          <a href="visitmanchester.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/Best-time-to-visit-London.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            See world-famous London attractions, iconic landmarks and
            lesser-known sights.
          </p>
          <a href="visitlondon.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
