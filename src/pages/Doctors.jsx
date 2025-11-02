import { useLanguage } from "../context/LanguageContext";
import doctorsData from "../data/doctorsData";
import DoctorCard from "../components/DoctorCard";

export default function Doctors() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-semibold text-center mb-10">{t("doctors.title")}</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {doctorsData.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
}
