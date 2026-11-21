"""
AR LABS - FFmpeg 9:16 Vertical Video Renderer
Handles 9:16 aspect ratio conversion, smart facecam/gameplay stacking, and subtitle burning.
"""

import subprocess

def render_vertical_clip(input_video, output_clip, start_time, duration, layout="split", subtitle_file=None):
    """
    Executes FFmpeg with custom filtergraph to crop or split into 1080x1920.
    """
    if layout == "split":
        # Facecam on top (approx top right of 16:9 webcam cropped to 1080x730)
        # Gameplay on bottom (center action cropped to 1080x1190)
        filtergraph = (
            "[0:v]split=2[cam][game];"
            "[cam]crop=w=iw/4:h=ih/4:x=iw*0.75:y=0,scale=1080:730:force_original_aspect_ratio=increase,crop=1080:730[top];"
            "[game]crop=w=ih*(9/16):h=ih:x=(iw-ih*(9/16))/2:y=0,scale=1080:1190:force_original_aspect_ratio=increase,crop=1080:1190[bottom];"
            "[top][bottom]vstack=inputs=2[v]"
        )
    elif layout == "crop":
        filtergraph = "[0:v]crop=w=ih*(9/16):h=ih:x=(iw-ih*(9/16))/2:y=0,scale=1080:1920[v]"
    else:  # blur background
        filtergraph = (
            "[0:v]split=2[bg][fg];"
            "[bg]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,boxblur=20:5[bgout];"
            "[fg]scale=1080:-1[fgout];"
            "[bgout][fgout]overlay=(W-w)/2:(H-h)/2[v]"
        )

    cmd = [
        "ffmpeg", "-y",
        "-ss", str(start_time),
        "-t", str(duration),
        "-i", input_video,
        "-filter_complex", filtergraph,
        "-map", "[v]",
        "-map", "0:a",
        "-c:v", "libx264",
        "-preset", "fast",
        "-crf", "19",
        "-c:a", "aac",
        "-b:a", "192k",
        output_clip
    ]
    return cmd
