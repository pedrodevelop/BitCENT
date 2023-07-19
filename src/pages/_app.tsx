import { AuthProvider } from "@/data/contexts/AuthContext";
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </MantineProvider>
  );
};

export default App;
