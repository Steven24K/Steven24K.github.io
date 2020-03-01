import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Niet gevonden" />
    <h1>Error 404 : Sorry deze pagina bestaat niet</h1>
    <p>
      Deze pagina bestaat niet of is in het verleden verwijderd.
    </p>
  </Layout>
)

export default NotFoundPage
