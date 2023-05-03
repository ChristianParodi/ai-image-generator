import React from 'react'

interface Props {
    output: string | undefined
    setOutput: React.Dispatch<React.SetStateAction<string>>
}

function Output(props: Props) {
    return (
        <div>{props.output}</div>
    )
}

export default Output