import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Niet gevonden" />
    <div className="container">
      <div className="jumbotron">
      <h1>Error 404: Sorry deze pagina bestaat niet</h1>
      <Link to="/">Terug naar mijn homepage</Link>

      </div>
      <p>
        Deze pagina bestaat niet of is in het verleden verwijderd.
      </p>
    </div>

  </Layout>
)

export default NotFoundPage
