import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: 'josueeRC',
    name: 'Josuee Contreras',
    isFollowing: true
  },
  {
    userName: 'JoseRGuzman',
    name: 'Jóse R Guzmán',
    isFollowing: false
  },
  {
    userName: 'realDonaldTrump',
    name: 'Donald J. Trump',
    isFollowing: true
  },
  {
    //elonmusk twitter
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: false,
    isVerified: true
  }
]

export const App = () => {
  return (
    <section className="App">
      {
        users.map(({userName, name, isFollowing, isVerified}) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialFollowing={isFollowing}
            isVerified={isVerified}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  );
};
