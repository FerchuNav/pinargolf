#!/usr/bin/env python3
from __future__ import annotations

import argparse
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ModuleNotFoundError as exc:
    if exc.name == "PIL":
        raise SystemExit(
            "Falta la dependencia Pillow.\n"
            "Instalala con uno de estos comandos:\n"
            "  py -m pip install Pillow\n"
            "  python -m pip install Pillow\n"
            "Si usás el runtime de Codex:\n"
            r"  C:\Users\ferna\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe -m pip install Pillow"
        ) from exc
    raise


SUPPORTED_INPUTS = {".jpg", ".jpeg", ".png"}
OUTPUT_FORMATS = {"webp": "WEBP", "avif": "AVIF"}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=(
            "Redimensiona y comprime imágenes JPG/PNG para web, "
            "guardándolas en images2 como WebP o AVIF."
        )
    )
    parser.add_argument(
        "--input-dir",
        type=Path,
        default=Path("public/images"),
        help="Carpeta de entrada con imágenes JPG/PNG. Por defecto: public/images",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path("public/images2"),
        help="Carpeta de salida para los archivos optimizados. Por defecto: public/images2",
    )
    parser.add_argument(
        "--format",
        choices=sorted(OUTPUT_FORMATS),
        default="webp",
        help="Formato de salida. Por defecto: webp",
    )
    parser.add_argument(
        "--quality",
        type=int,
        default=80,
        help="Calidad de compresión entre 1 y 100. Por defecto: 80",
    )
    parser.add_argument(
        "--max-width",
        type=int,
        default=1920,
        help="Ancho máximo de salida en píxeles. Por defecto: 1920",
    )
    return parser.parse_args()


def validate_args(args: argparse.Namespace) -> None:
    if not args.input_dir.exists():
        raise FileNotFoundError(f"No existe la carpeta de entrada: {args.input_dir}")

    if args.quality < 1 or args.quality > 100:
        raise ValueError("La calidad debe estar entre 1 y 100.")

    if args.max_width < 1:
        raise ValueError("El ancho máximo debe ser mayor que 0.")

    available = {fmt.lower() for fmt in Image.registered_extensions().values()}
    requested = OUTPUT_FORMATS[args.format].lower()
    if requested not in available:
        raise RuntimeError(
            f"Tu instalación de Pillow no tiene soporte para {args.format.upper()}."
        )


def iter_images(input_dir: Path) -> list[Path]:
    return sorted(
        path
        for path in input_dir.rglob("*")
        if path.is_file() and path.suffix.lower() in SUPPORTED_INPUTS
    )


def build_output_path(source: Path, input_dir: Path, output_dir: Path, extension: str) -> Path:
    relative_path = source.relative_to(input_dir)
    return output_dir.joinpath(relative_path).with_suffix(extension)


def resize_image(image: Image.Image, max_width: int) -> Image.Image:
    width, height = image.size
    if width <= max_width:
        return image

    new_height = round(height * (max_width / width))
    return image.resize((max_width, new_height), Image.Resampling.LANCZOS)


def normalize_image(image: Image.Image, output_format: str) -> Image.Image:
    image = ImageOps.exif_transpose(image)

    if output_format == "AVIF":
        if image.mode not in {"RGB", "RGBA"}:
            image = image.convert("RGBA" if "A" in image.getbands() else "RGB")
        return image

    if image.mode in {"RGBA", "LA"}:
        background = Image.new("RGB", image.size, (255, 255, 255))
        background.paste(image, mask=image.getchannel("A"))
        return background

    if image.mode != "RGB":
        return image.convert("RGB")

    return image


def save_image(image: Image.Image, destination: Path, output_format: str, quality: int) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)

    save_options = {
        "format": output_format,
        "quality": quality,
        "method": 6,
    }

    if output_format == "WEBP":
        save_options["optimize"] = True

    if output_format == "AVIF":
        save_options["speed"] = 6

    image.save(destination, **save_options)


def process_images(
    input_dir: Path,
    output_dir: Path,
    output_choice: str,
    quality: int,
    max_width: int,
) -> tuple[int, int]:
    output_format = OUTPUT_FORMATS[output_choice]
    output_extension = f".{output_choice}"
    processed = 0
    skipped = 0

    for source in iter_images(input_dir):
        destination = build_output_path(source, input_dir, output_dir, output_extension)
        try:
            with Image.open(source) as image:
                image = normalize_image(image, output_format)
                image = resize_image(image, max_width)
                save_image(image, destination, output_format, quality)
            processed += 1
            print(f"[OK] {source} -> {destination}")
        except Exception as exc:
            skipped += 1
            print(f"[ERROR] {source}: {exc}")

    return processed, skipped


def main() -> None:
    args = parse_args()
    validate_args(args)

    processed, skipped = process_images(
        input_dir=args.input_dir,
        output_dir=args.output_dir,
        output_choice=args.format,
        quality=args.quality,
        max_width=args.max_width,
    )

    print("")
    print(f"Procesadas: {processed}")
    print(f"Omitidas con error: {skipped}")
    print(f"Salida: {args.output_dir.resolve()}")


if __name__ == "__main__":
    main()
