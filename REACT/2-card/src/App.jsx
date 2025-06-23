import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard user={"midudev"} initIsFollowing={true}>
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard user={"pheralb"} initIsFollowing={false}>
        Pablo Hernandez
      </TwitterFollowCard>
      <TwitterFollowCard user={"elonmusk"} initIsFollowing={false}>
        Elon Musk
      </TwitterFollowCard>
    </section>
  );
}
