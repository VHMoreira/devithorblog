import { GetServerSideProps, NextPage } from "next"
import axiosClient from "../config/clients/AxiosClient"

type Props = {
    data: any
}

const Home: NextPage<Props> = ({ data }) => {
    return (
        <h1>Hello World</h1>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { data } = await axiosClient.get('/', {
        params: {
            url: ''
        }
    })

    return {
        props: {
            data
        }
    }
}

export default Home