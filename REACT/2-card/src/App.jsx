import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    initIsFollowing: false,
  },
  {
    userName: "codemaster",
    name: "Laura Hernández",
    initIsFollowing: true,
  },
  {
    userName: "devwizard",
    name: "Samuel Ortega",
    initIsFollowing: false,
  },
  {
    userName: "frontendqueen",
    name: "Valeria Gómez",
    initIsFollowing: true,
  },
  {
    userName: "techtonic",
    name: "David Ramírez",
    initIsFollowing: false,
  },
  {
    userName: "bytebender",
    name: "Andrés Ríos",
    initIsFollowing: true,
  },
  {
    userName: "vercellover",
    name: "Tomás Pineda",
    initIsFollowing: false,
  },
  {
    userName: "designnaut",
    name: "Clara Espinosa",
    initIsFollowing: true,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
