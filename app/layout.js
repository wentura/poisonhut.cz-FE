import "./globals.css";

export const metadata = {
  title: "PoisonHut.cz",
  description: "Vše co hráči potřebují",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body className="">{children}</body>
    </html>
  );
}
