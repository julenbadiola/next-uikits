export default function RootLayout(props) {
    const { children } = props;
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }