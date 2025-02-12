export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
