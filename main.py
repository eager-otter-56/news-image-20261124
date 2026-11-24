#!/usr/bin/env python3
"""make.fun entry for news-image-20261124.

Copies the pre-rendered poster image (entry.png, shipped in this repository)
to the output directory as entry.png. Standard library only, no network,
fully deterministic: the same input file always produces the same bytes.

Output directory: $MAKEFUN_OUTPUT_DIR if set, otherwise /output.
"""

import os
import shutil
import stat
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SOURCE = os.path.join(HERE, "entry.png")


def main() -> int:
    if not os.path.isfile(SOURCE):
        print(f"entry.png missing next to main.py: {SOURCE}", file=sys.stderr)
        return 1
    out_dir = os.environ.get("MAKEFUN_OUTPUT_DIR") or "/output"
    os.makedirs(out_dir, exist_ok=True)
    dest = os.path.join(out_dir, "entry.png")
    shutil.copyfile(SOURCE, dest)
    os.chmod(dest, stat.S_IRUSR | stat.S_IWUSR | stat.S_IRGRP | stat.S_IROTH)
    return 0


if __name__ == "__main__":
    sys.exit(main())
