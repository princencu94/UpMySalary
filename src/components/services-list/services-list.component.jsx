import { Link } from 'react-router-dom'
const ServicesList = () => {
    return (
        <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 blue-bg rounded-md py-3 px-2 hover:drop-shadow-2xl">
            <p className="text-sm text-center font-medium text-white"><Link >Elite Performer Coaching Program</Link></p>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 blue-bg rounded-md py-5 px-2 hover:drop-shadow-2xl">
            <p className="text-sm text-center font-medium text-white "><Link>Group Coaching</Link></p>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 blue-bg rounded-md py-5 px-2 hover:drop-shadow-2xl">
            <p className="text-sm text-center font-medium text-white "><Link>Self-Walk Program</Link></p>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 blue-bg rounded-md py-5 px-2 hover:drop-shadow-2xl">
            <p className="text-sm text-center font-medium text-white "><Link>Resume Service</Link></p>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 blue-bg rounded-md py-5 px-2 hover:drop-shadow-2xl">
            <p className="text-sm text-center font-medium text-white "><Link>Linkedin Service</Link></p>
          </div>

          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 blue-bg rounded-md py-5 px-2 hover:drop-shadow-2xl">
            <p className="text-sm text-center font-medium text-white "><Link>Mock Interviews</Link></p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ServicesList;