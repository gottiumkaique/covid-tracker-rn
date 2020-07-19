import React from "react"
import { StatusBar, SafeAreaView, Platform } from "react-native"
import Routes from "./src/routes"

const App = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" translucent />
    <SafeAreaView
      style={{flex: 1, marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}
    >
      <Routes/>
    </SafeAreaView>
    </>
)

export default App