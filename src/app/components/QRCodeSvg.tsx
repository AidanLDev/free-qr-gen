import React from "react";
import { QRCodeSVG } from "qrcode.react";

interface IImageSettings {
  src: string;
  x?: number;
  y?: number;
  center?: boolean;
  excavate: boolean;
  height: number;
  width: number;
}

interface IQrCodeSvgProps {
  url: string;
  size?: number;
  bgColour?: string;
  fgColour?: string;
  image?: boolean;
  imageSettings?: IImageSettings;
}

export default function QRCodeSvg({
  url,
  size,
  bgColour,
  fgColour,
  image,
  imageSettings,
}: IQrCodeSvgProps) {
  const qrImageSettings = image && imageSettings ? imageSettings : undefined;
  return (
    <QRCodeSVG
      value={url}
      size={size || 128}
      bgColor={bgColour || "#ffffff"}
      fgColor={fgColour || "#000000"}
      imageSettings={qrImageSettings}
    />
  );
}
