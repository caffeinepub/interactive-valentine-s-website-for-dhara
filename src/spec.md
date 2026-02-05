# Specification

## Summary
**Goal:** Make the MusicPlayer play the real, uploaded “Hum Tere Pyaar Mein — Lata Mangeshkar” audio file via a runtime-configured public asset URL, while keeping the existing fallback tone behavior.

**Planned changes:**
- Point the runtime audio source `import.meta.env.VITE_HUM_TERE_PYAAR_MEIN_AUDIO_SRC` to the uploaded MP3 file’s public asset path so MusicPlayer uses it for playback.
- Ensure playback uses `HTMLAudioElement` with looping enabled when a valid source is provided.
- Keep the current generated-tone fallback if the configured audio source is missing, empty, or unplayable (no UI errors/crashes).
- Ensure no attempt is made to play audio from Spotify links; only direct audio file sources are used.

**User-visible outcome:** Clicking Play plays (and loops) the uploaded “Hum Tere Pyaar Mein” MP3 when configured; otherwise the player still works and falls back to the existing tone.
