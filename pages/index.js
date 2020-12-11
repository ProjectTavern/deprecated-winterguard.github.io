import React from "react";
import Head from "next/head";

import { Main } from "@/components/templates";

import document from "@/store/document";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>{document.title} - Main</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </React.Fragment>
  );
}
