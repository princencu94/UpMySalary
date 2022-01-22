import Coachingprogram from '../../assets/coaching-program.jpg';
import Group from '../../assets/group.jpg';
import Interviews from '../../assets/interviews.jpg';
import Linkedin from '../../assets/linkedin.jpg';
import OneonOne from '../../assets/one-on-one.jpg';
import Resume from '../../assets/resume.jpg';
import Selfwalk from '../../assets/self-walk.jpg';


const products = [
    {
      id: 1,
      name: 'Elite Performer Coaching Program',
      href: '#',
      price: '$48',
      imageSrc: Coachingprogram,
      imageAlt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 2,
      name: 'Group Coaching',
      href: '#',
      price: '$35',
      imageSrc: Group,
      imageAlt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 3,
      name: 'Self-Walk Program',
      href: '#',
      price: '$89',
      imageSrc: Selfwalk,
      imageAlt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 4,
      name: 'Resume Service',
      href: '#',
      price: '$35',
      imageSrc: Resume,
      imageAlt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 5,
        name: 'LinkedIn Services',
        href: '#',
        price: '$35',
        imageSrc: Linkedin,
        imageAlt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 6,
        name: 'Mock Interviews',
        href: '#',
        price: '$35',
        imageSrc: Interviews,
        imageAlt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 6,
        name: 'One on One Coaching',
        href: '#',
        price: '$35',
        imageSrc: OneonOne,
        imageAlt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
    // More products...
  ]

const ProductList = () => {
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-y-24 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                {products.map((product) => (
                    <a key={product.id} href={product.href} className="group">
                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                        <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                        />
                    </div>
                    <h3 className="mt-4 text-lg text-gray-900">{product.name}</h3>
                    {/* <p className="mt-1 text-sm text-gray-700">{product.description}</p> */}
                    {/* <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
                    </a>
                ))}
                </div>
            </div>
        </div>
    )
}

export default ProductList;