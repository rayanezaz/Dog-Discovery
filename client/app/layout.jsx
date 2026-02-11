import "../globals.css";

export const metadata = {
  title: "Dog Discovery",
  description: "Find and adopt dogs near you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
