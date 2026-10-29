import { Sparkles } from "lucide-react";
import ConsultationForm from "./ConsultationForm";



const ConsultationFormSection = () => {  

    return (
        <section className="bg-[#F7F8FA] px-4 py-10 sm:px-6 sm:py-14 lg:py-16">


            <div className="mx-auto max-w-7xl flex items-center justify-center flex-col">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 shadow-sm">
                    <Sparkles className="h-4 w-4 text-brand-600" />
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-700">
                        Your Global Education Journey
                    </span>
                </div>

                <h2 className="text-3xl font-bold leading-tight tracking-tight text-secondary-500 sm:text-4xl lg:text-5xl">
                    Let's Plan Your
                    <span className="block text-brand-600 sm:inline sm:pl-2">
                        Study Abroad Future
                    </span>
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 text-center">
                    Tell us about your academic background and goals. Our counselling
                    team can help you explore the right opportunities for your future.
                </p>

                <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-brand-500" />
            </div>

            <ConsultationForm />
        </section>
    );
};

export default ConsultationFormSection;
