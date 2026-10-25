import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoPlaceholderProps {
  title?: string;
  duration?: string;
  subtitle?: string;
  className?: string;
}

export const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({
  title = 'Watch Field Demonstration: Precision Thermal & Barrier Treatment',
  duration = '04:18',
  subtitle = 'Official Technical Demonstration • Full 4K Field Inspection',
  className = ''
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-900 shadow-sm ${className}`}>
      <div className="relative aspect-video w-full bg-slate-950 flex flex-col items-center justify-center p-6 text-center select-none group">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:24px_24px]" />

        {!isPlaying ? (
          <div className="relative z-10 flex flex-col items-center max-w-lg">
            <button
              onClick={() => setIsPlaying(true)}
              aria-label="Play video preview"
              className="w-16 h-16 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 mb-4 cursor-pointer"
            >
              <Play className="w-7 h-7 fill-white translate-x-0.5" />
            </button>
            <h4 className="text-white text-base md:text-lg font-medium tracking-tight mb-1">
              {title}
            </h4>
            <p className="text-slate-400 text-xs md:text-sm mb-3">
              {subtitle}
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <span className="font-mono tabular-nums">{duration}</span>
              <span aria-hidden="true">·</span>
              <span>HD 1080p</span>
              <span aria-hidden="true">·</span>
              <span>Subtitles Available</span>
            </div>
          </div>
        ) : (
          <div className="relative z-10 flex flex-col items-center text-center p-6 bg-slate-900/90 rounded-md border border-slate-800 max-w-md">
            <div className="w-10 h-10 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin mb-4" />
            <h5 className="text-white font-medium text-sm mb-1">Simulated Video Stream</h5>
            <p className="text-slate-400 text-xs mb-4">
              Demonstration video playback placeholder running in secure offline sandbox.
            </p>
            <button
              onClick={() => setIsPlaying(false)}
              className="px-3 py-1.5 text-xs text-slate-300 hover:text-white border border-slate-700 rounded hover:bg-slate-800 transition-colors"
            >
              Close Playback
            </button>
          </div>
        )}

        {/* Video Player Bottom Controls Bar mockup */}
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between px-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-slate-300">00:00 / {duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium text-emerald-400 tracking-wide uppercase">Pest Control Media</span>
          </div>
        </div>
      </div>
    </div>
  );
};
