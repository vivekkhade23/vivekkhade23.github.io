import React from 'react'
import TypeWriter from "typewriter-effect"
export default function Time() {
    return (
        <TypeWriter
        options={{
            strings: [
              "Web Developer",
              "Frontend Developer",
              "MERN full Stack Developer",
              "Backend Developer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
    )
}
