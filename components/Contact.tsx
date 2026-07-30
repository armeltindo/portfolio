export default function Contact() {
  return (
    <div id="contact" className="bg-navy text-white">
      <div className="max-w-[1100px] mx-auto px-8 py-16 text-center">
        <div className="font-extrabold text-[30px] leading-[1.3] text-balance">
          Discutons de votre prochain projet data.
        </div>
        <div className="text-[14.5px] leading-[1.6] text-onnavy-sub2 mt-3">
          Abomey-Calavi, Bénin · (+229) 01 95 79 51 32
        </div>
        <div className="flex gap-3 justify-center flex-wrap mt-7">
          <a
            href="mailto:armeltindo@gmail.com"
            className="font-semibold text-[14px] text-navy bg-white px-6 py-[14px] rounded-md no-underline whitespace-nowrap"
          >
            armeltindo@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/armel-tindo-839916190/"
            className="font-semibold text-[14px] text-white bg-white/[0.14] px-6 py-[14px] rounded-md no-underline whitespace-nowrap"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}
