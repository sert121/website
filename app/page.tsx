import React from 'react';
import { Link } from 'next-view-transitions';

function AnimatedName() {
  return (
    <h1 className="font-medium pt-12 transition-element">
      <span className="sr-only">Yash More</span>
      <span aria-hidden="true" className="block overflow-hidden group relative">
        <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full">
          {'Yash More'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </span>
        <span className="inline-block absolute left-0 top-0 transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
          {'sert121'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </span>
    </h1>
  );
}

export default function Home() {
  return (
    <>
      <AnimatedName />
      <div className="text-gray-800 space-y-4 leading-snug">
        <p>
        I’m a researcher and a graduate student at McGill University and Mila, where I’m fortunate to be advised by Golnoosh Farnadi.
        I’m currently interested in the broad areas of alignment, reasoning, and <Link href='/evals' className='text-blue-500 hover:text-blue-700'>evaluation</Link> of current ml systems (read: LLMs). 
        </p>

        <p>
        I tend to wear multiple hats, and have spent some time on designing, creating and opining on software. 
        Previously, I <Link href="/work" className="text-blue-500 hover:text-blue-700"> worked </Link> with <Link className ="underline underline-offset-2" href="https://www.nextcanada.com/next-ai/">NextAI</Link>, <Link href="defog.ai" className ="underline underline-offset-2" >Defog</Link>, <Link href="https://www.tribe.ai/" className ="underline underline-offset-2" >TribeAI</Link>, <Link  className ="underline underline-offset-2" href="https://dresslife.com/">dresslife</Link>,
        dabbling in ml and software-engg roles.
        </p>

        <p>
        My early years of research were shaped by my time at <Link className ="underline underline-offset-2" href="https://www.ashoka.edu.in/roles/faculty/?yearby=28&filterby=20">Ashoka</Link>, under guidance of <Link href='https://www.ashoka.edu.in/profile/debayan-gupta/' className="text-blue-400 hover:italic">Debayan Gupta</Link>.
        Outside work, I spend a fair bit of time playing tennis, discovering <Link className='text-blue-500 hover:text-blue-700' href="/music">music</Link>, art  and visiting local cafes.       
        </p>

      </div>
    </>
  );
}
