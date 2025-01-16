'use client';

import "./globals.css";
import Vinyl from "./components/vinyl";
import { useState, useEffect } from "react";
import getNowPlayingItem from "./spotify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<any>({});
  const [lastResult, setLastResult] = useState<any>({});

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        let data = await getNowPlayingItem();
        if (data) {
          setLastResult(result);
          setResult(data);
          setIsPlaying(data.isPlaying);
        }
      } catch (error) {
        console.error('Error fetching now playing:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    
    const interval = setInterval(fetchNowPlaying, 30000);
    
    return () => clearInterval(interval);
  }, [result]);
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center gap-4 bg-neutral-900 text-white">
        <Vinyl 
          isPlaying={isPlaying} 
          albumArt={result.albumImageUrl}
        />
        <p className="text-lg font-medium">
          {loading ? 'Loading...' : `${lastResult.title ? `Currently playing: ${result.title || lastResult.title}` : 'Nothing playing'}`}
        </p>
        {children}
      </body>
    </html>
  );
}
