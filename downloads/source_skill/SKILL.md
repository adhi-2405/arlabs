---
name: stream-clips-skill
description: AI-assisted highlight discovery and vertical 9:16 video clipping workflow for GTA 6 and gaming livestreams.
version: 1.2.0
author: AR LABS (https://youtube.com/@ARLabs)
tags: [ai, gaming, gta6, stream-clipping, vertical-video, shorts, tiktok, reels]
---

# Stream Clips Skill (by AR LABS)

An AI-powered agent skill and automated pipeline designed to transform long GTA 6 and gaming livestreams (2–6+ hours) into viral, high-engagement vertical short-form content (TikTok, YouTube Shorts, Instagram Reels).

## Overview

Live gaming streams are packed with unpredictable, entertaining moments: stunt jumps, intense 5-star police chases, hilarious glitches, explosive streamer reactions, and clutch plays. Finding these manually takes hours of scrubbing. 

This skill automates the entire end-to-end process:
1. **Audio & Visual Spike Detection**: Analyzes decibel spikes, laughter, and high-frequency action.
2. **Semantic Transcript Scoring**: Uses multimodal LLMs (Gemini / Claude) to evaluate transcript context, chat sentiment, and streamer commentary energy.
3. **9:16 Smart Vertical Reframing**: Dynamically crops 16:9 widescreen footage into 9:16 mobile format with optional facecam/gameplay dual-stack.
4. **Kinetic Caption Generation**: Transcribes speech with word-level timestamps and burns high-visibility, animated subtitles.
5. **Metadata & Title Generation**: Automatically generates viral titles, hooks, and hashtags for social platforms.

## Prerequisites

- **Python**: 3.10 or higher
- **FFmpeg**: Installed and accessible in your system PATH (`ffmpeg -version`)
- **API Key**: Google Gemini API key or Anthropic API key (configured in `.env`)
- **Hardware**: Any modern CPU; NVIDIA GPU recommended for fast Whisper transcription and NVENC encoding.

## Installation

```bash
# 1. Create a virtual environment
python -m venv venv

# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Setup configuration
cp .env.example .env
# Edit .env and insert your API key
```

## Quick Start CLI Usage

```bash
# Process a YouTube stream VOD directly:
python run_stream_clipper.py --url "https://youtube.com/watch?v=EXAMPLE_ID" --game gta6 --clips 5

# Process a local MP4 recording:
python run_stream_clipper.py --input "gta6_session_01.mp4" --min-score 8.0 --layout split

# Process with custom subtitle style:
python run_stream_clipper.py --input "stream.mp4" --subtitles animated --output ./viral_clips
```

## Agent Skill Commands

When integrated into AI Agent platforms (Antigravity, Claude Code, Cursor):

- `/clip-stream [url_or_path]` : Run automatic detection and generate top 5 clips.
- `/clip-stream-highlights [path] --threshold 8.5` : List high-probability highlight timestamps without rendering.
- `/render-vertical [clip_id] --layout [split|crop|blur]` : Render selected highlight with specified framing layout.

## License

MIT License. Free for creators, streamers, and developers. Built with passion by AR LABS.
