interface MarkdownBlockProps {
  content: string;
}

export function MarkdownBlock({ content }: MarkdownBlockProps) {
  // Simple markdown parser for basic needs (### and ** and \n)
  const parseMarkdown = (text: string) => {
    return text
      .split("\n")
      .map((line, i) => {
        if (line.startsWith("### ")) {
          return <h3 key={i} className="text-[22px] font-bold text-slate-900 mb-4 font-serif">{line.replace("### ", "")}</h3>;
        }
        if (line.trim() === "") return <div key={i} className="h-4" />;
        
        // Handle Bold
        const parts = line.split(/(\*\*.*?\*\*)/g);
        const renderedLine = parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={j} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
          }
          return part;
        });

        return <p key={i} className="text-[17px] leading-relaxed text-slate-600 mb-4">{renderedLine}</p>;
      });
  };

  return <div className="markdown-block">{parseMarkdown(content)}</div>;
}
