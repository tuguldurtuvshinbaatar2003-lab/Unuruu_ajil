import { useState, useRef, useEffect } from 'react'
import './AiChat.css'

const SYSTEM = `Та "Тус" гэдэг монгол үлгэрийн мэргэжилтэн туслагч юм. Зөвхөн энэ үлгэрийн тухай л хариулна. Өөр сэдвийг хориглоно.

Үлгэрийн товч агуулга: Нэгэн өвгөн хуучин муу машинаараа тосгонд сүү зарж амьдардаг байв. Нэг өдөр замд тансаг машин шатахуун дуусч зогсоход өвгөн чирж шатахуун станцад хүргэв. Баян эр мөнгө өгөхөд өвгөн "Зовсон хүнд тусалсны хариу мөнгө биш" гэж татгалзав. Хэдэн жилийн дараа өвгөний амьдрал хэцүү болоход тэр баян эр нь Генри Форд байсан бөгөөд шинэ Форд машин бэлэглэв. Гол сургамж: "Аяганы хариу өдөртөө, агтны хариу жилдээ".

Монгол хэлээр богино, ойлгомжтой хариул. 2-3 өгүүлбэрт багтаа.`

const SUGGESTIONS = [
  'Үлгэрийн гол санаа юу вэ?',
  'Өвгөн ямар хүн бэ?',
  'Генри Форд гэж хэн бэ?',
  'Яг ямар сургамж бидэнд хүргэхийг зорьсон бэ?',
]

export default function AiChat() {
  const [msgs, setMsgs] = useState([{ role: 'bot', text: 'Сайн байна уу! Би "Тус" үлгэрийн тухай бүх асуултад хариулна. Юу мэдэхийг хүсч байна вэ? 🤝' }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([])
  const bottomRef = useRef(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs])

  async function send(text) {
    const msg = text || input.trim()
    if (!msg || loading) return
    setInput('')
    setMsgs(m => [...m, { role: 'user', text: msg }])
    setLoading(true)
    const newHistory = [
  { role: 'system', content: SYSTEM },
  ...history,
  { role: 'user', content: msg }
]
    setHistory(newHistory)
    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'openai/gpt-4o-mini',
            messages: newHistory,
          }),
        });
      const data = await res.json()
      const reply = data.choices?.[0]?.message?.content || 'Уучлаарай, алдаа гарлаа.'
      setMsgs(m => [...m, { role: 'bot', text: reply }])
      setHistory(h => [...h, { role: 'assistant', content: reply }])
    } catch {
      setMsgs(m => [...m, { role: 'bot', text: 'Уучлаарай, холболтын алдаа гарлаа.' }])
    }
    setLoading(false)
  }

  return (
    <div className="chat-wrap">
      <div className="chat-header">
        <div className="chat-avatar">🤖</div>
        <div>
          <div className="chat-title">Тус — Багшийн туслах</div>
          <div className="chat-sub">Зохиолын талаар асуугаарай</div>
        </div>
      </div>
      <div className="chat-msgs">
        {msgs.map((m, i) => (
          <div key={i} className={`msg msg-${m.role}`}>{m.text}</div>
        ))}
        {loading && <div className="msg msg-bot msg-thinking">Бодож байна...</div>}
        <div ref={bottomRef} />
      </div>
      <div className="suggest-row">
        {SUGGESTIONS.map((s, i) => (
          <button key={i} className="sug-btn" onClick={() => send(s)}>{s}</button>
        ))}
      </div>
      <div className="chat-input-row">
        <input
          className="chat-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Асуултаа бичнэ үү..."
          disabled={loading}
        />
        <button className="btn btn-primary" onClick={() => send()} disabled={loading || !input.trim()}>
          ➤
        </button>
      </div>
    </div>
  )
}
