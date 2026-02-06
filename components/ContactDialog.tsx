'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
}

export default function ContactDialog({ isOpen, onClose, theme }: ContactDialogProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('huikang.wesley@gmail.com');
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = 'huikang.wesley@gmail.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const fill = theme === 'light' ? '#000' : '#fff';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Click-outside backdrop */}
          <div className="fixed inset-0 z-[100]" onClick={onClose} />

          {/* Dropdown card - positioned below Contact button */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 z-[101]" style={{ marginTop: '36px' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -8 }}
              transition={{ type: 'spring', stiffness: 420, damping: 28 }}
            >
              <div
                className="relative rounded-2xl shadow-2xl"
                style={{
                  width: '480px',
                  background: theme === 'light' ? '#fff' : '#2b2b2b',
                  padding: '36px 32px 32px',
                }}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 opacity-60 hover:opacity-100 transition-opacity"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.2929 4.29289C18.6834 3.90237 19.3164 3.90237 19.707 4.29289C20.0975 4.68342 20.0975 5.31643 19.707 5.70696L13.414 11.9999L19.707 18.2929C20.0975 18.6834 20.0975 19.3164 19.707 19.707C19.3164 20.0975 18.6834 20.0975 18.2929 19.707L11.9999 13.414L5.70696 19.707C5.31643 20.0975 4.68342 20.0975 4.29289 19.707C3.90237 19.3164 3.90237 18.6834 4.29289 18.2929L10.5859 11.9999L4.29289 5.70696C3.90237 5.31643 3.90237 4.68342 4.29289 4.29289C4.68342 3.90237 5.31643 3.90237 5.70696 4.29289L11.9999 10.5859L18.2929 4.29289Z" fill={fill} />
                  </svg>
                </button>

                {/* Header: Video Character + Title */}
                <div className="flex items-center gap-3">
                  <video
                    key={theme}
                    src={theme === 'dark' ? '/images/say_hi_dark.mp4' : '/images/say_hi_light.mp4'}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="flex-shrink-0"
                    style={{ width: '140px' }}
                  />
                  <h2
                    className="text-2xl font-bold leading-snug"
                    style={{ color: fill }}
                  >
                    Feel free to reach out!
                  </h2>
                </div>

                {/* Separator: 3px black line */}
                <div
                  style={{
                    height: '3px',
                    background: theme === 'light' ? '#000' : 'rgba(255, 255, 255, 0.25)',
                    marginBottom: '24px',
                  }}
                />

                {/* Contact Items */}
                <div className="space-y-5">
                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="flex-shrink-0">
                      <path fillRule="evenodd" clipRule="evenodd" d="M25.833 5.5C27.3058 5.5 28.5 6.69423 28.5 8.16699V23.833C28.5 25.3058 27.3058 26.5 25.833 26.5H6.16699C4.69423 26.5 3.5 25.3058 3.5 23.833V8.16699C3.5 6.69423 4.69423 5.5 6.16699 5.5H25.833ZM18.3906 17.5371C17.0058 18.821 14.9942 18.821 13.6094 17.5371L6.16699 10.6367V23.833H25.833V10.6367L18.3906 17.5371ZM15.2031 15.4092C15.6647 15.8372 16.3353 15.8371 16.7969 15.4092L24.6084 8.16699H7.3916L15.2031 15.4092Z" fill={fill} />
                    </svg>
                    <span style={{ color: fill, fontSize: '20px' }}>
                      huikang.wesley@gmail.com
                    </span>
                    <button
                      onClick={handleCopy}
                      className="ml-auto hover:opacity-70 transition-opacity"
                      title={copied ? 'Copied!' : 'Copy email'}
                    >
                      {copied ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" stroke={fill} />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <g opacity="0.5">
                            <path d="M18 4C19.1046 4 20 4.89543 20 6V20C21.1046 20 22 19.1046 22 18V6C22 3.79086 20.2091 2 18 2H8C6.89543 2 6 2.89543 6 4L18 4Z" fill={fill} />
                            <path fillRule="evenodd" clipRule="evenodd" d="M17 7H5V20H17V7ZM5 5C3.89543 5 3 5.89543 3 7V20C3 21.1046 3.89543 22 5 22H17C18.1046 22 19 21.1046 19 20V7C19 5.89543 18.1046 5 17 5H5Z" fill={fill} />
                          </g>
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Phone */}
                  <a
                    href="tel:+17827754746"
                    className="flex items-center gap-3 hover:opacity-70 transition-opacity"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="flex-shrink-0">
                      <path d="M12 22.6693C12 23.4057 12.597 24.0026 13.3333 24.0026H18.6667C19.403 24.0026 20 23.4057 20 22.6693C20 21.9329 19.403 21.3359 18.6667 21.3359H13.3333C12.597 21.3359 12 21.9329 12 22.6693Z" fill={fill} />
                      <path fillRule="evenodd" clipRule="evenodd" d="M6 6.0026C6 4.52985 7.19391 3.33594 8.66667 3.33594H23.3333C24.8061 3.33594 26 4.52984 26 6.0026V26.0026C26 27.4754 24.8061 28.6693 23.3333 28.6693H8.66667C7.19391 28.6693 6 27.4754 6 26.0026V6.0026ZM8.66667 6.0026H23.3333V26.0026H8.66667L8.66667 6.0026Z" fill={fill} />
                    </svg>
                    <span style={{ color: fill, fontSize: '20px' }}>
                      +1 (782) 775 4746
                    </span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/huikang-li-096693a7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:opacity-70 transition-opacity"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="flex-shrink-0">
                      <path d="M25.3281 5.3335C26.7995 5.33358 27.9941 6.52778 27.9941 8.00049V26.7085C27.9941 28.1812 26.7994 29.3754 25.3281 29.3755H6.66699C5.19558 29.3755 4 28.1813 4 26.7085V8.00049C4 6.52773 5.19558 5.3335 6.66699 5.3335H25.3281ZM6.66699 26.7085H25.3281V8.00049H6.66699V26.7085ZM11.6416 24.9009H8.6416V13.9009H11.6416V24.9009ZM16.6416 15.6714C18.0416 13.0814 23.6416 12.8911 23.6416 18.1411V24.9009H20.6416V19.3013C20.6416 15.9313 16.6416 16.1813 16.6416 19.3013V24.9009H13.6416V13.9009H16.6416V15.6714ZM9.79395 9.12158C10.1403 9.05635 10.4986 9.09637 10.8223 9.23584C11.1459 9.37539 11.4209 9.60816 11.6113 9.90479C11.8018 10.2015 11.8995 10.5484 11.8916 10.9009C11.8863 11.3615 11.6987 11.8016 11.3711 12.1255C11.0436 12.4491 10.602 12.6312 10.1416 12.6313C9.78902 12.6352 9.44295 12.5332 9.14844 12.3394C8.85392 12.1455 8.62408 11.8679 8.48828 11.5425C8.35258 11.2172 8.31646 10.8588 8.38574 10.5132C8.45507 10.1675 8.62619 9.84994 8.87695 9.60205C9.1277 9.35419 9.44747 9.18692 9.79395 9.12158Z" fill={fill} />
                    </svg>
                    <span style={{ color: fill, fontSize: '20px' }}>
                      www.linkedin.com/in/wesley-li
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
