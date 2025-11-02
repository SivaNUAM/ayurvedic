import { useLanguage } from "../context/LanguageContext";
import servicesData from "../data/servicesData";
import ServiceCard from "../components/ServiceCard";

export default function Treatments() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-emerald-50 dark:bg-gray-800">
      <h2 className="text-3xl font-semibold text-center mb-10">{t("treatments.title")}</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
