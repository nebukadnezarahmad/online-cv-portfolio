"use client";

import { useState } from "react";

export default function AnatomyShowcase() {
  const [isExploded, setIsExploded] = useState(false);

  return (
    <section className="anatomy-showcase" aria-labelledby="anatomy-title">
      <div className="anatomy-copy">
        <p className="eyebrow">INTERACTIVE STUDY · 01</p>
        <h3 id="anatomy-title">Sebuah produk, lapis demi lapis.</h3>
        <p>
          Saya suka melihat bagaimana desain, teknologi, dan detail kecil
          bekerja bersama. Tekan tombol atau arahkan pointer ke ilustrasi untuk
          melihat anatomi sebuah perangkat.
        </p>
        <button
          className="anatomy-toggle"
          type="button"
          aria-pressed={isExploded}
          aria-controls="phone-anatomy"
          onClick={() => setIsExploded((value) => !value)}
        >
          {isExploded ? "Rakit kembali" : "Lihat bagian dalam"}
          <span aria-hidden="true">{isExploded ? " ↙" : " ↗"}</span>
        </button>
      </div>

      <div
        className={`anatomy-stage${isExploded ? " is-exploded" : ""}`}
        id="phone-anatomy"
        role="img"
        aria-label={`Ilustrasi anatomi ponsel ${isExploded ? "terurai menjadi layar, rangka, baterai, papan sirkuit, dan kamera" : "tersusun utuh"}. Gunakan tombol untuk mengurai atau merakit kembali.`}
      >
        <div className="anatomy-index" aria-hidden="true">
          <span>KEFFI STUDY</span>
          <span>FIG. 01 / DEVICE</span>
        </div>
        <div className="phone-assembly" aria-hidden="true">
          <div className="phone-layer phone-back">
            <span className="phone-brand">N</span>
            <span className="phone-flash" />
          </div>
          <div className="phone-layer phone-frame">
            <span className="frame-button frame-button-one" />
            <span className="frame-button frame-button-two" />
            <span className="frame-port" />
          </div>
          <div className="phone-layer phone-battery">
            <span>Li-ion</span>
            <span>5000 mAh</span>
          </div>
          <div className="phone-layer phone-board">
            <i className="board-chip" />
            <i className="board-chip board-chip-small" />
            <i className="board-trace trace-one" />
            <i className="board-trace trace-two" />
            <i className="board-connector" />
          </div>
          <div className="phone-layer phone-camera">
            <i />
            <i />
            <i />
          </div>
          <div className="phone-layer phone-screen">
            <span className="screen-notch" />
            <span className="screen-glow" />
            <span className="screen-caption">A little more<br />under the surface.</span>
          </div>
        </div>
        <div className="anatomy-caption" aria-hidden="true">
          <span>DESIGN IS IN THE DETAILS</span>
          <span>EXPLORE ↗</span>
        </div>
      </div>
    </section>
  );
}
