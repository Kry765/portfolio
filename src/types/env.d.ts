declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_EMAILJS_TEMPLATE_ID: string;
      VITE_EMAILJS_SERVICE_ID: string;
      VITE_EMAILJS_PUBLIC_KEY: string;
    }
  }
}

export {};
