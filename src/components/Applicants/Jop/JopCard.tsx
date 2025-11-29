import ApplyButton from '../JobDescriptions/ApplyButoon'

type JopCardProps = {
  [key: string]: any
}
const JopCard = ({ jop }: JopCardProps) => {
  return (
    <>
      <article className="bg-[#FFFFFF] flex max-lg:flex-col max-md:flex-col max-sm:flex-col justify-between items-center p-6 my-6 gap-3 border-2 border-[#D6DDEB]">
        <div className="flex gap-3 max-xl:flex-col max-lg:flex-col max-sm:flex-col">
          <img className="w-12 h-14" src="/SimilarJopIcon.png" alt="jopIcon" />
          <div>
            <h3 className="text-xl text-[#25324B] font-semibold mb-2">
              {jop?.title}
            </h3>
            <span className=" text-[#515B6F] my-2">Nomad . Paris, France</span>
            <div>
              <span className="text-[#56CDAD] bg-[#56CDAD1A] w-24 inline-block text-base font-semibold rounded-3xl text-center my-4 mr-4">
                {jop?.employment_type}
              </span>
              <span className="text-[#FFB836] bg-[#EB85331A] w-24 inline-block text-base font-semibold rounded-3xl text-center my-4 mr-4">
                Marketing
              </span>
              <span className="text-[#4640DE] p-2 bg-[#F8F8FD] w-fit inline-block text-base font-semibold rounded-3xl text-center my-1 mr-4">
                Project Management
              </span>
            </div>
          </div>
        </div>
        <ApplyButton />
      </article>
    </>
  )
}

export default JopCard
