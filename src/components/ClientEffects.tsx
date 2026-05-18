"use client";

import dynamic from "next/dynamic";

const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
  ssr: false,
});

const CursorEffect = dynamic(() => import("@/components/CursorEffect"), {
  ssr: false,
});

export default function ClientEffects() {
  return (
    <>
      <LoadingScreen />
      <CursorEffect />
    </>
  );
}
