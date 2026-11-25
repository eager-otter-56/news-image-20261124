#!/usr/bin/env python3
"""news-image-20261124 full-day final edition.

Copies the shipped entry.png (next to this file) to the make.fun output
directory. Standard library only, no network, deterministic: the same
bytes are written on every run.
"""
import os
import shutil
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "entry.png")


def main() -> int:
    out_dir = os.environ.get("MAKEFUN_OUTPUT_DIR") or "/output"
    os.makedirs(out_dir, exist_ok=True)
    dst = os.path.join(out_dir, "entry.png")
    shutil.copyfile(SRC, dst)
    os.chmod(dst, 0o644)
    return 0


if __name__ == "__main__":
    sys.exit(main())
