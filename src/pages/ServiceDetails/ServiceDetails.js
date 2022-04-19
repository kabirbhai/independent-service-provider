import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>SErvice details{serviceId}</h1>
      <div className="text-center">
        {" "}
        <Link to="/checkout">
          <button>Hire me</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
