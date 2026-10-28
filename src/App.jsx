import Footer from './components/Footer.jsx'
import Header from './components/header.jsx'
import ProfileCard from './components/Profile.jsx'

function App() {
  return (
    <div className="mx-auto flex min-h-screen w-[min(1120px,calc(100%_-_64px))] flex-col max-[700px]:w-[min(calc(100%_-_36px),480px)]">
      <Header />
      <main className="grid flex-1 place-items-center pt-[48px] pb-[72px] max-[700px]:pt-[30px] max-[700px]:pb-[44px]">
        <ProfileCard />
      </main>
      <Footer />
    </div>
  )
}

export default App
