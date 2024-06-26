import Home from "./home/page"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "1rem" }} className="flex flex-row">
          <p className="basis-1/2">Header</p>
          <div className="basis-1/4">
            <Home />  
          </div>
        </header>
        {children}
        <footer style={{backgroundColor:"ghostwhite",padding:"1rem"}}>
          <p>Footer</p>
        </footer>

      </body>
    </html>
  )
}
