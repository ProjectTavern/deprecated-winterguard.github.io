import React from "react";
import Head from "next/head";
import { MainTitle, IndexCardList } from "@/components/organizations";
import { mainTitle, indexCards } from "../store/dummydata";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>WinterLog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainTitle {...mainTitle} />
      <IndexCardList indexCards={indexCards} />
    </React.Fragment>
  );
}
