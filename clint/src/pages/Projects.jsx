import CallToAction from '../components/CallToAction'
import NewProject from '../components/NewProject'
export default function Projects() {
  return (
    <>
    <div className='min-h-screen mx-w-2xl mx-auto flex justify-center
    items-center flex-col gap-6 p-3'> 
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p className='text-md text-gray-500'>Build fun and engaging project while learning
        HTML,CSS and JavaScript!
      </p>
      <CallToAction/>
    </div>
    <div className='min-h-screen mx-w-2xl mx-auto flex justify-center
    items-center flex-col gap-6 p-3'> 
      <h1 className='text-3xl font-semibold'>Personal Projects</h1>
      <p className='text-md text-gray-500'>Build fun and engaging project while learning
      JavaScript , CSS, HTML, jQuery , Bootstrap!
      </p>
      <NewProject/>
    </div>
    </>
  )
}
