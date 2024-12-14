import { useEffect } from "react";

import { AppProps } from "next/app";
import "./globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    interface ContextMenuEvent extends Event {
      preventDefault: () => void;
    }

    const handleContextMenu = (event: ContextMenuEvent) => {
      event.preventDefault(); // Prevent the right-click menu
    };

    // Add event listener for context menu globally
    document.addEventListener("contextmenu", handleContextMenu);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
