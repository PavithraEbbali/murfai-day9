"use client";

import React from "react";

interface WelcomeViewProps extends React.HTMLAttributes<HTMLDivElement> {
  startButtonText: string;
  onStartCall: () => void;
}

export const WelcomeView: React.FC<WelcomeViewProps> = ({
  startButtonText,
  onStartCall,
  ...props
}) => {
  return (
    <div
      {...props}
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div className="text-center max-w-xl">

        {/* App Title */}
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-xl">
          Voice Game Master
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          An interactive voice-driven adventure powered by AI.
          Speak, explore, and shape your own story.
        </p>

        {/* Start Button */}
        <button
          onClick={onStartCall}
          className="px-12 py-3 rounded-full text-lg font-semibold bg-white text-black hover:bg-gray-200 transition shadow-xl"
        >
          {startButtonText}
        </button>

        {/* Hint */}
        <p className="text-gray-400 text-sm mt-4">
          Tap the microphone below to talk anytime.
        </p>
      </div>
    </div>
  );
};
