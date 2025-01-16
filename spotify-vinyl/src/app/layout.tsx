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
      <body className="min-h-screen flex flex-col items-center justify-center gap-4 text-white">
        <Vinyl 
          isPlaying={isPlaying} 
          albumArt={result.albumImageUrl}
        />
        <span className="text-center font-bold text-lg whitespace-pre-line">
          {loading 
            ? 'Loading...' 
            : result.title || lastResult.title 
              ? `Currently playing:\n${result.title || lastResult.title} by ${result.artist || lastResult.artist}` 
              : 'Nothing playing'
          }
        </span>
        {children}
      </body>
    </html>
  );
}
