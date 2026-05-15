import { useEffect } from "react";
import Navigation from "@/components/Navigation";

interface TermsSectionProps {
  number: string;
  title: string;
  delay: number;
  children: React.ReactNode;
}

const TermsSection = ({ number, title, delay, children }: TermsSectionProps) => {
  const delayClass = [
    "animate-fade-up",
    "animate-fade-up-delay-1",
    "animate-fade-up-delay-2",
    "animate-fade-up-delay-3",
    "animate-fade-up-delay-4",
  ][delay % 5];

  return (
    <section className={`${delayClass} mb-10 border-b border-border pb-8`}>
      <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {number}
      </p>
      <h2 className="mb-4 font-serif text-2xl">{title}</h2>
      {children}
    </section>
  );
};

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = "Terms and Conditions | Asmi AI";
  }, []);

  return (
    <div className="flex h-full flex-col overflow-hidden bg-background">
      <Navigation />

      <main className="flex flex-col items-center overflow-y-auto px-4 pt-24 pb-16 text-foreground sm:px-6 md:px-10">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="animate-fade-up mb-8 text-center">
            <h1 className="font-serif text-6xl italic md:text-7xl">asmi</h1>
            <p className="mt-3 font-serif text-3xl font-bold">Terms and Conditions</p>
          </div>

          <div className="animate-fade-up-delay-1 mb-8 border-b border-border pb-6 text-center text-sm">
            <p className="text-muted-foreground">Effective: May 2026</p>
            <p className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Humint Labs, Inc. (incorporated in Delaware)
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              710 Lakeway Drive, Suite 200, Sunnyvale, CA 94085
            </p>
          </div>

          {/* Intro */}
          <p className="animate-fade-up-delay-2 mb-10 leading-relaxed">
            These terms and conditions govern your use of Asmi and outline the rights and responsibilities
            of both you and Humint Labs, Inc. By using Asmi, you agree to these terms.
          </p>

          <div className="mb-8 border-t border-border" />

          {/* Sections */}
          <TermsSection number="01 - SMS Terms & Conditions" title="SMS terms & conditions" delay={0}>
            <p className="mb-4 leading-relaxed">
              By using Asmi, you consent to receive SMS messages related to your interactions and requests.
              These messages may include summaries of calls, confirmations, and responses to actions you
              initiate.
            </p>
            <p className="mb-4 leading-relaxed">
              Message frequency varies based on your usage. Message and data rates may apply depending on
              your mobile carrier plan.
            </p>
            <p className="mb-4 leading-relaxed">
              You can opt out of receiving SMS messages at any time by replying <span className="font-mono">STOP</span>. For
              assistance, reply <span className="font-mono">HELP</span> or contact support at{" "}
              <a
                href="mailto:support@asmiai.com"
                className="font-bold text-foreground transition-opacity hover:opacity-70"
              >
                support@asmiai.com
              </a>
              .
            </p>
            <p className="leading-relaxed">
              SMS messages are sent only after user-initiated actions or explicit consent during interactions.
              No marketing or promotional messages are sent.
            </p>
          </TermsSection>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;
