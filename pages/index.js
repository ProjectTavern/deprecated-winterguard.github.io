import React from "react";
import Head from "next/head";
import { IndexCardList } from "@/components/organizations";
import { indexCards } from "../store/dummydata";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>WinterLog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexCardList indexCards={indexCards} />
    </React.Fragment>
  );
}
