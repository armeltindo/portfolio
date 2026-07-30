'use client'

export default function PrintBar() {
  return (
    <div className="print:hidden bg-white border-b border-slate-200">
      <div className="max-w-[880px] mx-auto px-8 py-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-0 sm:justify-between">
        <a href="/" className="font-semibold text-[13.5px] text-navy no-underline">
          ← Retour au site
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="font-semibold text-[13px] text-white bg-navy px-[18px] py-[10px] rounded-md whitespace-nowrap w-full sm:w-auto"
        >
          Imprimer / Enregistrer en PDF
        </button>
      </div>
    </div>
  )
}
