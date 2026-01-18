const internships = [
  {
    role: "Data Analyst Intern",
    organization: "Cognifyz Technologies",
    duration: "Jun 2024 – Sep 2024",
    domain: "Data Analytics & Business Intelligence",
    certificate: "/Cognifyz Technologis.pdf",
    expertise: [
      "SQL-based data analysis and querying",
      "Data cleaning and preprocessing",
      "Dashboard creation and data visualization",
      "Extracting actionable insights from datasets",
    ]
  },
  {
    role: "Space Tech Intern",
    organization: "India Space Lab",
    duration: "Jan 2026 – Present",
    domain: "Space Technology and Research",
    certificate:"/India Space Lab.pdf",
    expertise: [
      "Research on space technologies and applications",
      "Data analysis related to space missions",
      "Collaboration with experts in the field",
      "Contributing to innovative space projects",
    ]
  },
];

export default function Internships() {
  return (
    <section id="internships" className="py-32 px-6 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          Internship & Domain Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internships.map((internship) => (
            <div
              key={internship.role}
              className="rounded-2xl bg-black/40 border border-white/10 p-8 text-gray-300 hover:border-green-400 transition"
            >
              <h3 className="text-xl font-semibold text-white">
                {internship.role}
              </h3>

              <p className="mt-1 text-green-400 font-medium">
                {internship.organization}
              </p>

              <p className="mt-1 text-sm text-gray-400">
                {internship.duration}
              </p>

              <p className="mt-4 text-sm text-gray-400">
                <span className="text-gray-300 font-medium">
                  Domain:
                </span>{" "}
                {internship.domain}
              </p>

              <ul className="mt-4 space-y-2 text-sm list-disc list-inside">
                {internship.expertise.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {/* Certificate link */}
              {internship.certificate && (
                <a
                  href={internship.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-sm text-green-400 hover:underline"
                >
                  View Internship Certificate →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
