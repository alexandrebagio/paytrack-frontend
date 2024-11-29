import SnackbarProvider from "@/data/context/SnackbarProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider>
      <Component {...pageProps} />
    </SnackbarProvider>
  );
}
