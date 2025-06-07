import React from 'react'

const Contact = React.forwardRef<HTMLElement>((_,ref) => (
    <section ref={ref} className=''>

    </section>
))

Contact.displayName = "Contact"

export default Contact