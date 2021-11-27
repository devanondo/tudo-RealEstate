import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { PropertyHeader } from "../HeaderOpt/PropertyHeader";
import { UpdateProperty } from "../Home/UpdateProperty";
import { Loading } from "../Loading/Loading";
import { Navbar } from "../Navbar/Navbar";
import { Testimonial } from "../Testimonial/Testimonial";
import { PropertyDetails } from "./PropertyDetails";
import "./SingleProperty.css";

export const SingleProperty = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/properties")
      .then((response) => response.json())
      .then((property) => {
        let singleProperty = property.find((ppt) => ppt._id === id);
        setProperty(singleProperty);
        setLoading(false);
        // console.log(singleProperty);
      });
  }, [id]);
  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <PropertyHeader content={"Single Property Header"} />
          <PropertyDetails property={property} />
          <UpdateProperty />
          <Testimonial />
          <Footer />
        </div>
      )}
    </div>
  );
};
