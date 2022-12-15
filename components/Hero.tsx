import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: ['Hi, My Name is Pete Sekesan',
      'I like to write code'],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 2,
  })
  return (
    <div>
      <h1>
      <span>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
        </h1>
    </div>
  )
}

export default Hero