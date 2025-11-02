import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-semibold mb-6">{t("contact.title")}</h2>
      <p className="mb-10">{t("contact.subtitle")}</p>

      <form className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder={t("contact.name")}
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-emerald-500 outline-none"
        />
        <input
          type="email"
          placeholder={t("contact.email")}
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-emerald-500 outline-none"
        />
        <textarea
          rows="4"
          placeholder={t("contact.message")}
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:ring-2 focus:ring-emerald-500 outline-none"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
        >
          {t("contact.send")}
        </button>
      </form>
    </section>
  );
}
