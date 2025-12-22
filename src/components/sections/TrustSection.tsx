import { motion } from "framer-motion";

const partners = [
    "Chitkara University",
    "Sharda University",
    "SDGI Global",
    "BIET Jhansi",
    "Code2Crack",
    "IEEE Member",
    "ACM Member"
];

const TrustSection = () => {
    return (
        <section className="py-10 border-y border-border/50 bg-secondary/30 dark:bg-white/[0.02] overflow-hidden">
            <div className="section-container">
                <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
                    Trusted by Leading Institutions & Organizations
                </p>

                <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-lg md:text-xl font-heading font-bold text-muted-foreground/60 hover:text-foreground transition-colors cursor-default"
                        >
                            {partner}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
