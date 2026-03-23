import { MarkdownBlock } from "./blocks/MarkdownBlock";
import { MathDisplayBlock } from "./blocks/MathDisplayBlock";
import { MultipleChoiceBlock } from "./blocks/MultipleChoiceBlock";
import { DragAndDropEquationBlock } from "./blocks/DragAndDropEquationBlock";
import { AnimatedSVGBlock } from "./blocks/AnimatedSvgBlock";

interface SlideBlock {
  type: string;
  [key: string]: any;
}

interface SlideRendererProps {
  blocks: SlideBlock[];
}

export function SlideRenderer({ blocks }: SlideRendererProps) {
  return (
    <div className="slide-renderer flex flex-col gap-6 w-full max-w-2xl mx-auto py-10">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "markdown":
            return <MarkdownBlock key={index} content={block.content} />;
          case "math_display":
            return <MathDisplayBlock key={index} equation={block.equation} />;
          case "multiple_choice":
            return (
              <MultipleChoiceBlock
                key={index}
                options={block.options}
                successMessage={block.successMessage}
                errorMessage={block.errorMessage}
              />
            );
          case "drag_and_drop_equation":
            return (
              <DragAndDropEquationBlock
                key={index}
                equationTemplate={block.equationTemplate}
                availableBlocks={block.availableBlocks}
                correctAnswer={block.correctAnswer}
                successMessage={block.successMessage}
                errorMessage={block.errorMessage}
              />
            );
          case "animated_svg":
            return (
              <AnimatedSVGBlock
                key={index}
                concept={block.concept}
                initialState={block.initialState}
              />
            );
          default:
            return (
              <div
                key={index}
                className="p-4 bg-yellow-50 text-yellow-800 rounded-md"
              >
                Unknown block type: {block.type}
              </div>
            );
        }
      })}
    </div>
  );
}
