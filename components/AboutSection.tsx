import React from 'react'
import Image from 'next/image'

const tech = [

  {tech: 'Python'},
  {tech: 'Django'},
  {tech: 'Java'},
  {tech: 'Spring'},
  {tech: 'HTML5'},
  {tech: 'CSS3'},
  {tech: 'TailwindCSS'},
  {tech: 'JavaScript'},
  {tech: 'TypeScript'},
  {tech: 'NodeJS'},
  {tech: 'Express'},
  {tech: 'Angular'},
  {tech: 'React'},
  {tech: 'NextJS'},
  {tech: 'Ionic'},
  {tech: 'Vite'},
  {tech: 'MySQL'},
  {tech: 'PostgreSQL'},
  {tech: 'MongoDB'},
  {tech: 'Git'},
  {tech: 'Docker'},
  {tech: 'GNU/Linux'},

]

const AboutSection = () => {
  return (
    <section id='about'>
      <div className='my-12 pb-12 md:pt-16 md:pb-48'>
        <h1 className='text-center font-bold text-4xl'>
          Sobre mi
          <hr className="w-6 h-1 mx-auto my-4 bg-[#035AA6] border-0 rounded"></hr>
          </h1>
          <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
            <div className='md:w-1/2'>
              <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>¡Conoceme!</h1>
              <p>
                {" "}
                Soy un <span className='font-bold text-[#035AA6]'>{"estudiante de Ingeniería en Informática de Duoc UC."}</span> Desde muy niño he tenido contacto con la informática y tal contacto fue la que me ha <span className='font-bold text-[#035AA6]'>{'desarrollado una pasión en esta área.'}</span> Siempre estoy dispuesto a aprender nuevas cosas en los que me permiten enriquecerme y <span className='font-bold text-[#035AA6]'>{'crecer profesionalmente'}</span> como también mi fuerte participación en la contribución al código libre (Open Source).
              </p>
              <br/>
            </div>
          <div className='md:w-1/2'>
            <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Tecnologías en los que trabajo y en los que estoy aprendiendo
            </h1>
            <div className='flex flex-wrap flex-row justify-center md:justify-start'>
              {tech.map((item, idx) => {
                return <p key={idx} className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"'>{item.tech}</p>
              })}
            </div>
            <Image className='hidden md:block md:relative md:bottom-4 md:left-48 md:z-0' src="/lostonline.svg" alt="" width={400} height={400} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
