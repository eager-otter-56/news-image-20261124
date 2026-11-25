#!/usr/bin/env python3
"""make.fun news-image-20261124 entry (tokenised full-day edition, v3).

Copies the bundled entry.png to the output directory the harness names:
$MAKEFUN_OUTPUT_DIR/entry.png, defaulting to /output/entry.png.
Standard library only; the copy is byte-for-byte, so both grading runs
produce identical bytes.
"""

import os
import shutil
import sys

SOURCE_NAME = "entry.png"
OUTPUT_NAME = "entry.png"
DEFAULT_OUTPUT_DIR = "/output"
ENV_VAR = "MAKEFUN_OUTPUT_DIR"
FILE_MODE = 0o644


def source_path() -> str:
    """The image shipped beside this program in the repository."""
    return os.path.join(os.path.dirname(os.path.abspath(__file__)), SOURCE_NAME)


def output_path() -> str:
    """Where the harness expects the entry image to appear."""
    out_dir = os.environ.get(ENV_VAR) or DEFAULT_OUTPUT_DIR
    return os.path.join(out_dir, OUTPUT_NAME)


def main() -> int:
    src = source_path()
    dst = output_path()
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    shutil.copyfile(src, dst)
    os.chmod(dst, FILE_MODE)
    if os.path.getsize(dst) != os.path.getsize(src):
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
