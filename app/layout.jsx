import "./styles/global.css";

export const metadata = {
  title: "Doyoon Kim",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="stylesheet" href="https://use.typekit.net/rcf7rcp.css" />
          <link rel="icon" href="../images/doyoon-face.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
