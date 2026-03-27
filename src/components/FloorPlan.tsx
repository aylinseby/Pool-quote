"use client";

export default function FloorPlan() {
  return (
    <svg
      width="100%"
      viewBox="0 0 680 530"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="max-w-full"
    >
      {/* Back wall */}
      <rect x="68" y="44" width="544" height="238" fill="none" stroke="#D4A574" strokeWidth="1.2" opacity="0.4" />
      <line x1="68" y1="44" x2="612" y2="44" stroke="#D4A574" strokeWidth="2" opacity="0.6" />
      <line x1="68" y1="44" x2="68" y2="282" stroke="#D4A574" strokeWidth="2" opacity="0.6" />
      <line x1="612" y1="44" x2="612" y2="282" stroke="#D4A574" strokeWidth="2" opacity="0.6" />

      {/* Left WC */}
      <rect x="68" y="44" width="132" height="58" fill="rgba(212,165,116,0.08)" stroke="#D4A574" strokeWidth="0.8" opacity="0.6" />
      <text x="134" y="70" textAnchor="middle" fill="#D4A574" fontSize="14" fontWeight="500">WC</text>
      <text x="134" y="86" textAnchor="middle" fill="#D4A574" fontSize="11" opacity="0.6">2700 x 1200</text>

      {/* Right WC */}
      <rect x="380" y="44" width="132" height="58" fill="rgba(212,165,116,0.08)" stroke="#D4A574" strokeWidth="0.8" opacity="0.6" />
      <text x="446" y="70" textAnchor="middle" fill="#D4A574" fontSize="14" fontWeight="500">WC</text>
      <text x="446" y="86" textAnchor="middle" fill="#D4A574" fontSize="11" opacity="0.6">2700 x 1200</text>

      {/* Pump room */}
      <rect x="520" y="44" width="70" height="50" fill="rgba(212,165,116,0.05)" stroke="#D4A574" strokeWidth="0.5" opacity="0.4" />
      <text x="555" y="64" textAnchor="middle" fill="#D4A574" fontSize="12" opacity="0.6">Pump</text>
      <text x="555" y="78" textAnchor="middle" fill="#D4A574" fontSize="12" opacity="0.6">room</text>

      {/* C1 column */}
      <rect x="224" y="46" width="6" height="20" fill="#D4A574" opacity="0.6" />
      <text x="227" y="42" textAnchor="middle" fill="#D4A574" fontSize="12" opacity="0.5">C1</text>

      {/* C2 column */}
      <rect x="344" y="105" width="6" height="14" fill="#D4A574" opacity="0.7" />
      <text x="360" y="115" fill="#D4A574" fontSize="14" fontWeight="500" opacity="0.7">C2</text>

      {/* C2 dimension lines */}
      <line x1="347" y1="44" x2="347" y2="105" stroke="#E8C9A0" strokeWidth="0.5" strokeDasharray="4 3" opacity="0.3" />
      <text x="365" y="78" fill="#E8C9A0" fontSize="12" opacity="0.5">1200</text>
      <line x1="347" y1="119" x2="347" y2="390" stroke="#E8C9A0" strokeWidth="0.5" strokeDasharray="4 3" opacity="0.3" />
      <text x="365" y="258" fill="#E8C9A0" fontSize="12" opacity="0.5">3520</text>

      {/* Total depth */}
      <text x="313" y="220" textAnchor="middle" fill="#D4A574" fontSize="12" opacity="0.2" writingMode="tb">4720</text>

      {/* Reception desk */}
      <rect x="220" y="115" width="120" height="42" fill="none" stroke="#D4A574" strokeWidth="0.5" strokeDasharray="3 2" opacity="0.4" />
      <text x="280" y="140" textAnchor="middle" fill="#D4A574" fontSize="12" opacity="0.5">Reception desk</text>

      {/* Manager cabin */}
      <rect x="450" y="160" width="80" height="50" fill="none" stroke="#D4A574" strokeWidth="0.5" strokeDasharray="3 2" opacity="0.4" />
      <text x="490" y="182" textAnchor="middle" fill="#D4A574" fontSize="12" opacity="0.5">Manager</text>
      <text x="490" y="196" textAnchor="middle" fill="#D4A574" fontSize="12" opacity="0.5">cabin desk</text>

      {/* Chair */}
      <rect x="548" y="168" width="30" height="30" fill="none" stroke="#D4A574" strokeWidth="0.5" strokeDasharray="3 2" opacity="0.4" />
      <text x="563" y="187" textAnchor="middle" fill="#D4A574" fontSize="12" opacity="0.5">Chair</text>

      {/* Sofa */}
      <g transform="translate(115,250) rotate(-35)">
        <rect x="0" y="0" width="65" height="22" fill="none" stroke="#D4A574" strokeWidth="0.5" strokeDasharray="3 2" opacity="0.4" />
        <text x="32" y="15" textAnchor="middle" fill="#D4A574" fontSize="12" opacity="0.5">Sofa</text>
      </g>

      {/* Pillars */}
      <rect x="62" y="175" width="14" height="14" fill="#D4A574" />
      <text x="69" y="186" textAnchor="middle" dominantBaseline="central" fill="#1C1917" fontSize="11" fontWeight="700">P1</text>
      <rect x="175" y="378" width="14" height="14" fill="#D4A574" />
      <text x="182" y="389" textAnchor="middle" dominantBaseline="central" fill="#1C1917" fontSize="11" fontWeight="700">P2</text>
      <rect x="340" y="387" width="14" height="14" fill="#D4A574" />
      <text x="347" y="398" textAnchor="middle" dominantBaseline="central" fill="#1C1917" fontSize="11" fontWeight="700">P3</text>
      <rect x="468" y="378" width="14" height="14" fill="#D4A574" />
      <text x="475" y="389" textAnchor="middle" dominantBaseline="central" fill="#1C1917" fontSize="11" fontWeight="700">P4</text>
      <rect x="606" y="155" width="14" height="14" fill="#D4A574" />
      <text x="613" y="166" textAnchor="middle" dominantBaseline="central" fill="#1C1917" fontSize="11" fontWeight="700">P5</text>

      {/* Glass bays */}
      <line x1="68" y1="190" x2="68" y2="282" stroke="#5B8BA0" strokeWidth="1.5" />
      <text x="57" y="240" textAnchor="middle" fill="#5B8BA0" fontSize="12" writingMode="tb">3.34 m</text>
      <line x1="612" y1="170" x2="612" y2="282" stroke="#5B8BA0" strokeWidth="1.5" />
      <text x="625" y="228" textAnchor="middle" fill="#5B8BA0" fontSize="12" writingMode="tb">2.38 m</text>
      <path d="M 69 189 C 69 280, 105 355, 182 385" fill="none" stroke="#5B8BA0" strokeWidth="1.5" />
      <text x="95" y="315" fill="#5B8BA0" fontSize="12" transform="rotate(-55,95,315)">4.16 m</text>
      <path d="M 189 392 C 235 425, 298 430, 347 395" fill="none" stroke="#5B8BA0" strokeWidth="1.5" />
      <text x="262" y="435" textAnchor="middle" fill="#5B8BA0" fontSize="12">2.73 m</text>
      <path d="M 354 395 C 400 425, 445 425, 475 385" fill="none" stroke="#5B8BA0" strokeWidth="1.5" />
      <text x="415" y="435" textAnchor="middle" fill="#5B8BA0" fontSize="12">2.33 m</text>
      <path d="M 482 385 C 548 350, 613 275, 613 169" fill="none" stroke="#5B8BA0" strokeWidth="1.5" />
      <text x="572" y="305" fill="#5B8BA0" fontSize="12" transform="rotate(55,572,305)">3.45 m</text>

      {/* Bay labels */}
      <text x="54" y="240" textAnchor="middle" fill="#5B8BA0" fontSize="11" opacity="0.6" writingMode="tb">Bay 1</text>
      <text x="125" y="345" fill="#5B8BA0" fontSize="11" opacity="0.6" transform="rotate(-55,125,345)">Bay 2</text>
      <text x="262" y="448" textAnchor="middle" fill="#5B8BA0" fontSize="11" opacity="0.6">Bay 3</text>
      <text x="415" y="448" textAnchor="middle" fill="#5B8BA0" fontSize="11" opacity="0.6">Bay 4</text>
      <text x="548" y="335" fill="#5B8BA0" fontSize="11" opacity="0.6" transform="rotate(55,548,335)">Bay 5</text>
      <text x="628" y="228" textAnchor="middle" fill="#5B8BA0" fontSize="11" opacity="0.6" writingMode="tb">Bay 6</text>

      {/* Overall dim */}
      <text x="340" y="27" textAnchor="middle" fill="#D4A574" fontSize="12" opacity="0.3">9490</text>
      <text x="260" y="56" textAnchor="middle" fill="#D4A574" fontSize="12" opacity="0.25">Back wall — no glass</text>

      {/* Legend */}
      <text x="68" y="472" fill="#D4A574" fontSize="11" opacity="0.3">Both WCs: 2700 x 1200 mm on back wall | C2: 1200 from wall, aligned with P3</text>
      <text x="68" y="486" fill="#D4A574" fontSize="11" opacity="0.3">C1 = 500 x 200 | C2 = 300 x 200 | Pump room: 1450 x 2380 | All dims in mm</text>
    </svg>
  );
}
