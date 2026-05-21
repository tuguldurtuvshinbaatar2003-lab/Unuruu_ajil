import { useState } from 'react'
import './Unshikh.css'

const VOCAB = [
  { word: 'сарвайх',      def: 'Гараа сунган өгөх' },
  { word: 'тансаг',       def: 'Маш үнэтэй, гоё, зэрэглэл өндөртэй' },
  { word: 'залгуулах',    def: 'Амьдралаа аргацаан зуугаа хийх' },
  { word: 'доройтох',     def: 'Муудах, буурах, хэцүү болох' },
  { word: 'бөмбөрөх',    def: 'Дусаад урсаж эхлэх' },
  { word: 'таталгах',     def: 'Гарын үсэг зурах' },
]

const QUIZ = [
  { q: '1. Өвгөн ямар машинаар тосгонд явдаг байв?', opts: ['Тансаг шинэ машин', 'Хуучин муу машин', 'Мотоцикл', 'Морь тэрэг'], ans: 1 },
  { q: '2. Замд зогссон тансаг машин яагаад зогссон байв?', opts: ['Шатахуун дуссан', 'Гэмтсэн байсан', 'Жолооч унтсан', 'Зам хаагдсан'], ans: 0 },
  { q: '3. Өвгөн мөнгийг авахаас яагаад татгалзав?', opts: ['Мөнгө хэрэггүй байсан', 'Зовсон хүнд туслах нь буян гэж үзсэн', 'Тэр хүнд дургүй байсан', 'Мөнгө хангалтгүй байсан'], ans: 1 },
  { q: '4. Захидал хэн илгээсэн байв?', opts: ['Тансаг машины жолооч', 'Генри Форд', 'Тосгоны дарга', 'Өвгөний хүү'], ans: 1 },
  { q: '5. Үлгэрийн гол сургамж юу вэ?', opts: ['Баян хүнтэй найз бол', 'Сайн үйл заавал хариугаа авчирдаг', 'Хуучин машин хэрэглэх хэрэггүй', 'Мөнгийг хүндэтгэ'], ans: 1 },
]

export default function Unshikh() {
  const [chosen, setChosen] = useState({})
  const [done, setDone] = useState({})
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  function pick(qi, oi) {
    if (done[qi]) return
    const correct = QUIZ[qi].ans
    const newDone = { ...done, [qi]: true }
    const newChosen = { ...chosen, [qi]: oi }
    setChosen(newChosen)
    setDone(newDone)
    const newScore = score + (oi === correct ? 1 : 0)
    setScore(newScore)
    if (Object.keys(newDone).length === QUIZ.length) setFinished(true)
  }

  function reset() {
    setChosen({}); setDone({}); setScore(0); setFinished(false)
  }

  const msgs = ['Дахин хичээгээрэй! 💪', 'Тийм ч муу биш! 👍', 'Сайн! 🌟', 'Маш сайн! 🏆', 'Гайхалтай! 🎉', 'Төгс! 🥇']

  return (
    <div>
      <div className="vocab-card">
        <div className="vocab-header">📚 Шинэ үгийн сан</div>
        {VOCAB.map((v, i) => (
          <div key={i} className="vocab-row">
            <span className="vocab-word">{v.word}</span>
            <span className="vocab-def">{v.def}</span>
          </div>
        ))}
      </div>

      <div className="quiz-section-title">✏️ Зөв хариултыг сонго</div>
      {QUIZ.map((q, qi) => (
        <div key={qi} className="quiz-card">
          <div className="quiz-q">{q.q}</div>
          <div className="quiz-opts">
            {q.opts.map((opt, oi) => {
              let cls = 'opt'
              if (done[qi]) {
                if (oi === q.ans) cls += ' correct'
                else if (chosen[qi] === oi) cls += ' wrong'
              }
              return (
                <button key={oi} className={cls} onClick={() => pick(qi, oi)} disabled={!!done[qi]}>
                  {opt}
                </button>
              )
            })}
          </div>
        </div>
      ))}

      {finished && (
        <div className="score-box">
          <div className="score-big">{score}/{QUIZ.length}</div>
          <div className="score-msg">{msgs[score] || msgs[5]}</div>
          <button className="btn" onClick={reset}>🔄 Дахин оролдох</button>
        </div>
      )}
    </div>
  )
}
