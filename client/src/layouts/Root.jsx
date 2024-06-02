import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { useQuery } from "@apollo/client";
import { GET_EDUCATION_LINK } from "../graphql/queries";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Root() {
  const { loading, error, data } = useQuery(GET_EDUCATION_LINK);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ...</p>;

  const link = data.educations[0].educationUrl;

  return (
    <>
      <Header />
      <Menu />
      <ThemeSwitcher />
      <main>
        <Outlet />
      </main>
      <Footer link={link} />
    </>
  );
}
