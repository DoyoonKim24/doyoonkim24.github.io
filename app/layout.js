import "./styles/global.css";

export const metadata = {
  title: "Doyoon Kim",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
