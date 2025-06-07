import React from 'react'

const Properties = React.forwardRef<HTMLElement>((_,ref) => (
    <section ref={ref}>

    </section>
))

Properties.displayName = "Properties"

export default Properties
