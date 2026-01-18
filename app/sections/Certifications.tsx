const certifications = [
  {
    title: "India Space Tech Intern",
    issuer: "India Space Lab",
    year: "2026",  
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Hwoq5pQgukPqsARRr_1751356458720_completion_certificate.pdf",
  },
  {
    title:"Data Analyst Intern",
    issuer:"Cognifyz technologies",
    year:"2025",
    link:"chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://media.licdn.com/dms/document/media/v2/D562DAQHGfJDUqPbdGA/profile-treasury-document-pdf-analyzed/B56ZtK3QnEJEAg-/0/1766487561369?e=1769644800&v=beta&t=XquUldpS3ATKxt1w1WgOzdCo-Gj77wi6H2oflj4mqhI&acrobatPromotionSource=linkedin_chrome-post_view"
  },
  {
    title: "Deloitte Australia - Data Analytics Job Simulation",
    issuer: "Forage",
    year: "2025",
    link:"https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Hwoq5pQgukPqsARRr_1751356458720_completion_certificate.pdf"
  },
{
    title: "Market Analytics",
    issuer:"NPTEL",
    year:"2025",
    link:"https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/110/noc25-mg45/Course/NPTEL25MG45S124280092704712821.pdf"
    },
{
    title: "Data Science Using Python",
    issuer:"iamneo (Formerly Examly)",
    year:"2024",
    link:"https://vit162.examly.io/certificates"
    },
{
    title: "Accenture North America - Data Analytics and Visualization Job Simulation",
    issuer:"Forage",
    year:"2024",
    link:"https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/T6kdcdKSTfg2aotxT/hzmoNKtzvAzXsEqx8_T6kdcdKSTfg2aotxT_Hwoq5pQgukPqsARRr_1735468614776_completion_certificate.pdf"
    },
{
    title:"PwC Switzerland - Power BI Job Simulation",
    issuer:"Forage",
    year:"2024",
    link:"https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/4sLyCPgmsy8DA6Dh3/a87GpgE6tiku7q3gu_4sLyCPgmsy8DA6Dh3_Hwoq5pQgukPqsARRr_1735286911668_completion_certificate.pdf"
},
{
    title: "AWS Skill Builder Badge",
    issuer: "Amazon Web Services",
    year: "2024",
    link:"https://www.credly.com/badges/95ebc3b4-b285-4637-ad95-56426c8c4081/linked_in_profile"
},
{
    title:"The Bits and Bytes of Computer Networking",
    issuer:"Coursera",
    year:"2023",
    link:"https://www.coursera.org/account/accomplishments/records/3ERCJDVWZAX3"
}
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 px-6 bg-black/60">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
            key={cert.title}
            className="rounded-xl bg-black/40 border border-white/10 p-6 text-gray-300 hover:border-green-400 transition"
            >
            <h3 className="font-semibold text-lg text-white">
                {cert.title}
            </h3>
            <p className="mt-2 text-sm text-gray-400">
                {cert.issuer}
            </p>
            <p className="mt-1 text-sm text-gray-500">
                {cert.year}
            </p>

            {cert.link && (
                <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-green-400 hover:underline"
                >
                View Certificate →
                </a>
            )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
