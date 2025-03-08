"use client";
import React, { useState } from 'react';
import { Shuffle, SkipBack, Play, SkipForward, Repeat, Maximize2, Volume2 } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const MusicPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(70);
  const totalDuration = 202; // 3:22 in seconds

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  return (
   <div 
      className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 px-4 py-3 flex items-center z-50"
      style={{ boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.5)' }}
    >
      {/* Now playing */}
      <div className="flex items-center w-1/4">
        <img 
          src="/daily7.png" 
          alt="Song cover" 
          className="h-14 w-14 mr-3"
        />
        <div className="mr-4">
          <p className="text-white text-sm font-semibold">Paper Soldier (feat. Joony)</p>
          <p className="text-gray-400 text-xs">Brent Faiyaz, Joony, ISO Supremacy</p>
        </div>
        <button className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Player controls */}
      <div className="flex flex-col items-center justify-center w-1/2">
        <div className="flex items-center justify-center gap-4 mb-1">
          <button className="text-gray-400 hover:text-white">
            <Shuffle size={20} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipBack size={20} />
          </button>
          <button className="bg-white text-black rounded-full p-2 hover:scale-105 transition">
            <Play size={16} fill="black" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipForward size={20} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <Repeat size={20} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="flex items-center w-full gap-2">
          <span className="text-xs text-gray-400 w-10 text-right">{formatTime(currentTime)}</span>
          <Slider
            value={[currentTime]}
            min={0}
            max={totalDuration}
            step={1}
            onValueChange={(value) => setCurrentTime(value[0])}
            className="w-full cursor-pointer"
          />
          <span className="text-xs text-gray-400 w-10">3:22</span>
        </div>
      </div>

      {/* Right controls */}
      <div className="flex items-center justify-end w-1/4 gap-3">
        <button className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
        <button className="text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="9" y1="3" x2="9" y2="21" />
          </svg>
        </button>
        <div className="flex items-center gap-1 w-28">
          <Volume2 size={16} className="text-gray-400" />
          <Slider
            value={[volume]}
            min={0}
            max={100}
            step={1}
            onValueChange={(value) => setVolume(value[0])}
            className="cursor-pointer"
          />
        </div>
        <button className="text-gray-400 hover:text-white">
          <Maximize2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;