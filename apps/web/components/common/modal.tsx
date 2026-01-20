/**
 * Modal wrapper
 * @description A reusable modal component that overlays content on the screen.
 */

'use client';

import { Button } from '@invicity/ui/components/button';
import { Card, CardContent } from '@invicity/ui/components/card';
import { X } from '@invicity/ui/icons';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export function Modal({ children, onClose }: ModalProps) {
  const router = useRouter();

  const handleClose = useCallback(() => {
    if (onClose) {
      // onClose will set the local storage prop in the demodisclaimer modal
      onClose();
    } else {
      router.back();
    }
  }, [router, onClose]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [handleClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
      // on mobile devices, the bg can render wrong (apple), so we set it manually
      style={{ backgroundColor: 'rgba(255,255,255,0.85)' }}
      onClick={handleClose}
    >
      <div
        className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-white dark:bg-neutral-900 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="relative bg-white dark:bg-neutral-900">
          <Button
            onClick={handleClose}
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          <CardContent className="pt-6">{children}</CardContent>
        </Card>
      </div>
    </div>
  );
}
