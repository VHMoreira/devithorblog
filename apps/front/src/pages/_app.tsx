import { NextPage } from "next"
import { AppProps } from "next/app"
import GlobalStyle from "@/presentation/styles/Global"
import Head from "next/head"

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/static/favicon.svg" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>DEVTHOR | Front-end</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default App