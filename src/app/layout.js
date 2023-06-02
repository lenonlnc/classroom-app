import "./globals.css";

export const metadata = {
  title: "Cursos",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/0212a5fcb5.js"></script>
      </head>
      <body className="">{children}</body>
    </html>
  );
}