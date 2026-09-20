import fitz


def extract_text_from_pdf(file_bytes: bytes) -> str:
    """
    Extract text directly from PDF bytes.
    No temporary file is created, which avoids Windows file-lock issues.
    """

    if not file_bytes:
        raise ValueError("The uploaded PDF is empty.")

    # Check whether the uploaded file looks like a PDF
    if not file_bytes.startswith(b"%PDF-"):
        raise ValueError(
            "The uploaded file is not a valid PDF. "
            "Please upload a genuine PDF document."
        )

    try:
        document = fitz.open(
            stream=file_bytes,
            filetype="pdf"
        )

        text = ""

        for page in document:
            text += page.get_text()

        document.close()

        return text.strip()

    except Exception as e:
        print("PDF SERVICE ERROR:", repr(e))
        raise