const skills = [
  "UI.UX DESIGN",
  "WEB DEVELOPMENT",
  "ICON DESIGN",
  "LANDING PAGES",
  "LINKING",
];

function Divider() {
  return (
    <section className='relative mt-40 overflow-ellipsis min-h-[22rem] py-10 mb-10'>
      <div className='rotate-6 mt-20 absolute w-full z-10 px-[-3rem] text-center'>
        <ul className='list-disc flex gap-14 text-5xl font-extrabold bg-green text-black py-6 drop-shadow-2xl  items-center justify-between'>
          {skills.map((sk) => (
            <li key={sk} className=''>
              {sk}
            </li>
          ))}
        </ul>
      </div>
      <div className='-rotate-6 mt-20 absolute w-full '>
        <ul className='list-disc flex gap-14 text-5xl font-extrabold bg-green text-black py-6 brightness-[30%]'>
          {skills.map((sk) => (
            <li key={sk}>{sk}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function DividerSmall() {
  return (
    <section className='relative overflow-ellipsis min-h-[22rem] py-10 mb-10'>
      <div className=' mt-20 absolute w-full z-10 px-[-3rem] text-center'>
        <ul className='list-disc flex gap-14 text-5xl font-extrabold bg-green text-black py-6 drop-shadow-2xl  items-center justify-between'>
          {skills.map((sk) => (
            <li key={sk} className=''>
              {sk}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Divider;
