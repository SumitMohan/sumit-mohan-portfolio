import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Sparkles } from "lucide-react";

const testimonials = [
    {
        quote: "Sumit's ability to bridge the gap between academic theory and industry application is unmatched. His training programs have significantly improved our placement statistics.",
        author: "Dr. Rajesh K.",
        role: "Dean of Academics",
        org: "Partner University"
    },
    {
        quote: "The Code2Crack platform transformed how our students practice coding. The AI recommendations are spot on.",
        author: "Engineering Student",
        role: "Placed at Capgemini",
        org: "Class of 2024"
    },
    {
        quote: "A visionary leader in EdTech. His curriculum design ensures students are day-one ready for the corporate world.",
        author: "Industry Recruiter",
        role: "Senior HR",
        org: "Top MNC"
    }
];

const TestimonialsSection = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="section-container relative z-10" ref={containerRef}>
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        className="section-badge mb-6 inline-flex"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                    >
                        <Sparkles className="w-3.5 h-3.5" />
                        Endorsements
                    </motion.span>
                    <h2 className="font-heading text-3xl md:text-4xl font-black text-foreground mb-6">
                        Trusted by the <span className="text-shimmer">Academic Community</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="card-elevated p-8 relative group"
                        >
                            <Quote className="w-8 h-8 text-accent/20 mb-6 group-hover:text-accent/40 transition-colors" />
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed italic">
                                "{item.quote}"
                            </p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-white font-bold text-sm">
                                    {item.author[0]}
                                </div>
                                <div>
                                    <div className="font-heading font-bold text-foreground">{item.author}</div>
                                    <div className="text-xs text-muted-foreground bg-accent/10 px-2 py-0.5 rounded-full inline-block mt-1">
                                        {item.role}, {item.org}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
