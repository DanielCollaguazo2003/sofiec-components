export const AuthSecurityIllustration = () => {
  return (
    <div className="relative w-full max-w-130">
      <div className="rounded-[28px] bg-white/80 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.15)] ring-1 ring-white/70 backdrop-blur-xl">
        <div className="rounded-3xl bg-linear-to-br from-white via-sky-50 to-sky-100 p-5 shadow-inner ring-1 ring-slate-200/40">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">Controla tus finanzas</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-800">Bienvenido de nuevo</h3>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              Protegido
            </span>
          </div>

          <div className="grid grid-cols-[1.1fr_0.9fr] gap-4">
            <div className="rounded-[22px] bg-white/80 p-4 shadow-sm ring-1 ring-slate-200/50">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Acceso Total</p>
                  <p className="text-3xl font-semibold tracking-tight text-slate-800">98%</p>
                </div>
                <div className="sf-float-soft flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm">
                  <span className="text-lg">✓</span>
                </div>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="sf-rise-bar h-full rounded-full bg-linear-to-r from-sky-400 via-sky-500 to-emerald-400" style={{ width: '92%' }} />
              </div>
            </div>

            <div className="rounded-[22px] bg-white/80 p-4 shadow-sm ring-1 ring-slate-200/50">
              <div className="flex items-end gap-2">
                <div className="sf-rise-bar h-10 w-4 rounded-full bg-sky-100" />
                <div className="sf-rise-bar sf-rise-delay-1 h-16 w-4 rounded-full bg-sky-200" />
                <div className="sf-rise-bar sf-rise-delay-2 h-24 w-4 rounded-full bg-sf-primary/70" />
                <div className="sf-rise-bar sf-rise-delay-1 h-14 w-4 rounded-full bg-emerald-200" />
              </div>
              <div className="mt-4 rounded-2xl bg-slate-50 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Eventos en vivo</p>
                <p className="mt-1 text-sm font-medium text-slate-600">2 intentos sospechosos bloqueados</p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-[20px] bg-white/80 p-4 shadow-sm ring-1 ring-slate-200/50">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">MFA</p>
              <p className="mt-1 text-lg font-semibold text-slate-800">Habilitado</p>
            </div>
            <div className="rounded-[20px] bg-white/80 p-4 shadow-sm ring-1 ring-slate-200/50">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Alerts</p>
              <p className="mt-1 text-lg font-semibold text-slate-800">Zero drift</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sf-float-soft sf-float-delay absolute -bottom-4 left-7 rounded-2xl bg-sky-50 px-4 py-2 text-xs font-semibold text-sky-700 shadow-lg ring-1 ring-sky-200/60">
        +27% riesgo mitigado
      </div>
    </div>
  );
};
