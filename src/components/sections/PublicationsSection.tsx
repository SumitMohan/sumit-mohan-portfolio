import { FileText, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const publications = {
  sci: [
    "Machine Learning Approaches for Student Performance Prediction in Technical Education",
    "AI-Driven Assessment Systems: A Comparative Study",
  ],
  scopus: [
    "Adaptive Learning Algorithms for Personalized Technical Training",
    "Blockchain Applications in Academic Credential Verification",
    "Natural Language Processing for Automated Code Review",
  ],
  ugc: [
    "Curriculum Design Frameworks for Industry-Aligned Technical Education",
    "Impact of Gamification on Student Engagement in Programming Courses",
  ],
};

const PublicationsSection = () => {
  return (
    <section id="publications" className="section-padding" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Research
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Publications &
            <span className="text-primary"> Research Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Peer-reviewed publications in leading academic journals and conferences.
          </p>
        </div>

        {/* Publications Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {/* SCI Indexed */}
            <AccordionItem value="sci" className="card-elevated border-none">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-foreground">SCI-Indexed Publications</h3>
                    <p className="text-sm text-muted-foreground">{publications.sci.length} publications</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <ul className="space-y-3 pl-14">
                  {publications.sci.map((pub, index) => (
                    <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {pub}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Scopus Indexed */}
            <AccordionItem value="scopus" className="card-elevated border-none">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-foreground">Scopus-Indexed Publications</h3>
                    <p className="text-sm text-muted-foreground">{publications.scopus.length} publications</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <ul className="space-y-3 pl-14">
                  {publications.scopus.map((pub, index) => (
                    <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {pub}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* UGC-Care */}
            <AccordionItem value="ugc" className="card-elevated border-none">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-foreground">UGC-Care Publications</h3>
                    <p className="text-sm text-muted-foreground">{publications.ugc.length} publications</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <ul className="space-y-3 pl-14">
                  {publications.ugc.map((pub, index) => (
                    <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-foreground/50 mt-2 flex-shrink-0" />
                      {pub}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
