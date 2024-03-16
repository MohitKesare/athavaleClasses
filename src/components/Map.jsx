import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  return (
    <div className="location ">
      <div className="location-map">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          //   scrolling="yes"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Third%20and%20forth,%20Surya%20Tower,%20Mhatre%20Bridge,%20Erandwana%20Gaothan,%20Erandwane,%20Pune,%20Maharashtra%20411004+(Athavale%20classes)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
      </div>
    </div>
  );
};

export default Map;
