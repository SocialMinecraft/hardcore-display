import Player from "./player"

export default async function Home() {
    let url = process.env.API_SERVER;
    if (url == undefined) {
        console.log("API_SERVER not set");
        url = 'http://localhost:3030';
    }
    let data = await fetch(url + '/timelines',  { cache: 'no-store' })
    let timelines = await data.json()

    return (
        <main className="container mx-auto mt-10">
            {timelines.map((timeline: any) => (
                <Player timeline={timeline} key={timeline.player_names}  />
            ))}
        </main>
    )
}
