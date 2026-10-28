import profileImage from '../assets/profile.png'

const skills = ['React', 'JavaScript', 'CSS', 'UI design']

function ProfileCard() {
  return (
    <article
      className="grid min-h-[460px] w-full max-w-[900px] grid-cols-[0.88fr_1.12fr] overflow-hidden rounded-[28px] border border-[#e8ebe6] bg-white shadow-[0_24px_70px_rgb(46_64_54_/_9%)] max-[700px]:grid-cols-1 max-[700px]:rounded-[22px]"
      id="home"
    >
      <div className="grid min-h-[460px] place-items-center max-[700px]:min-h-[255px]">
        <img
          className="block h-[460px] w-full rounded-[28px_0_0_28px] object-cover max-[700px]:h-[255px]"
          src={profileImage}
          alt="Michael Mlonyeni"
        />
      </div>

      <div className="self-center px-16 pt-[66px] pb-[60px] max-[700px]:px-7 max-[700px]:pt-[34px] max-[700px]:pb-9">
        <p className="mb-[14px] text-[11px] font-extrabold tracking-[0.18em] text-[#008000]">
          Hi
        </p>
        <h1 className="m-0 text-[clamp(35px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.045em] text-[#23342f]">
          I'm Michael Mlonyeni<span className="text-[#008000]">.</span>
        </h1>
        <p className="mt-5 max-w-[430px] text-[15px] leading-[1.8] text-[#707b75] max-[700px]:text-sm">
          I am a curious learner who loves turning ideas into thoughtful,
          easy to use digital experiences. When I am not coding, you will find me
          collecting inspiration and learning something new.
        </p>

        <div className="mt-[29px] mb-[25px] h-px bg-[#edf0ec]" />

        <section className="learning" aria-labelledby="learning-title">
          <div className="flex items-center gap-[13px]">
            
            <div>
              <h2 className="m-0 text-sm font-bold text-[#2b3c35]" id="learning-title">
                What I'm learning
              </h2>
              <p className="mt-1 mb-0 text-xs text-[#818a85]">Software Engineering</p>
            </div>
          </div>
          <ul className="mt-[18px] mb-0 flex list-none flex-wrap gap-2 p-0" aria-label="Skills">
            {skills.map((skill) => (
              <li
                className="rounded-full border border-[#e8eee9] bg-[#fbfcfb] px-[11px] py-[7px] text-[11px] font-semibold text-[#008000]"
                key={skill}
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}

export default ProfileCard