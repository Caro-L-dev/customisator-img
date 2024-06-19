"use client";

import { useState } from "react";
import Image from "next/image";

import InputFile from "./components/common/input/InputFile";
import InputRange from "./components/common/input/InputRange";

export default function Home() {
  const [settings, setSettings] = useState({
    padding: 5,
    shadow: 4,
    radius: 8,
  });
  const [image, setImage] = useState();

  const setSetting = (name, value) => {
    setSettings((curr) => ({
      ...curr,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    const file = files[0];

    const reader = new FileReader();
    reader.onload = function () {
      const img = new Image();

      img.onLoad = function () {
        setImage({
          width: img.width,
          height: img.height,
          src: img.src,
          name: file.name,
        });
      };

      img.src = reader.result;
    };

    reader.readAsDataURL(file);
  };

  return (
    <main className="flex justify-center items-center m-auto max-w-4xl max-lg:flex-col gap-8 min-h-full">
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body gap-y-9">
          <InputFile onChange={handleFileChange} />

          <InputRange
            label="Espacement"
            min={10}
            max={80}
            value={settings.padding}
            onChange={(newValue) => setSetting("padding", newValue)}
          />

          <InputRange
            label="Ombre portée"
            min={10}
            max={90}
            value={settings.shadow}
            onChange={(newValue) => setSetting("shadow", newValue)}
          />

          <InputRange
            label="Bordure"
            min={10}
            max={240}
            value={settings.radius}
            onChange={(newValue) => setSetting("radius", newValue)}
          />
        </div>
      </div>
      <div>{image ? <Image src={image.src} alt="alt" /> : null}</div>
    </main>
  );
}
