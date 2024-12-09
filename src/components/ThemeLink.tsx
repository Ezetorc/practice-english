import { Link } from "react-router";
import { ThemeComponentProp } from "../models/ThemeComponentProp";

export function ThemeLink ({ theme }: ThemeComponentProp) {
  return (
    <Link
      to={theme.path}
      className='bg-[#fff3] w-[clamp(290px,90%,800px)] aspect-[16/8] grid grid-rows-[1fr,3fr] rounded-[13px] overflow-hidden shadow-bottom xl:hover:translate-y-[-10px] xl:transition-transform'
    >
      <header className='bg-tekhelet text-center content-center text-[clamp(20px,3vw,60px)]'>
        {theme.title}
      </header>
      <main className='bg-medium-slate-blue text-left p-[4%] text-[clamp(10px,5vw,40px)]'>
        {theme.description}
      </main>
    </Link>
  )
}