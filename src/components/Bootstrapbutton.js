import React from 'react'
import {Button} from "react-bootstrap"

export default function Bootstrapbutton(props) {
  return (
    <div>
      <Button type={props.type}>Enviar</Button>
    </div>
  )
}
