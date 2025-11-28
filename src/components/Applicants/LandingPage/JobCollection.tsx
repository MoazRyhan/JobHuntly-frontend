import React from "react";
import JobCard from "./JobCard";
import R from "../../../assets/images/R.jpg"
import dropBox from "../../../assets/images/Dropbox.png"
import pitch from "../../../assets/images/pitch.png"
import blink from "../../../assets/images/65c4c327c572aed46c38b0428c37850163117bcf.png"
import clas from "../../../assets/images/class.jpg"
import canva from "../../../assets/images/canva.png"
import dadd from "../../../assets/images/dadd.png"
import twiteer from "../../../assets/images/twiteer.jpg"
function JobCollection() {
  const jobs = [
    {
      logo: R,    
      title: "Email Marketing",
      company: "Revolut",
      location: "Madrid, Spain",
      description: "Revolut is looking for Email Marketing to join team ma...",
      jobType: "Full Time",
      tags: ["Marketing", "Design"],
    },
    {
      logo: dropBox,
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Francisco, US",
      description: "Dropbox is looking for Brand Designer to help the team t...",
      jobType: "Full Time",
      tags: ["Design", "Business"],
    },
    {
      logo: pitch,
      title: "Email Marketing",
      company: "Pitch",
      location: "Berlin, Germany",
      description: "Pitch is looking for Customer Manager to join marketing t...",
      jobType: "Full Time",
      tags: ["Marketing"],
    },
    {
      logo: blink,
      title: "Visual Designer",
      company: "Blinkist",
      location: "Granada, Spain",
      description: "Blinkist is looking for Visual Designer to help team desi...",
      jobType: "Full Time",
      tags: ["Design"],
    },
    {
      logo: clas,
      title: "Product Designer",
      company: "ClassPass",
      location: "Manchester, UK",
      description: "ClassPass is looking for Product Designer to help us...",
      jobType: "Full Time",
      tags: ["Marketing", "Design"],
    },
    {
      logo: canva,
      title: "Lead Designer",
      company: "Canva",
      location: "Ontario, Canada",
      description: "Canva is looking for Lead Engineer to help develop n...",
      jobType: "Full Time",
      tags: ["Design", "Business"],
    },
    {
      logo: dadd,
      title: "Brand Strategist",
      company: "GoDaddy",
      location: "Marseille, France",
      description: "GoDaddy is looking for Brand Strategist to join the team...",
      jobType: "Full Time",
      tags: ["Marketing"],
    },
    {
      logo: twiteer,
      title: "Data Analyst",
      company: "Twitter",
      location: "San Diego, US",
      description: "Twitter is looking for Data Analyst to join data team be...",
      jobType: "Full Time",
      tags: ["Technology"],
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              logo={job.logo}
              title={job.title}
              company={job.company}
              location={job.location}
              description={job.description}
              jobType={job.jobType}
              tags={job.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobCollection;