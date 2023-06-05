import Link from 'next/link'
import React from 'react'

import { IconLink } from '@/components/IconLink'
import { Logo } from '@/components/Logo'
import { SignUpForm } from '@/components/SignUpForm'
import TextTransition, { presets } from 'react-text-transition';
import {Event} from "@/components/Event";

function BookIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
    </svg>
  )
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function FeedIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 3a.5.5 0 0 1 .5-.5h.5c5.523 0 10 4.477 10 10v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5A8.5 8.5 0 0 0 3.5 4H3a.5.5 0 0 1-.5-.5V3Zm0 4.5A.5.5 0 0 1 3 7h.5A5.5 5.5 0 0 1 9 12.5v.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-.5a4 4 0 0 0-4-4H3a.5.5 0 0 1-.5-.5v-.5Zm0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M5.526 13.502c5.032 0 7.784-4.168 7.784-7.783 0-.119 0-.237-.008-.353a5.566 5.566 0 0 0 1.364-1.418 5.46 5.46 0 0 1-1.571.431c.571-.342.998-.88 1.203-1.513a5.483 5.483 0 0 1-1.737.664 2.738 2.738 0 0 0-4.662 2.495 7.767 7.767 0 0 1-5.638-2.858 2.737 2.737 0 0 0 .847 3.651 2.715 2.715 0 0 1-1.242-.341v.035a2.737 2.737 0 0 0 2.195 2.681 2.73 2.73 0 0 1-1.235.047 2.739 2.739 0 0 0 2.556 1.9 5.49 5.49 0 0 1-4.049 1.133A7.744 7.744 0 0 0 5.526 13.5" />
    </svg>
  )
}

const COLORS = ['bg-sky-600', 'bg-rose-600', 'bg-violet-600', 'bg-amber-600', 'bg-emerald-600', 'bg-cyan-600', 'bg-fuchsia-600', 'bg-orange-600', 'bg-teal-600', 'bg-green-600', 'bg-blue-600', 'bg-purple-600', 'bg-pink-600', 'bg-yellow-600', 'bg-red-600', 'bg-indigo-600'];
const TEXTS = [
    'Russia attacks Ukraine',
    'ZettaFLOPS-capable computer',
    'Oil jumps to $200',
    'US allows free immigration',
    'Interest rates hit 10%',
    'Deadly pandemic breaks',
    'M4 Money supply grows 20%',
    'Quantum computing advances',
    'China invades Taiwan',
    'Bitcoin hits $100,000',
    'US imposes VAT',
    'US legalizes narcotics',
    'US passes $10 trillion stimulus',
    'Fusion power plant',
    'Basic income in US',
    'Saudi Arabia collapses',
    'kWh costs $0.01',
    'Neuralink implants',
    'AI-driven unemployment',
    'Asteroid mining becomes viable',
    'Human lifespan doubles'
    ].map((text, idx) => <div key={idx} className={`${COLORS[idx % COLORS.length]} p-2 md:whitespace-nowrap rounded`}>{text}</div>);


export function Intro() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            2000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

  return (
    <>
      <div>
        <Link href="/">
          <Logo className="inline-block h-8 w-auto" />
        </Link>
      </div>
      <h1 className="mt-14 font-display text-4xl/tight font-light text-white ">
        The World IF{'     '}
      </h1>
      <div className="text-4xl">
          <TextTransition springConfig={presets.stiff}>{TEXTS[index % TEXTS.length]}</TextTransition>
      </div>
        <p className="mt-4 text-sm/6 text-gray-300">
        The World IF is a community of people who are interested in the future of the world. We are a platform that enables people to make predictions about the alternative future of the world based on hypothetical event.
      </p>
      <SignUpForm />
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Brought to you by{' '}
      <IconLink target="_blank" href="https://twitter.com/a_sarentorbic" icon={TwitterIcon} compact large>
        Alex Brajkovic
      </IconLink>
    </p>
  )
}
