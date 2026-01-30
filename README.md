# ResumeAI - AI-Powered Resume & Portfolio Review

A modern web application that uses OpenAI's GPT-4 to provide instant, actionable feedback on resumes and portfolios. Built with Next.js 16, React 19, and Tailwind CSS 4.

[ResumeAI Preview](https://ai-resume-viewer.vercel.app/)

## ✨ Features

- **AI-Powered Analysis**: Get comprehensive reviews using GPT-4 Turbo
- **Multiple Input Methods**: 
  - Paste text directly
  - Upload files (PDF, DOCX, TXT, MD)
- **Resume & Portfolio Support**: Toggle between review types for tailored feedback
- **Detailed Feedback**:
  - Overall score (0-100)
  - Strengths analysis
  - Areas for improvement
  - Actionable recommendations
  - Relevant keywords identified
- **Modern UI**: Beautiful dark theme with smooth animations using Framer Motion
- **Responsive Design**: Works seamlessly on desktop and mobile

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Frontend**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **AI**: OpenAI GPT-4 Turbo
- **File Parsing**:
  - `pdf-parse` for PDF files
  - `mammoth` for DOCX files
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 20.16.0+ or 22.3.0+
- npm, yarn, pnpm, or bun
- OpenAI API key

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-resume-viewer.git
   cd ai-resume-viewer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ai-resume-viewer/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── review/
│   │   │       └── route.ts      # API endpoint for AI review
│   │   ├── globals.css           # Global styles & CSS variables
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   ├── components/
│   │   ├── ui/
│   │   │   ├── SelectorButton.tsx
│   │   │   └── SecondSelectorButton.tsx
│   │   ├── Header.tsx
│   │   ├── MainProcessor.tsx     # Main app logic
│   │   ├── ReviewForm.tsx        # Input form component
│   │   ├── ReviewResult.tsx      # Results display
│   │   └── FeatureGrid.tsx       # Feature cards
│   └── lib/
│       └── utils.ts              # Utility functions
├── public/                       # Static assets
├── .env.local                    # Environment variables (not committed)
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
└── package.json
```

## 🔧 Configuration

### Next.js Config

The `next.config.ts` includes `pdf-parse` in `serverExternalPackages` to ensure proper module loading:

```typescript
const nextConfig: NextConfig = {
  serverExternalPackages: ["pdf-parse"],
};
```

### CSS Variables

Custom color theme is defined in `globals.css` using CSS variables with OKLCH colors for better color accuracy:

```css
:root {
  --primary: #00b79c;
  --background: oklch(.12 .01 250);
  --foreground: oklch(.95 .01 250);
  /* ... */
}
```

## 📝 Usage

1. **Select Review Type**: Choose between "Resume" or "Portfolio" using the toggle buttons
2. **Input Your Content**:
   - **Paste Text**: Click "Paste Text" and enter your content in the textarea
   - **Upload File**: Click "Upload File" and drag & drop or select a file (PDF, DOCX, TXT, MD)
3. **Get Review**: Click "Get AI Review" to submit
4. **View Results**: Review your score, strengths, areas for improvement, and actionable recommendations

## 🔐 API Endpoints

### POST `/api/review`

Analyzes resume or portfolio content and returns AI-generated feedback.

**Request Body (FormData)**:
- `type`: "resume" | "portfolio"
- `mode`: "text" | "file"
- `text`: (optional) Text content
- `file`: (optional) File upload

**Response**:
```json
{
  "score": 85,
  "summary": "Brief summary of the candidate's profile...",
  "strengths": ["Strength 1", "Strength 2"],
  "weaknesses": ["Area for improvement 1", "Area for improvement 2"],
  "actionItems": ["Recommendation 1", "Recommendation 2"],
  "keywords": ["Keyword 1", "Keyword 2"]
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add `OPENAI_API_KEY` to Environment Variables
4. Deploy!

### Other Platforms

Build the production bundle:
```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js and OpenAI
