import React from 'react'

import Layout from './Layout'

import Router from './Routes'

const App = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
    <Layout>
    <Router/>
    </Layout>
   
    </>
  )
}

export default App

// https://vienhealth.com/privacypolicy
// https://vienhealth.com/membership-terms
/*




https://vienhealth-org.myfreshworks.com/



cf_contact_location
cf_message
cf_hear_about_us
cf_account_type

*/