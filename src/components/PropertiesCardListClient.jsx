"use client";
import dynamic from "next/dynamic";
const PropertiesCardList = dynamic(() => import("./PropertiesCardList"), { ssr: false });

export default function PropertiesCardListClient() {
  return <PropertiesCardList />;
}
