export const metadata = {
  title: "Custom Dog Diet Builder",
  description: "Wizard to create a balanced homemade dog diet",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container py-8">{children}</div>
      </body>
    </html>
  );
}

