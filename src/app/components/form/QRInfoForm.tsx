"use client";

import React, { useState, useRef, MutableRefObject } from "react";
import TextInput from "@/app/components/form/TextInput";
import QRCodeSvg from "../QRCodeSvg";
import Button from "./Button";

export default function QRInfoForm() {
  const [url, setUrl] = useState("");
  const svgRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const handleDownloadQrCode = () => {
    if (!svgRef) {
      return;
    }
    const svg = svgRef.current?.querySelector("svg");
    if (!svg) {
      return;
    }
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const svgUrl = URL.createObjectURL(svgBlob);

    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "qrcode.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="flex justify-evenly gap-8">
      <TextInput
        id="url-input"
        label="Choose URL"
        value={url}
        setValue={setUrl}
      />
      <div
        className={`${
          url ? "flex flex-col justify-center items-center gap-8" : ""
        }`}
      >
        {url ? (
          <QRCodeSvg url={url} svgRef={svgRef} />
        ) : (
          <p className="text-l text-center text-primary">
            Please enter the URL you want the QR code to be
          </p>
        )}
        {url && (
          <Button label="Download QR Code" onClick={handleDownloadQrCode} />
        )}
      </div>
    </div>
  );
}
