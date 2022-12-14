import type {NextPage} from 'next'
import Head from 'next/head'
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widget from "../components/Widgets";

const Home: NextPage = () => {
    return (
        <div className={
            "lg:max-w-6xl mx-auto max-h-screen overflow-hidden"
        }>
            <Head>
                <title>Clonewitter</title>
                <link rel="icon" href="https://pnggrid.com/wp-content/uploads/2021/07/Twitter-Logo-Square.png"/>
            </Head>

            <main className={
                "grid grid-cols-9"
            }>
                <Sidebar />
                <Feed />
                <Widget />
            </main>
        </div>
    )
}

export default Home
