# Тус — Монгол хэлний үлгэр

Интерактив сурах орчин. React + Vite дээр бүтээсэн.

## Vercel-д байршуулах алхамууд

### 1. GitHub repository үүсгэх
1. [github.com](https://github.com) → **New repository** → нэр өгнө (жнь: `tus-story`)
2. Public сонгоно → **Create repository**

### 2. Кодыг GitHub-д оруулах
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ТАНЫ_НЭР/tus-story.git
git push -u origin main
```

### 3. Vercel-д холбох
1. [vercel.com](https://vercel.com) → **Sign up with GitHub**
2. **New Project** → GitHub repository сонгоно
3. Framework: **Vite** — автоматаар илрүүлнэ
4. **Deploy** товч дарна

**БОЛОО!** 30 секундын дотор `https://tus-story.vercel.app` гэсэн URL авна.

### 4. AI chat ажиллуулах (заавал биш)
AI chat нь Anthropic API ашигладаг. Vercel dashboard → Settings → Environment Variables:
```
VITE_ANTHROPIC_API_KEY = sk-ant-xxxxx
```
