"use client";

import React, { useMemo } from "react";
import { Gauge } from "./Gauge";

export function ScoreBlock({ correctCount, inCorrectCount }) {
  // Calculate the percentage of scoring
  const correctCountPercentage = useMemo(() => {
    const totalQuestions = correctCount + inCorrectCount;
    const percentage =
      totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0;
    return Math.round(percentage);
  }, [correctCount, inCorrectCount]);

  return (
    <div className="font-sans flex flex-col justify-between gap-6">
      <h3 className="text-center text-2xl font-bold text-black">Your result</h3>

      <div className="flex justify-center">
        <Gauge percentage={correctCountPercentage} />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div className="flex gap-4 bg-green-100 px-4 py-8 rounded-xl items-center">
          <span className="bg-upraisedGreen w-4 h-4 rounded-full"></span>
          <p className="font-semibold text-black">
            {correctCount > 0 ? correctCount : 0}{" "}
            <span className="text-gray-500">Correct</span>
          </p>
        </div>

        <div className="flex gap-4 bg-red-100 px-4 py-8 rounded-xl items-center">
          <p className="bg-upraisedDarkRed w-4 h-4 rounded-full"></p>
          <p className="font-semibold text-black">
            {inCorrectCount > 0 ? inCorrectCount : 0}{" "}
            <span className="text-gray-500">Incorrect</span>
          </p>
        </div>
      </div>
    </div>
  );
}
