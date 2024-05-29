import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ALL_SERVICES } from "../graphql/queries";

export default function Services() {
  const { loading, error, data } = useQuery(GET_ALL_SERVICES);
  const [service, setService] = useState(null);
  const { slug } = useParams();

  const services = data?.services || [];

  useEffect(() => {
    if (slug) {
      const serviceBySlug = services.find((service) => service.slug === slug);
      if (serviceBySlug) {
        setService(serviceBySlug);
      }
    } else if (services.length > 0) {
      setService(services[0]);
    }
  }, [slug, services]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ...</p>;

  const handleItemClick = (item) => {
    setService(item);
  };

  return (
    <>
      <h1>Services.</h1>
      <section>
        <div className="container">
          <Filter items={services} onItemClick={handleItemClick} />
          {service && (
            <div>
              <h2>{service.title}</h2>
              <figure>
                <img src={service.image.url} alt={service.title} />
              </figure>
              <p>{service.description}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
