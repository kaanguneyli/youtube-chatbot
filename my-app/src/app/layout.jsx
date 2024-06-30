export const metadata = {
    title: "Youtube Chatbot",
    description: "A chatbot that can be used to interact with Youtube videos."
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
          <body>
            <div className='main'></div>
            <main className='app'>
              {children}
            </main>
          </body>
        </html>
      )
}

export default RootLayout;