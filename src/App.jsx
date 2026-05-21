import { useState } from 'react'
import Durslel from './tabs/Durslel.jsx'
import Yaria from './tabs/Yaria.jsx'
import Unshikh from './tabs/Unshikh.jsx'
import AiChat from './tabs/AiChat.jsx'
import './App.css'

const TABS = [
  { id: 'durslel', label: '📖 Дүрслэл' },
  { id: 'yaria',   label: '📝 Яриа' },
  { id: 'unshikh', label: '✏️ Унших, бичих' },
  { id: 'ai',      label: '💬 Асуулт хариулт' },
]

export default function App() {
  const [active, setActive] = useState('durslel')
  return (
    <div className="page">
      <header className="hero">
        {/* <div className="hero-icon">🤝</div> */}
        <h1>3-р анги</h1>
        <p>Монгол үлгэр · Интерактив сурах орчин</p>
      </header>
      <nav className="tabs">
        {TABS.map(t => (
          <button
            key={t.id}
            className={`tab${active === t.id ? ' active' : ''}`}
            onClick={() => setActive(t.id)}
          >{t.label}</button>
        ))}
      </nav>
      <main className="content">
        {active === 'durslel' && <Durslel />}
        {active === 'yaria'   && <Yaria />}
        {active === 'unshikh' && <Unshikh />}
        {active === 'ai'      && <AiChat />}
      </main>
      <footer className="footer">3-р ангийн монгол хэлний үлгэр</footer>
    </div>
  )
}
