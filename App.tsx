import React from "react"
import Routes from "./src/routes"
import { Wrapper } from "./src/styles"
import { StatusBar } from "react-native"

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent />
      <Wrapper>
        <Routes/>
      </Wrapper>
    </>
  )
}