const jobDescriptions = () => {
  return (
    <>
      <section className="bg-[#F8F8FD] w-screen flex justify-center">
        <div className="bg-[#FFFFFF] w-4/5 m-auto p-6 flex lg:flex-row sm:flex-col justify-between border border-[#D6DDEB]">
          <div className="flex  items-center">
            <img className="w-24" src="/CompanyLogo.png" alt="Company Logo" />
            <div className="m-6">
              <h1 className="font-semibold text-3xl">Social Media Assistant</h1>
              <p className="text-[#515B6F] font-normal">
                Stripe Paris, France Full-Time
              </p>
            </div>
          </div>

          <div className="flex items-center gap-16">
            <img className="w-8" src="/ShareIcon.png" alt="Share Icon" />
            <button className="w-44 h-14 text-white bg-[#4640DE]">Apply</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default jobDescriptions
