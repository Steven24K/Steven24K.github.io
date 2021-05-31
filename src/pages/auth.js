import React from 'react'

import Layout from "../components/Layout"



const Auth = () => {
    let [infoText, setInfoText] = React.useState("")

    let auth_key = null
    if (typeof window !== 'undefined') {
        let path = window.location.search.split('=')
        auth_key = path.length >= 2 ? path[1] : ''
    }

    let copy_text = () => {
        if (typeof navigator !== 'undefined') {
            navigator.clipboard.writeText(auth_key)
            setInfoText("Key copied to clipboard!")
        }
    }

    return <Layout>
        <div className="container">
            {infoText != "" && <div class="alert alert-primary" role="alert">
                {infoText}
            </div>}
            <h1>Your auth key: </h1>

            <h2 id="copy" onClick={copy_text}>
                {auth_key}
            </h2>

            <button onClick={copy_text}>
                Copy
        </button>
        </div>
    </Layout>

}

export default Auth