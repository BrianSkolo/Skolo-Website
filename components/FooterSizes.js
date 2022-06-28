// import React from 'react'
// import { useMediaQuery } from 'react-responsive'
import Footer from './Footer'
import FooterMobile from './FooterMobile'

// const Example = () => {
//   const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
//   const isBigScreen = useMediaQuery({ minWidth: 1824 })
//   const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
//   const isPortrait = useMediaQuery({ orientation: 'portrait' })
//   const isRetina = useMediaQuery({ minResolution: '2dppx' })

//   return (
//     <div>
       
//       ...
//     </div>
//   )
// }

import { Context as ResponsiveContext } from 'react-responsive'
import { renderToString } from 'react-dom/server'
import App from './App'

  // Context is just a regular React Context component, it accepts a `value` prop to be passed to consuming components
  const FooterSizes = renderToString(
    <ResponsiveContext.Provider value={{ width: 500 }}>
     
      <FooterMobile/>
    </ResponsiveContext.Provider>
    )
    