export const AuthGrowthIllustration = () => {
  return (
    <div className="relative w-full max-w-130">
      <div className="rounded-[28px] bg-white/75 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] ring-1 ring-white/70 backdrop-blur-xl">
        <div className="rounded-3xl bg-linear-to-br from-white via-indigo-50 to-sky-100 p-5 shadow-inner ring-1 ring-slate-200/40">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">Controla tus finanzas</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-800">Bienvenido a Sofi EC</h3>
            </div>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
              Nueva Cuenta
            </span>
          </div>

          <div className="relative h-64 overflow-hidden rounded-3xl bg-linear-to-br from-sky-50 via-white to-indigo-100">
            <div className="absolute inset-0 opacity-70" aria-hidden>
              <div className="absolute left-8 top-14 h-28 w-28 rounded-full bg-sky-200/70 blur-2xl" />
              <div className="absolute right-6 top-10 h-24 w-24 rounded-full bg-indigo-200/70 blur-2xl" />
            </div>

            <div className="absolute left-6 top-7 rounded-2xl bg-white/90 px-4 py-2 shadow-md ring-1 ring-slate-200/60">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Saldo Proyectado</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-800">$124,500<span className="text-lg text-slate-400">.00</span></p>
            </div>

            <div className="sf-float-soft absolute left-8 top-28 rounded-[22px] bg-white/90 px-4 py-3 shadow-lg ring-1 ring-slate-200/60">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">Crecimiento proyectado</p>
              <p className="mt-1 text-sm font-semibold text-sf-primary">+12.4% anual</p>
            </div>

            <div className="absolute bottom-2 right-2 rounded-[22px] bg-white/90 px-4 py-2 shadow-lg ring-1 ring-slate-200/60">
              <div className="flex items-end gap-2">
                <div className="sf-expand-orb h-5 w-5 rounded-full bg-sky-200/80" />
                <div className="sf-expand-orb sf-expand-delay-1 h-10 w-10 rounded-full bg-indigo-200/80" />
                <div className="sf-expand-orb sf-expand-delay-2 h-14 w-14 rounded-full bg-sky-300/70" />
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-[20px] bg-white/80 p-4 shadow-sm ring-1 ring-slate-200/50">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Onboarding</p>
              <p className="mt-1 text-lg font-semibold text-slate-800">Configuración rápida</p>
            </div>
            <div className="rounded-[20px] bg-white/80 p-4 shadow-sm ring-1 ring-slate-200/50">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Focus</p>
              <p className="mt-1 text-lg font-semibold text-slate-800">Se expande con usted</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sf-float-soft sf-float-delay absolute -bottom-4 right-8 rounded-2xl bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-700 shadow-lg ring-1 ring-indigo-200/60">
        Potencia tu crecimiento
      </div>
    </div>
  );
};
