import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { FAQ } from '@/types';

interface AccordionFAQProps {
  faqs: FAQ[];
  className?: string;
}

export function AccordionFAQ({ faqs, className }: AccordionFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={cn(
            "border border-border rounded-xl overflow-hidden transition-colors",
            openIndex === index && "border-solidbp-blue"
          )}
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className={cn(
              "font-medium pr-4",
              openIndex === index && "text-solidbp-blue"
            )}>
              {faq.question}
            </span>
            <ChevronDown
              className={cn(
                "w-5 h-5 flex-shrink-0 text-muted-foreground transition-transform duration-300",
                openIndex === index && "rotate-180 text-solidbp-blue"
              )}
            />
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
