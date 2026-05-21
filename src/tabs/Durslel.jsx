import { useState } from 'react'
import './Durslel.css'

const SLIDES = [
  {
    title: 'Өвгөн ба хуучин машин',
    sub: 'Айлуудаас сүү авч зардаг байв',
    text: 'Өвгөн тэр өдөр мөн л айлуудаас сүүгээ авахаар хуучин муу машинаараа тосгон руу явж байлаа. Насаараа энэ машинаараа тосгоны айлуудаас сүү авч зарж амьжиргаагаа залгуулжээ.',
    bg: '#87CEEB',
    scene: 'road',
  },
  {
    title: 'Замд учирсан тансаг машин',
    sub: 'Тусламж гуйсан жолооч',
    text: 'Замын хажууд зогссон тансаг машины жолооч гар өргөн өвгөнөөс хамгийн ойр байгаа шатахуун түгээх газар руу машиныг чирж өгөхийг гуйв. Өвгөн зөвшөөрч тансаг машиныг өөрийн муу машинаараа чирсээр шатахуун түгээгүүрт хүргэж өгчээ.',
    bg: '#a8d8a8',
    scene: 'tow',
  },
  {
    title: 'Мөнгөнөөс татгалзсан өвгөн',
    sub: 'Сэтгэлийн баялаг',
    text: 'Баян эр халааснаасаа хамгийн том мөнгөн дэвсгэрт гаргаж өвгөнд сарвайхад өвгөн: "Хэрэггүй хүү минь, зовсон хүнд тусалсны хариу мөнгө биш шүү дээ" гээд авсангүй.',
    bg: '#fef3f0',
    scene: 'money',
  },
  {
    title: 'Хэцүү амьдрал',
    sub: 'Жилүүд өнгөрөв',
    text: 'Энэ явдлаас хойш хэдэн жилийн дараа өвгөний муу машин бүр асахаа байжээ. Өвгөний амьдрал дороо л доройтож эхлэв. Нэг өдөр тэднийд нэг захидал авчирч өгчээ.',
    bg: '#b0c4de',
    scene: 'hard',
  },
  {
    title: 'Генри Фордын захидал',
    sub: 'Аяганы хариу өдөртөө...',
    text: '"Таныг нэлээд хүнд амьдралтай байгааг сонслоо. Тиймээ зовсон цагт нь хүн хүндээ туслах ёстой. Энэ хамгийн сүүлийн загварын машин, одоо таных... — Генри Форд" Өвгөний нүднээс нулимс бөмбөрч эхлэв.',
    bg: '#fff8f0',
    scene: 'letter',
  },
]

function Scene({ type, bg }) {
  const svgs = {
    road: (
      <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <rect width="500" height="200" fill="#87CEEB"/>
        <ellipse cx="80" cy="60" rx="50" ry="28" fill="#fff"/>
        <ellipse cx="380" cy="45" rx="60" ry="30" fill="#fff"/>
        <circle cx="430" cy="40" r="28" fill="#FFD700" opacity=".9"/>
        <rect x="0" y="145" width="500" height="55" fill="#8B6914"/>
        <rect x="0" y="133" width="500" height="14" fill="#a0522d"/>
        <rect x="50" y="150" width="30" height="6" fill="#555" rx="3"/>
        <rect x="0" y="155" width="500" height="4" fill="#777" opacity=".3"/>
        <rect x="150" y="95" width="110" height="52" fill="#888" rx="6"/>
        <rect x="145" y="112" width="25" height="32" fill="#666" rx="3"/>
        <rect x="240" y="108" width="20" height="22" fill="#aaa" rx="2"/>
        <circle cx="175" cy="152" r="15" fill="#333"/>
        <circle cx="175" cy="152" r="7" fill="#777"/>
        <circle cx="230" cy="152" r="15" fill="#333"/>
        <circle cx="230" cy="152" r="7" fill="#777"/>
        <rect x="110" y="70" width="6" height="60" fill="#555"/>
        <rect x="107" y="70" width="12" height="5" fill="#e8513a"/>
        <text x="250" y="192" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">Тосгон руу явж байна...</text>
      </svg>
    ),
    tow: (
      <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <rect width="500" height="200" fill="#87CEEB"/>
        <rect x="0" y="145" width="500" height="55" fill="#8B6914"/>
        <rect x="0" y="133" width="500" height="14" fill="#a0522d"/>
        <rect x="55" y="98" width="92" height="48" fill="#888" rx="6"/>
        <rect x="50" y="112" width="26" height="32" fill="#666" rx="3"/>
        <circle cx="78" cy="150" r="14" fill="#333"/><circle cx="78" cy="150" r="6" fill="#777"/>
        <circle cx="124" cy="150" r="14" fill="#333"/><circle cx="124" cy="150" r="6" fill="#777"/>
        <line x1="148" y1="126" x2="292" y2="122" stroke="#f0a030" strokeWidth="3" strokeDasharray="8,5"/>
        <rect x="292" y="95" width="135" height="52" fill="#3a7bd5" rx="10"/>
        <rect x="304" y="102" width="36" height="24" fill="#b0d4ff" rx="3"/>
        <rect x="350" y="102" width="36" height="24" fill="#b0d4ff" rx="3"/>
        <circle cx="318" cy="150" r="14" fill="#1a1a2e"/><circle cx="318" cy="150" r="6" fill="#555"/>
        <circle cx="390" cy="150" r="14" fill="#1a1a2e"/><circle cx="390" cy="150" r="6" fill="#555"/>
        <text x="250" y="192" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">Тансаг машиныг чирч байна</text>
      </svg>
    ),
    money: (
      <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <rect width="500" height="200" fill="#fef3f0"/>
        <circle cx="155" cy="88" r="42" fill="#f4a261"/>
        <circle cx="155" cy="66" r="24" fill="#f4c78f"/>
        <rect x="134" y="112" width="42" height="52" fill="#8B4513"/>
        <rect x="150" y="124" width="12" height="40" fill="#6B3410" rx="2"/>
        <circle cx="345" cy="88" r="42" fill="#3a7bd5"/>
        <circle cx="345" cy="66" r="24" fill="#7ab0e8"/>
        <rect x="324" y="112" width="42" height="52" fill="#1a4a8c"/>
        <rect x="340" y="124" width="12" height="40" fill="#133a70" rx="2"/>
        <rect x="222" y="108" width="56" height="26" fill="#2d6a4f" rx="6"/>
        <text x="250" y="126" textAnchor="middle" fontSize="13" fill="#fff" fontFamily="sans-serif" fontWeight="bold">₮₮₮</text>
        <line x1="197" y1="95" x2="222" y2="112" stroke="#e8513a" strokeWidth="2" strokeDasharray="4,3"/>
        <text x="250" y="192" textAnchor="middle" fontSize="12" fill="#8B4513" fontFamily="sans-serif">"Мөнгө биш шүү дээ..."</text>
      </svg>
    ),
    hard: (
      <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <rect width="500" height="200" fill="#b0c4de"/>
        <rect x="0" y="145" width="500" height="55" fill="#6B6B6B"/>
        <rect x="175" y="55" width="150" height="95" fill="#c9b99a" rx="5"/>
        <rect x="192" y="68" width="42" height="36" fill="#a0d0f0" rx="2"/>
        <rect x="246" y="68" width="42" height="36" fill="#a0d0f0" rx="2"/>
        <rect x="213" y="122" width="32" height="28" fill="#8B5E3C" rx="3"/>
        <rect x="55" y="92" width="85" height="48" fill="#777" rx="6"/>
        <text x="97" y="122" textAnchor="middle" fontSize="9" fill="#ccc" fontFamily="sans-serif">ЭВДЭРСЭН</text>
        <circle cx="72" cy="143" r="13" fill="#333"/><circle cx="72" cy="143" r="5" fill="#666"/>
        <circle cx="117" cy="143" r="13" fill="#333"/><circle cx="117" cy="143" r="5" fill="#666"/>
        <path d="M155 80 Q165 65 175 80" fill="none" stroke="#999" strokeWidth="2"/>
        <path d="M325 80 Q335 65 345 80" fill="none" stroke="#999" strokeWidth="2"/>
        <rect x="370" y="88" width="68" height="48" fill="#aaa" rx="4"/>
        <text x="404" y="118" textAnchor="middle" fontSize="22" fontFamily="sans-serif">✉️</text>
        <text x="250" y="192" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="sans-serif">Амьдрал хэцүү болов...</text>
      </svg>
    ),
    letter: (
      <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
        <rect width="500" height="200" fill="#fff8f0"/>
        <rect x="175" y="40" width="150" height="110" fill="#fff" rx="8" stroke="#e8d5c0" strokeWidth="2"/>
        <line x1="193" y1="68" x2="307" y2="68" stroke="#f0d8c0" strokeWidth="1.5"/>
        <line x1="193" y1="84" x2="300" y2="84" stroke="#f0d8c0" strokeWidth="1.5"/>
        <line x1="193" y1="100" x2="303" y2="100" stroke="#f0d8c0" strokeWidth="1.5"/>
        <line x1="193" y1="116" x2="288" y2="116" stroke="#f0d8c0" strokeWidth="1.5"/>
        <text x="250" y="136" textAnchor="middle" fontSize="10" fill="#e8513a" fontFamily="sans-serif" fontStyle="italic">— Генри Форд</text>
        <circle cx="95" cy="88" r="32" fill="#f4c78f"/>
        <circle cx="88" cy="82" r="4" fill="#8B4513"/>
        <circle cx="102" cy="82" r="4" fill="#8B4513"/>
        <path d="M84 97 Q95 107 106 97" fill="none" stroke="#8B4513" strokeWidth="2"/>
        <path d="M88 72 Q95 65 102 72" fill="none" stroke="#c8a060" strokeWidth="1.5"/>
        <path d="M92 106 Q95 118 96 124" stroke="#87CEEB" strokeWidth="2.5" fill="none"/>
        <circle cx="96" cy="127" r="4" fill="#87CEEB"/>
        <rect x="355" y="95" width="95" height="52" fill="#e8513a" rx="10"/>
        <circle cx="373" cy="150" r="13" fill="#111"/><circle cx="373" cy="150" r="5" fill="#555"/>
        <circle cx="432" cy="150" r="13" fill="#111"/><circle cx="432" cy="150" r="5" fill="#555"/>
        <text x="403" y="126" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="sans-serif" fontWeight="bold">FORD</text>
        <text x="250" y="192" textAnchor="middle" fontSize="12" fill="#8B4513" fontFamily="sans-serif">Аяганы хариу өдөртөө...</text>
      </svg>
    ),
  }
  return (
    <div className="scene-area" style={{ background: bg }}>
      {svgs[type]}
    </div>
  )
}

export default function Durslel() {
  const [cur, setCur] = useState(0)
  const slide = SLIDES[cur]
  return (
    <div className="slide-wrap">
      <Scene type={slide.scene} bg={slide.bg} />
      <div className="card-body">
        <div className="card-title">{slide.title}</div>
        <div className="card-sub">{slide.sub}</div>
        <div className="card-text">{slide.text}</div>
        <div className="slide-nav">
          <button className="btn" onClick={() => setCur(c => c - 1)} disabled={cur === 0}>← Өмнөх</button>
          <div className="dots">
            {SLIDES.map((_, i) => (
              <div key={i} className={`dot${i === cur ? ' active' : ''}`} onClick={() => setCur(i)} />
            ))}
          </div>
          <button className="btn btn-primary" onClick={() => setCur(c => c + 1)} disabled={cur === SLIDES.length - 1}>Дараах →</button>
        </div>
      </div>
    </div>
  )
}
