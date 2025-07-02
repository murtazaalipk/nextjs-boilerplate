export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 py-10 md:px-8 lg:px-16 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          About This Boilerplate
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-center">
          This is a clean, scalable, and customizable Next.js App Router boilerplate
          built with Tailwind CSS, Redux Toolkit, theme support, routing, and more.
          It's designed to help you kickstart your web projects with best practices
          and clean structure.
        </p>
      </div>
    </div>
  );
}
