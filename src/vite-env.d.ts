/// <reference types="vite/client" />

interface Window {
  gtag?: (command: 'event', action: string, parameters: Record<string, string>) => void;
}
