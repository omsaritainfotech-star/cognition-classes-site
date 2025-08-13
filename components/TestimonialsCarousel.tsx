'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

type TItem = { name: string; course?: string; quote: string };

export default function TestimonialsCarousel({items}:{items:TItem[]}){
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    const id = setInterval(()=> setIndex(i => (i+1) % items.length), 5000);
    return ()=> clearInterval(id);
  }, [items.length]);

  const prev = () => setIndex(i => (i - 1 + items.length) % items.length);
  const next = () => setIndex(i => (i + 1) % items.length);

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm p-6 min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-lg text-slate-800">“{items[index].quote}”</p>
            <div className="mt-4 text-sm text-slate-600 font-medium">
              — {items[index].name}{items[index].course ? `, ${items[index].course}` : ''}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-center gap-3 mt-4">
        <button onClick={prev} className="btn">Prev</button>
        <div className="flex gap-1">
          {items.map((_,i)=>(
            <span key={i} className={`h-2 w-2 rounded-full ${i===index?'bg-primary':'bg-slate-300'}`} />
          ))}
        </div>
        <button onClick={next} className="btn">Next</button>
      </div>
    </div>
  );
}
