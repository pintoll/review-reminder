import { gql, useQuery } from "@apollo/client";

const GET_PING = gql`
    query getPing {
        ping
    } 
`

export default function Home() {
    const { data, loading } = useQuery(GET_PING);
    return <div>
        <h2>What is Ping and Pong?</h2>
        <h1>{loading ? "Ping..." : data.ping }</h1>
    </div>;
}