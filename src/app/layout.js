import "./globals.css";

export const metadata = {
  title: "WriteArena",
  description: "WriteArena is a learning platform that helps you learn how to write better.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={"bg-black text-white"}
      >
        {children}
      </body>
    </html>
  );
}