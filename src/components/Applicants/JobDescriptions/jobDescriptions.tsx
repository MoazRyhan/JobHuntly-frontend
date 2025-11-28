import ApplyButton from './ApplyButoon.tsx'
import PerksBenefits from './PerksBenefits.tsx'
import SimilarJops from './SimilarJops.tsx'
import { useEffect, useState } from 'react'
import instance from '../../AxiosConfig/instance.ts'

const JobDescriptions = () => {
  type Job = {
    [key: string]: any
  }
  const [job, setJob] = useState<Job | null>(null)

  async function getJop() {
    try {
      const res = await instance.get(`/jobs/1`)
      setJob(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getJop()
  }, [])

  // check the respone jop object
  // useEffect(() => {
  //   console.log(job)
  // }, [job])
  return (
    <>
      <section className="jobDescriptionsCard bg-[#F8F8FD] my-14 w-screen flex justify-center">
        <div className="bg-[#FFFFFF] w-4/5 m-auto p-6 flex max-sm:flex-col justify-between border border-[#D6DDEB]">
          <div className="flex max-sm:flex-col items-center  max-sm:place-items-start">
            <img
              className="w-24 max-sm:w-16"
              src={job?.image}
              alt="Company Logo"
            />
            <div className="m-6 max-sm:my-4 max-sm:mx-0">
              <h1 className="text-[#25324B] text-3xl font-semibold">
                {job?.title}
              </h1>
              <p className="text-[#515B6F] font-normal">
                {job?.company + job?.location + job?.employment_type}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-16">
            <img className="w-8" src="/ShareIcon.png" alt="Share Icon" />
            <ApplyButton />
          </div>
        </div>
      </section>

      <section className="jobDescriptionsInfo bg-[#FFFFFF] w-screen h-1/4 flex justify-center">
        <div className="py-16 max-sm:py-10 w-4/5 grid grid-cols-[2fr_1fr] gap-16 max-sm:gap-8 max-md:grid-cols-1">
          <div className="discription ">
            <div>
              <h2 className="text-[#25324B] text-3xl font-semibold">
                Description
              </h2>
              <p className="text-[#515B6F] mt-4 mb-10">{job?.description}</p>
            </div>

            <div className="job-needs">
              {job?.job_needs?.map((item: any, index: any) => {
                const key = Object.keys(item)[0] // "responsibilities", "Who You Are", "Nice To Haves".
                const list = item[key] // array of strings

                return (
                  <div key={index} className="mb-8">
                    <h2 className="text-[#25324B] text-3xl font-semibold capitalize">
                      {key}
                    </h2>

                    {list.map((line: any, i: any) => (
                      <div
                        key={i}
                        className="flex items-center max-sm:items-start text-[#515B6F] my-2"
                      >
                        <img
                          className="mr-1"
                          src="/checkIcon.png"
                          alt="check Icon"
                        />
                        {line}
                      </div>
                    ))}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="aboutThisRole">
            <h2 className="text-[#25324B] text-3xl font-semibold">
              About this role
            </h2>
            <div>
              <div className="mt-4 flex justify-between">
                <span className="text-[#515B6F] text-base font-normal">
                  Apply Before
                </span>
                <span className="text-[#25324B] text-base font-semibold">
                  {job?.about_this_role?.apply_before}
                </span>
              </div>
              <div className="mt-4 flex justify-between">
                <span className="text-[#515B6F] text-base font-normal">
                  Job Posted On
                </span>
                <span className="text-[#25324B] text-base font-semibold">
                  {job?.about_this_role?.job_posted_on}
                </span>
              </div>
              <div className="mt-4 flex justify-between">
                <span className="text-[#515B6F] text-base font-normal">
                  Job Type
                </span>
                <span className="text-[#25324B] text-base font-semibold">
                  {job?.about_this_role?.job_type}
                </span>
              </div>
              <div className="mt-4 flex justify-between">
                <span className="text-[#515B6F] text-base font-normal">
                  Salary
                </span>
                <span className="text-[#25324B] text-base font-semibold">
                  {job?.about_this_role?.salary}
                </span>
              </div>
            </div>
            <div className="Categories mt-3">
              <h2 className="text-[#25324B] text-3xl font-semibold">
                Categories
              </h2>
              <div>
                <span className="text-[#FFB836] bg-[#EB85331A] w-24 inline-block text-base font-semibold rounded-3xl text-center my-4 mr-4">
                  Marketing
                </span>
                <span className="text-[#56CDAD] bg-[#56CDAD1A] w-24 inline-block text-base font-semibold rounded-3xl text-center my-4 mr-4">
                  Design
                </span>
              </div>
            </div>
            <div className="RequiredSkills">
              <h2 className="text-[#25324B] text-3xl font-semibold">
                Categories
              </h2>
              <div className="flex flex-wrap">
                <span className="text-[#4640DE] p-2 bg-[#F8F8FD] w-fit inline-block text-base font-semibold rounded-3xl text-center my-1 mr-4">
                  Project Management
                </span>
                <span className="text-[#4640DE] p-2 bg-[#F8F8FD] w-fit inline-block text-base font-semibold rounded-3xl text-center my-1 mr-4">
                  Project Management
                </span>
                <span className="text-[#4640DE] p-2 bg-[#F8F8FD] w-fit inline-block text-base font-semibold rounded-3xl text-center my-1 mr-4">
                  Project Management
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PerksBenefits />
      <SimilarJops />
    </>
  )
}

export default JobDescriptions
