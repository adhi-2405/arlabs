# AR LABS - Stream Clips Skill

> **Turn long gaming livestreams into engaging vertical Shorts using AI-powered clipping workflows.**

Developed by **AR LABS** · *Explore. Automate. Create.*

---

## What It Does

Stream Clips Skill is an intelligent video production tool designed for content creators, gaming channels, and streamers. Rather than spending 4-8 hours manually scrubbing through livestream VODs to find upload-worthy moments, this skill uses a hybrid multi-modal detection engine:

1. **Audio Energy Spikes**: Detects shouts, laughter, explosions, and sudden decibel changes.
2. **Transcript Sentiment & Excitement**: Uses Gemini / Claude LLMs to analyze what is being said, scoring commentary for comedic timing, plot twists, and hype.
3. **Smart 9:16 Reframing**: Converts standard 16:9 widescreen gameplay into high-impact 9:16 vertical video without losing context.
4. **Kinetic Captioning**: Generates word-synced animated subtitles in modern creator aesthetic (MrBeast / Hormozi style highlight colors).
5. **SEO & Hook Generation**: Auto-generates 3 viral title hooks, description, and hashtags for TikTok, Instagram Reels, and YouTube Shorts.

---

## Directory Structure

```text
stream-clips-skill/
├── SKILL.md                 # Agent skill specification for Claude / Antigravity / Cursor
├── README.md                # Documentation and quickstart
├── run_stream_clipper.py    # Main CLI runner script
├── requirements.txt         # Python dependencies
├── config.yaml              # Presets for games, audio thresholds & aspect ratios
├── .env.example             # Environment variable template
├── scripts/
│   ├── detect_highlights.py # Audio energy & LLM transcript analyzer
│   └── render_vertical.py   # FFmpeg 9:16 stacking, cropping & subtitle burner
└── templates/
    └── vertical_subtitles.ass # Custom styled subtitle template
```

---

## Quickstart

### 1. Installation

```bash
git clone or extract stream-clips-skill.zip
cd stream-clips-skill

# Setup Python virtual environment
python -m venv venv
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Configuration

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Open `.env` and add your `GEMINI_API_KEY` or `ANTHROPIC_API_KEY`.

### 3. Usage Examples

**Process YouTube livestream directly:**
```bash
python run_stream_clipper.py --url "https://youtube.com/watch?v=YOUR_STREAM_ID" --game gta6 --clips 5
```

**Process local MP4 recording:**
```bash
python run_stream_clipper.py --input "my_gameplay_vod.mp4" --min-score 8.0 --layout split
```

**Reframing Layout Options:**
- `split`: Places facecam on top (38%) and gameplay on bottom (62%) - *Best for streamers with webcams*.
- `crop`: Centers on main crosshair / action in 1080x1920 - *Best for cinematic gameplay*.
- `blur`: Centers 16:9 gameplay with aesthetic blurred duplicate behind it - *Best for keeping entire HUD visible*.

---

## Requirements

- Python 3.10+
- FFmpeg (must be added to system PATH)
- Free or Paid Google Gemini API key OR Anthropic API key
- 8GB+ RAM (16GB recommended for local Whisper transcription)

---

## License & Credits

Distributed under the MIT License. Free for independent tech creators and video editors.
Created with love by **AR LABS**.

- **YouTube**: [https://youtube.com/@ARLabs](https://youtube.com/@ARLabs)
- **Website**: [AR LABS Official Platform](https://arlabs.dev)
