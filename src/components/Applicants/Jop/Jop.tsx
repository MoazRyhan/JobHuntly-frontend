import JopCard from './JopCard'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import instance from '@/components/AxiosConfig/instance'

const Jop = () => {
  type Jops = Array<{ [key: string]: any }>

  const [jops, setjops] = useState<Jops | null>(null)
  async function getJops() {
    try {
      const res = await instance.get('/jobs')
      setjops(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getJops()
  }, [])
  useEffect(() => {
    console.log(jops)
  }, [jops])

  return (
    <>
      <section className="bg-[#9c4747] w-4/5 m-auto grid grid-cols-[1fr_4fr] max-sm:grid-cols-1">
        <div className="bg-amber-400 h-32">text</div>
        <div>
          {jops?.map((jop) => (
            <Link to={jop.id}>
              <JopCard key={jop.id} jop={jop} />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default Jop
