export default function Player({timeline}: { timeline: any }) {
    return (
        <div className="rounded overflow-hidden shadow-lg p-6 m-5">
            <div>
                <h2 className={(timeline.player_state == "Alive" ? "text-lime-600" : "text-zinc-400") + " font-bold text-xl"}>
                    {timeline.player_name} <span >({timeline.player_state})</span>
                </h2>
            </div>
            <div className="flex flex-col lg:flex-row mt-2">
                <div className="basis-1/4">
                    Survival Time: {secondsToFriendlyTime(timeline.survived_seconds)}<br />
                    Longest Life: {secondsToFriendlyTime(timeline.longest_life_seconds)}<br />
                    Shortest Life: {secondsToFriendlyTime(timeline.shortest_life_seconds)}<br />
                </div>
                <div className="basis-3/4 mt-5 lg:mt-0">

                    <span className="font-bold lg:hidden">Events</span>

                    {timeline.events.map((event: any) => (
                        <div key={event.stamp} className="flex flex-col mb-3">
                            <div>
                                {event.context}
                                {(event.what == "Alive" || event.what == "Died") && <br/>}
                                {(event.what == "Alive" || event.what == "Died") &&
                                    <span className={event.unranked ? "text-zinc-500" : "text-sky-600"}>
                                        Survival Time: {secondsToFriendlyTime(event.span)} ({event.unranked ? "Unranked" : "Ranked"})
                                    </span>
                                }
                            </div>
                            <div>
                                <span className="text-zinc-600">{event.what}: {event.stamp}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

function secondsToFriendlyTime(seconds: number) {
    if (seconds < 60) return `${seconds} second${seconds !== 1 ? 's' : ''}`;

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''}`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''}`;

    const days = Math.floor(hours / 24);
    return `${days} day${days !== 1 ? 's' : ''}`;
}