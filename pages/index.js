import React from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";

const THIS_PAGE_TITLE_FROM_ENV = process.env.TITLE;
const APP_NAME=process.env.APP_NAME;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Nav />
    {/* Renders value of APP_NAME from .env file */}
    <p>{APP_NAME}</p>
    {/* Renders the title from .env file */}
    <h1>{THIS_PAGE_TITLE_FROM_ENV}</h1>
  </div>
);

export default Home;
