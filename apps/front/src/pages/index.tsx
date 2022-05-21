import { NextPage } from "next"
import Home from "../presentation/screens/Home"

type Props = {
    data: any
}

const HomePage: NextPage<Props> = ({ data }) => {
    return <Home />
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//     // const { data } = await axiosClient.get('/', {
//     //     params: {
//     //         url: ''
//     //     }
//     // })

//     return {
//         props: {
//             // data
//         }
//     }
// }

export default HomePage