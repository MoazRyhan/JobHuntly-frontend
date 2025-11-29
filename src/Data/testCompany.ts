import type { Company } from "../components/Applicants/CompanyProfile/Types";

export const testCompany: Company & { jobCount: number } = {
  id: 1,
  name: "Stripe",
  logo: "/images/company/stripe.png",
  website: "https://stripe.com",
  description: `Stripe is a software platform...`,
  founded: "2010",
  employees: "7000+",
  industry: "FinTech",
  linkedin: "https://www.linkedin.com/company/stripe/",
  facebook: "https://www.facebook.com/stripe",
  twitter: "https://twitter.com/stripe",
  locations: [
    { name: "San Francisco, USA", logo: "/images/location/us.png" },
    { name: "Dublin, Ireland", logo: "/images/location/england.png" },
        { name: "San Francisco, USA", logo: "/images/location/us.png" },
    { name: "Dublin, Ireland", logo: "/images/location/england.png" },
        { name: "San Francisco, USA", logo: "/images/location/us.png" },
    { name: "Dublin, Ireland", logo: "/images/location/england.png" },
        { name: "San Francisco, USA", logo: "/images/location/us.png" },
    { name: "Dublin, Ireland", logo: "/images/location/england.png" },
  ],
  techStack: [
    { name: "React", logo: "/images/stack/ruby.png" },
    { name: "CSS", logo: "/images/stack/css.png" },
     { name: "React", logo: "/images/stack/ruby.png" },
    { name: "CSS", logo: "/images/stack/css.png" },
     { name: "React", logo: "/images/stack/ruby.png" },
    { name: "CSS", logo: "/images/stack/css.png" },
     { name: "React", logo: "/images/stack/ruby.png" },
    { name: "CSS", logo: "/images/stack/css.png" },
  ],
  images: [
    { src: "/images/companyImage/img1.png" },
    { src: "/images/companyImage/img2.png" },
    { src: "/images/companyImage/img3.png" }
  ],
  jobCount: 14
};
