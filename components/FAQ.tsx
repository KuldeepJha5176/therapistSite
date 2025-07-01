
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const Faq = () => {
    const faqData = [
      {
        question: "Do you accept insurance?",
        answer: "No, but a superbill is provided for self-submission.",
      },
      {
        question: "Are online sessions available?",
        answer: "Yes—all virtual sessions via Zoom.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "24-hour notice required.",
      },
    ];
  
    return (
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-light text-center mb-4 text-slate-600">
          Frequently Asked Questions
        </h1>
        
        <div className="mt-16">
          <h2 className="text-2xl font-light text-slate-600 mb-8">Therapy</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-1">
            {faqData.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-slate-300"
              >
                <AccordionTrigger className="text-left text-lg font-normal text-slate-600 hover:text-slate-800 py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    );
  };
  
  export default Faq;
  