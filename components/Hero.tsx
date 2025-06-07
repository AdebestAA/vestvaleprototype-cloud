import React from 'react'

const Hero = React.forwardRef<HTMLElement>((_, ref) => (
    <section ref={ref} className=''>

    </section>
))

Hero.displayName = "Hero"

export default Hero