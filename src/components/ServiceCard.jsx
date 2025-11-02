export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg rounded-2xl p-6 transition-all border border-green-100 dark:border-green-800">
      <div className="flex flex-col items-center text-center">
        <div className="text-green-600 dark:text-green-400 mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
