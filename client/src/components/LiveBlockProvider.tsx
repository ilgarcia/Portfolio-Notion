"use client";

import { LiveblocksProvider } from "@liveblocks/react";


function LiveBlockProvider({ children }: { children: React.ReactNode }) {
  if (!process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY) {
    throw new Error("NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY is not set");
  }
  return (
    // <div>{children}</div>
    <LiveblocksProvider throttle={16} authEndpoint={"/auth-endpoint"}>{children}</LiveblocksProvider>
  );
}

export default LiveBlockProvider;
