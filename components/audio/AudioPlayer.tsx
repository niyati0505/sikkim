// components/audio/AudioPlayer.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";

type AudioGuide = {
  id: number | string;
  monastery_id?: number | string;
  language: string;
  title: string;
  audio_url: string;
};

// NOTE: you can import the same lib/supabaseClient on client too.
// But to avoid SSR bundling issues, we'll create client here (it's fine with NEXT_PUBLIC keys).
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Props {
  monasteryId: string | number;
}

export default function AudioPlayer({ monasteryId }: Props) {
  const [audioGuides, setAudioGuides] = useState<AudioGuide[]>([]);
  const [selectedGuideId, setSelectedGuideId] = useState<number | string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    async function fetchAudio() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("audio_guides")
          .select("id, monastery_id, language, title, audio_url")
          .eq("monastery_id", monasteryId);

        if (error) {
          console.error("Supabase audio fetch error:", error.message);
        } else if (data) {
          setAudioGuides(data);
          if (data.length) {
            setSelectedGuideId(data[0].id);
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (monasteryId) fetchAudio();
  }, [monasteryId]);

  const selectedGuide = audioGuides.find((g) => String(g.id) === String(selectedGuideId));

  // controls
  function handlePlay() {
    audioRef.current?.play();
  }
  function handlePause() {
    audioRef.current?.pause();
  }
  function handleStop() {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }

  // When selected guide changes, load new src and autoplay optional
  useEffect(() => {
    if (!audioRef.current) return;
    // reload the audio element for new source
    audioRef.current.load();
  }, [selectedGuideId]);

  return (
    <div className="bg-yellow-50 p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-2">Audio Guide</h3>

      {loading ? (
        <p className="text-sm text-gray-600">Loading audio guides...</p>
      ) : audioGuides.length === 0 ? (
        <p className="text-sm text-gray-600">No audio guides available for this monastery.</p>
      ) : (
        <>
          <div className="flex gap-2 items-center">
            <label htmlFor="audioSelect" className="sr-only">Select language</label>
            <select
              id="audioSelect"
              className="border rounded px-3 py-2 bg-white"
              value={String(selectedGuideId ?? "")}
              onChange={(e) => setSelectedGuideId(e.target.value)}
            >
              {audioGuides.map((g) => (
                <option key={g.id} value={String(g.id)}>
                  {g.title} ({g.language})
                </option>
              ))}
            </select>

            <div className="ml-3 flex items-center gap-2">
              <button
                onClick={handlePlay}
                className="px-3 py-1 rounded bg-amber-700 text-white hover:bg-amber-800"
                aria-label="Play audio"
              >
                ▶ Play
              </button>
              <button
                onClick={handlePause}
                className="px-3 py-1 rounded border"
                aria-label="Pause audio"
              >
                ❚❚ Pause
              </button>
              <button
                onClick={handleStop}
                className="px-3 py-1 rounded border"
                aria-label="Stop audio"
              >
                ◼ Stop
              </button>
            </div>
          </div>

          <div className="mt-4">
            {selectedGuide ? (
              <>
                <div className="text-sm mb-2 font-medium">{selectedGuide.title} — {selectedGuide.language}</div>
                <audio ref={audioRef} controls className="w-full" preload="none">
                  <source src={selectedGuide.audio_url} />
                  Your browser does not support the audio element.
                </audio>
              </>
            ) : (
              <p className="text-sm text-gray-600">Please select an audio guide.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
