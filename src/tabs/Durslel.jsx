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
      "/images/road.png"
    ),
    tow: (
      "/images/tow.png"
    ),
    money: (
      "/images/money.png"
    ),
    hard: (
      "/images/life.png"
    ),
    letter: (
      "/images/tugsgul.png"
    ),
  }
  return (
    <div className="scene-area" >
      <img src={images[type]} alt={type} style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
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
