export default function DoctorCard({ image, name, specialization, experience }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl overflow-hidden border border-green-100 dark:border-green-800 transition-all">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover"
      />
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">{name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{specialization}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {experience} years experience
        </p>
      </div>
    </div>
  );
}
