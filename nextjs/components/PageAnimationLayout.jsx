import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function PageAnimationLayout({ children }) {
  const router = useRouter();

  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial={{ opacity: 0, marginTop: '100px' }}
        animate={{
          opacity: 1,
          marginTop: '0px',
          transition: {
            delay: 0.3,
          },
        }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
