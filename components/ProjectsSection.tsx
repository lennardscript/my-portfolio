import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import SlideUp from './SlideUp'

const projects = [

  {
    name: 'Portfolio Personal',

    description: 'Es mi segundo portafolio que he hecho, por lo tanto este ha sido como su mejora ya que el anterior portafolio se ha desarrollado con tecnologías que he aprendido en la institución (HTML, CSS, JavaScript y Bootstrap) y quise mejorarlo, implementando nuevas tecnologías y aplicando frameworks para su desarrollo.',

    image: '/portfolioproject.png',

    github: 'https://github.com/lennardscript/my-portfolio',

    link: 'https://leaburgos.vercel.app/',

  },
  {
    name: 'Librería Imagina | Proyecto de Integración de plataformas',

    description: 'Uno de los proyectos que he desarrollado dentro de la Institución. Consiste en una página web en donde abarcara todo la gestión de libros de una empresa ficticia llama "Librería Imagina" con la posibilidad de comunicarse con otro sistema que en este caso es una aplicación de escritorio (que cumple como el rol de un sistema de inventario de una bodega de la empresa ficticia para así maneje todas sus operaciones logísticas), se podrán comunicarse entre sí por medio de web services, en este proyecto se ha utilizado APIS, también contara conexión a base de datos (ambos sistemas, web y escritorio). La página web ha sido desarrollada con HTML, Tailwind CSS, Django y React. Por el otro lado, la aplicación de escritorio ha sido desarrollada con C#',

    image: '/libreriaimagina.png',

    github: 'https://github.com/lennardscript/libreriaimagina-web',

    link: '',

  },
  {
    name: 'Próximamente...',

    description: 'En un futuro próximo se subira más proyectos, ¡vuelva más tarde!',

    image: '/proximamente.png',

    github: '',

    link: '',

  }
]

const ProjectsSection = () => {
  return (
    <section id='projects'>
      <h1 className='text-center font-bold text-4xl'>
        Mis proyectos
        <hr className="w-6 h-1 mx-auto my-4 bg-[#035AA6] border-0 rounded"></hr>
      </h1>
        
      <div className='flex flex-col space-y-28'>
        {projects.map((project, idx) => {
          return (
          <div key={idx}>
            <SlideUp offset='-300px 0px -300px 0px'>
            <div className='flex flex-col animate-slideUpCubiBeizer animation-delay-2 md:flex-row md:space-x-12'>
              <div className='mt-8 md:w-1/2'>
                <Link href={project.link} target='_blank'>
                <Image 
                src={project.image}
                alt='Imagen del proyecto'
                width={1000} 
                height={1000}
                className='rounded-xl shadow-xl hover:opacity-70' />
                </Link>
                </div>
                <div className='mt-12 md:w-1/2'>
                  <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                  <p className='text-xl leading-7 mb-4 text-neutral-600'>{project.description}</p>
                  
                <div className='flex flex-row align-bottom space-x-4'>
                  <Link href={project.github} title='Repositorio o código fuente' target='_blank'>
                    <BsGithub size={30} className='hover:translate-y-1 transition-transform cursor-pointer' />
                  </Link>
                  <Link href={project.link} title='Proyecto desplegado' target='_blank'>
                    <BsArrowUpRightSquare size={30} className='hover:translate-y-1 transition-transform cursor-pointer' />
                  </Link>
                  
                </div>
              </div>
            </div>
            </SlideUp>
          </div>
          )
          })}
      </div>
    </section>
  )
}

export default ProjectsSection