import SimilarJopCard from './Cards/SimilarJopCard'

const SimilarJops = () => {
  return (
    <>
      <section className="similarJopsSection bg-[#F8F8FD] w-4/5 m-auto">
        <h2 className="text-[#25324B] text-3xl font-semibold mt-8 mb-12">
          Similiar Jobs
        </h2>
        <div className="grid grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1 gap-8 mb-8">
          <SimilarJopCard />
          <SimilarJopCard />
          <SimilarJopCard />
          <SimilarJopCard />
          <SimilarJopCard />
          <SimilarJopCard />
        </div>
      </section>
    </>
  )
}

export default SimilarJops
