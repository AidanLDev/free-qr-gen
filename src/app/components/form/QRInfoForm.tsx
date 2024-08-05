"use client";

import React, { useState } from "react";
import TextInput from "@/app/components/form/TextInput";
import QRCodeSvg from "../QRCodeSvg";

export default function QRInfoForm() {
  const [url, setUrl] = useState("");
  return (
    <div>
      <TextInput
        id="url-input"
        label="Choose URL"
        value={url}
        setValue={setUrl}
      />
      <QRCodeSvg url={url} />
    </div>
  );
}
