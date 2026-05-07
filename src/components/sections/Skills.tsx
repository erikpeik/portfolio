import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiNextdotjs, SiCss, SiTailwindcss,
  SiSharp, SiDotnet, SiNodedotjs, SiPhp, SiC, SiExpress, SiMongodb, SiPython,
  SiDocker, SiGit, SiLinux, SiGithub, SiContentful,
} from 'react-icons/si';
import { Cloud, Database, Workflow, Zap } from 'lucide-react';
import type { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
  bg: string;
  border: string;
  text: string;
  glow: string;
}

const frontend: Skill[] = [
  { name: 'React',      icon: SiReact,       bg: 'from-cyan-500/20 to-cyan-500/5',    border: 'border-cyan-500/25',   text: 'text-cyan-300',   glow: 'hover:border-cyan-400/50 hover:shadow-[0_0_14px_rgba(34,211,238,0.25)]' },
  { name: 'TypeScript', icon: SiTypescript,  bg: 'from-blue-500/20 to-blue-500/5',    border: 'border-blue-500/25',   text: 'text-blue-300',   glow: 'hover:border-blue-400/50 hover:shadow-[0_0_14px_rgba(96,165,250,0.25)]' },
  { name: 'Next.js',    icon: SiNextdotjs,   bg: 'from-white/10 to-white/5',          border: 'border-white/15',      text: 'text-slate-200',  glow: 'hover:border-white/40 hover:shadow-[0_0_14px_rgba(255,255,255,0.1)]' },
  { name: 'CSS',        icon: SiCss,         bg: 'from-sky-500/20 to-sky-500/5',      border: 'border-sky-500/25',    text: 'text-sky-300',    glow: 'hover:border-sky-400/50 hover:shadow-[0_0_14px_rgba(56,189,248,0.25)]' },
  { name: 'Tailwind',   icon: SiTailwindcss, bg: 'from-teal-500/20 to-teal-500/5',    border: 'border-teal-500/25',   text: 'text-teal-300',   glow: 'hover:border-teal-400/50 hover:shadow-[0_0_14px_rgba(45,212,191,0.25)]' },
];

const backend: Skill[] = [
  { name: 'C#',              icon: SiSharp,    bg: 'from-violet-500/20 to-violet-500/5', border: 'border-violet-500/25', text: 'text-violet-300', glow: 'hover:border-violet-400/50 hover:shadow-[0_0_14px_rgba(167,139,250,0.25)]' },
  { name: '.NET',            icon: SiDotnet,   bg: 'from-purple-500/20 to-purple-500/5', border: 'border-purple-500/25', text: 'text-purple-300', glow: 'hover:border-purple-400/50 hover:shadow-[0_0_14px_rgba(192,132,252,0.25)]' },
  { name: 'Azure Functions', icon: Zap,        bg: 'from-sky-500/20 to-sky-500/5',       border: 'border-sky-500/25',    text: 'text-sky-300',    glow: 'hover:border-sky-400/50 hover:shadow-[0_0_14px_rgba(56,189,248,0.25)]' },
  { name: 'Node.js',         icon: SiNodedotjs,bg: 'from-green-500/20 to-green-500/5',   border: 'border-green-500/25',  text: 'text-green-300',  glow: 'hover:border-green-400/50 hover:shadow-[0_0_14px_rgba(74,222,128,0.25)]' },
  { name: 'Express',         icon: SiExpress,  bg: 'from-white/10 to-white/5',           border: 'border-white/15',      text: 'text-slate-200',  glow: 'hover:border-white/40 hover:shadow-[0_0_14px_rgba(255,255,255,0.1)]' },
  { name: 'SQL',             icon: Database,   bg: 'from-orange-500/20 to-orange-500/5', border: 'border-orange-500/25', text: 'text-orange-300', glow: 'hover:border-orange-400/50 hover:shadow-[0_0_14px_rgba(251,146,60,0.25)]' },
  { name: 'MongoDB',         icon: SiMongodb,  bg: 'from-green-600/20 to-green-600/5',   border: 'border-green-600/25',  text: 'text-green-400',  glow: 'hover:border-green-500/50 hover:shadow-[0_0_14px_rgba(34,197,94,0.25)]' },
  { name: 'PHP',             icon: SiPhp,      bg: 'from-indigo-500/20 to-indigo-500/5', border: 'border-indigo-500/25', text: 'text-indigo-300', glow: 'hover:border-indigo-400/50 hover:shadow-[0_0_14px_rgba(129,140,248,0.25)]' },
  { name: 'Python',          icon: SiPython,   bg: 'from-yellow-500/20 to-yellow-500/5', border: 'border-yellow-500/25', text: 'text-yellow-300', glow: 'hover:border-yellow-400/50 hover:shadow-[0_0_14px_rgba(253,224,71,0.25)]' },
  { name: 'C',               icon: SiC,        bg: 'from-blue-400/20 to-blue-400/5',     border: 'border-blue-400/25',   text: 'text-blue-200',   glow: 'hover:border-blue-300/50 hover:shadow-[0_0_14px_rgba(147,197,253,0.25)]' },
];

const tools: Skill[] = [
  { name: 'Azure',       icon: Cloud,        bg: 'from-sky-400/20 to-sky-400/5',       border: 'border-sky-400/25',    text: 'text-sky-200',    glow: 'hover:border-sky-300/50 hover:shadow-[0_0_14px_rgba(125,211,252,0.25)]' },
  { name: 'Docker',      icon: SiDocker,     bg: 'from-blue-400/20 to-blue-400/5',     border: 'border-blue-400/25',   text: 'text-blue-200',   glow: 'hover:border-blue-300/50 hover:shadow-[0_0_14px_rgba(147,197,253,0.25)]' },
  { name: 'Git',         icon: SiGit,        bg: 'from-red-500/20 to-red-500/5',       border: 'border-red-500/25',    text: 'text-red-300',    glow: 'hover:border-red-400/50 hover:shadow-[0_0_14px_rgba(252,165,165,0.25)]' },
  { name: 'GitHub',      icon: SiGithub,     bg: 'from-white/10 to-white/5',           border: 'border-white/15',      text: 'text-slate-200',  glow: 'hover:border-white/40 hover:shadow-[0_0_14px_rgba(255,255,255,0.1)]' },
  { name: 'Linux',       icon: SiLinux,      bg: 'from-yellow-500/20 to-yellow-500/5', border: 'border-yellow-500/25', text: 'text-yellow-300', glow: 'hover:border-yellow-400/50 hover:shadow-[0_0_14px_rgba(253,224,71,0.25)]' },
  { name: 'Azure DevOps',icon: Workflow,     bg: 'from-blue-500/20 to-blue-500/5',     border: 'border-blue-500/25',   text: 'text-blue-300',   glow: 'hover:border-blue-400/50 hover:shadow-[0_0_14px_rgba(96,165,250,0.25)]' },
  { name: 'CI/CD',       icon: Workflow,     bg: 'from-violet-400/20 to-violet-400/5', border: 'border-violet-400/25', text: 'text-violet-200', glow: 'hover:border-violet-300/50 hover:shadow-[0_0_14px_rgba(196,181,253,0.25)]' },
  { name: 'Contentful',  icon: SiContentful, bg: 'from-amber-500/20 to-amber-500/5',   border: 'border-amber-500/25',  text: 'text-amber-300',  glow: 'hover:border-amber-400/50 hover:shadow-[0_0_14px_rgba(251,191,36,0.25)]' },
];

function SkillCard({
  titleKey,
  skills,
  delay,
}: {
  titleKey: string;
  skills: Skill[];
  delay: number;
}) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="px-6"
    >
      <h3 className="text-4xl font-bold gradient-text mb-3">{t(titleKey)}</h3>
      <div className="section-divider mb-4" />
      <div className="flex flex-wrap gap-2">
        {skills.map(({ name, icon: Icon, bg, border, text, glow }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + i * 0.05 }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full cursor-default bg-gradient-to-br ${bg} border ${border} ${text} ${glow} font-medium text-sm transition-all duration-200`}
          >
            <Icon size={13} />
            {name}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="relative overflow-hidden py-6 px-6">
      {/* Smoke gradient background */}
      <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
            {t('skills.title')}
          </h2>
          <p className="text-slate-400">{t('skills.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-white/10 gap-y-8 md:gap-y-0">
          <SkillCard titleKey="skills.frontend" skills={frontend} delay={0} />
          <SkillCard titleKey="skills.backend" skills={backend} delay={0.1} />
          <SkillCard titleKey="skills.tools" skills={tools} delay={0.2} />
        </div>
      </div>
    </section>
  );
}
