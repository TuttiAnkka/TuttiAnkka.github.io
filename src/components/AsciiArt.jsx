import { useState, useEffect } from "react";

export default function AsciiArt({ file }) {
  const [ascii, setAscii] = useState("");

  useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then(setAscii);
  }, [file]);

  return (
    <div className="ascii-project">
      <pre>{ascii}</pre>
    </div>
  );
}
