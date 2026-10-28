const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="flex min-h-[74px] items-center justify-between rounded-t-xl bg-[#008000] px-6 text-xs text-white max-[700px]:gap-3 max-[700px]:text-[11px] max-[400px]:flex-col max-[400px]:items-start max-[400px]:justify-center max-[400px]:gap-[5px]">
      <span>Made by the greatest.</span>
      <span>© {currentYear} Michael Mlonyeni</span>
    </footer>
  )
}

export default Footer