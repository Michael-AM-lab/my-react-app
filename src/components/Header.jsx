function Header() {
  return (
    <header className="flex min-h-[92px] items-center justify-between max-[700px]:min-h-[72px]">
      <a
        className="inline-flex items-center gap-3 text-[15px] font-bold tracking-[-0.02em] text-[#23342f] no-underline"
        href="#home"
        aria-label="Profile home"
      >
        <span className="grid size-[34px] place-items-center rounded-[11px] bg-[#e6f4e6] text-[20px] text-[#008000]">
          M
        </span>
        
      </a>
      <span className="text-[13px] text-[#78827d] max-[400px]:text-xs">Software Engineer</span>
    </header>
  )
}

export default Header