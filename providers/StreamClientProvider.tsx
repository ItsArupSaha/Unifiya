"use client";

import { ReactNode, useEffect, useState } from "react";
import { StreamVideoClient, StreamVideo } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";

import { tokenProvider } from "@/actions/stream.actions";
import Loader from "@/components/Loader";

const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {

  // set up video client
  const [VideoClient, setVideoClient] = useState<StreamVideoClient>();

  // fetching user information from clerk
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;
    if (!API_KEY) throw new Error("Stream API Key missing");

    const client = new StreamVideoClient({
      apiKey: API_KEY,
      user: {
        id: user?.id,
        name: user?.username || user?.id,
        image: user?.imageUrl,
      },

      tokenProvider,
    });

    setVideoClient(client);
  }, [user, isLoaded]);

  if (!VideoClient) return <Loader />;

  return <StreamVideo client={VideoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
