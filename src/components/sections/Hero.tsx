import { useTranslation } from 'react-i18next';

const EMAIL = 'erikpeik@outlook.com';

export default function Hero() {
  const { t } = useTranslation();

  const meta = [
    { label: t('hero.now'), value: t('hero.now_value') },
    { label: t('hero.study'), value: t('hero.study_value') },
    { label: t('hero.side'), value: t('hero.side_value') },
  ];

  return (
    <section id="top" className="pt-20 pb-16 md:pt-24 md:pb-20">
      <h1 className="text-[clamp(64px,13vw,184px)] leading-[0.86] font-extrabold tracking-[-0.055em]">
        Erik
        <br />
        Mende<span className="text-accent">.</span>
      </h1>

      <div className="mt-14 flex flex-wrap items-start gap-10 md:mt-16">
        <p className="max-w-[680px] flex-[2_1_420px] text-[22px] leading-[1.3] font-medium tracking-[-0.015em] md:text-[26px]">
          {t('hero.intro')}
        </p>

        <dl className="grid flex-[1_1_260px] grid-cols-[auto_1fr] gap-x-5 gap-y-2.5 font-mono text-[13px] leading-normal">
          {meta.map(({ label, value }) => (
            <div key={label} className="contents">
              <dt className="text-muted">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
          <div className="contents">
            <dt className="text-muted">{t('hero.mail')}</dt>
            <dd>
              <a
                href={`mailto:${EMAIL}`}
                className="relative border-b border-paper after:absolute after:-inset-y-3 after:inset-x-0 hover:border-accent-hover hover:text-accent-hover"
              >
                {EMAIL}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
