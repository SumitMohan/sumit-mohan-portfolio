import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, BookOpen, FileText, GraduationCap, Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface PublicationItem {
  title: string;
  impact?: string;
  year?: string;
  venue?: string;
  citation?: string;
}

const publications = {
  sci: [
    {
      title: "COVID-19 Impact Prediction Using Hybrid ML Models",
      impact: "Impact Factor: 7",
      year: "2021",
      venue: "SCI-Indexed International Journal",
      citation: "Mohan, S., et al. (2021). COVID-19 Impact Prediction Using Hybrid ML Models. International Journal of Advanced Research.",
    },
  ],
  scopus: [
    { 
      title: "Self-Driving Car - Lane Detection and Collision Prevention",
      year: "2022",
      venue: "Scopus-Indexed Conference Proceedings",
      citation: "Mohan, S., et al. (2022). Self-Driving Car - Lane Detection and Collision Prevention. IEEE/Scopus Indexed.",
    },
    { 
      title: "COVID-19 Impact on Academics - A Sentiment Analysis Approach",
      year: "2021",
      venue: "Scopus-Indexed Journal of Educational Computing",
      citation: "Mohan, S., et al. (2021). COVID-19 Impact on Academics - A Sentiment Analysis Approach. Scopus.",
    },
    { 
      title: "Advanced Collision Prevention System Using Machine Vision",
      year: "2020",
      venue: "Scopus-Indexed Machine Vision Series",
      citation: "Mohan, S., et al. (2020). Advanced Collision Prevention System Using Machine Vision. Scopus.",
    },
  ],
  ugc: [
    { 
      title: "Optimized Dynamic Round Robin Scheduling",
      year: "2019",
      venue: "UGC-Care Approved Journal",
      citation: "Mohan, S. (2019). Optimized Dynamic Round Robin Scheduling. UGC-Care Journal.",
    },
    { 
      title: "Optimal Time Quantum Selection for Dynamic Round Robin",
      year: "2018",
      venue: "UGC-Care Approved Journal",
      citation: "Mohan, S. (2018). Optimal Time Quantum Selection for Dynamic Round Robin. UGC-Care Journal.",
    },
  ],
};

const PublicationsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [openCategory, setOpenCategory] = useState<string | null>("sci");
  const [copiedTitle, setCopiedTitle] = useState<string | null>(null);

  const handleCopyCitation = (item: PublicationItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const textToCopy = item.citation || `${item.title}. (${item.year}). ${item.venue}.`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedTitle(item.title);
    toast.success("Citation copied to clipboard!");
    setTimeout(() => setCopiedTitle(null), 2000);
  };

  const categories = [
    {
      key: "sci",
      title: "SCI-Indexed Publications",
      badge: "High Impact Factor",
      accentColor: "text-purple-600 dark:text-purple-400",
      accentBg: "bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/30",
      items: publications.sci,
    },
    {
      key: "scopus",
      title: "Scopus-Indexed Publications",
      badge: "Peer Reviewed",
      accentColor: "text-cyan-600 dark:text-cyan-400",
      accentBg: "bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/30",
      items: publications.scopus,
    },
    {
      key: "ugc",
      title: "UGC-Care Approved Papers",
      badge: "Recognized Research",
      accentColor: "text-blue-600 dark:text-blue-400",
      accentBg: "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30",
      items: publications.ugc,
    },
  ];

  return (
    <section id="publications" className="section-padding relative overflow-hidden bg-slate-50/50 dark:bg-[#07090E] transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Crisp dot grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="section-container relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="section-badge inline-flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              Academic Contributions
            </span>
          </motion.div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-slate-900 dark:text-white mb-5 leading-tight">
            Research & <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">Publications</span>
          </h2>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300">
            Peer-reviewed papers spanning machine learning, computer vision, and sentiment analysis.
          </p>
        </motion.div>

        {/* Publications List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + catIndex * 0.1 }}
              className="rounded-2xl border border-slate-200/90 bg-white shadow-sm shadow-slate-200/50 dark:border-slate-700/60 dark:bg-slate-800/40 overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => setOpenCategory(openCategory === cat.key ? null : cat.key)}
                className="w-full flex items-center justify-between p-5 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl ${cat.accentBg} flex items-center justify-center border shadow-sm dark:shadow-none`}>
                    <BookOpen className={`w-5 h-5 ${cat.accentColor}`} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">{cat.title}</h3>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{cat.badge}</span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openCategory === cat.key ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 dark:bg-slate-700 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              {/* Papers List */}
              <motion.div
                initial={false}
                animate={{
                  height: openCategory === cat.key ? "auto" : 0,
                  opacity: openCategory === cat.key ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 space-y-2.5">
                  {cat.items.map((item, index) => {
                    const isCopied = copiedTitle === item.title;
                    return (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80 dark:bg-slate-800/40 dark:border-slate-700/50 hover:border-cyan-500/40 transition-all duration-200"
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 dark:bg-slate-800 dark:border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                            <FileText className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                              {item.title}
                            </p>
                            <div className="flex flex-wrap items-center gap-2 mt-1.5">
                              {item.venue && (
                                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                                  {item.venue}
                                </span>
                              )}
                              {item.year && (
                                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200/70 text-slate-700 font-mono font-bold dark:bg-slate-700 dark:text-slate-200">
                                  {item.year}
                                </span>
                              )}
                              {item.impact && (
                                <span className={`inline-flex items-center gap-1 text-xs font-bold ${cat.accentColor}`}>
                                  ★ {item.impact}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Quick Citation Copy */}
                        <button
                          type="button"
                          onClick={(e) => handleCopyCitation(item, e)}
                          className="self-end sm:self-center px-3 py-1.5 rounded-lg border border-slate-200/80 bg-white hover:bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 text-xs font-medium transition-all duration-200 flex items-center gap-1.5 shrink-0 shadow-sm"
                          title="Copy citation"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 opacity-60" />
                              <span>Copy Citation</span>
                            </>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;