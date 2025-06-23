//Uso de hooks
import { useState } from "react";

export function TwitterFollowCard({ children, userName, initIsFollowing }) {
  //ESTADO ACTUAL , ESTADO QUE QUEREMOS CAMBIAR
  const [isFollowing, setIsFollowing] = useState(initIsFollowing);

  //CREAMOS FUNCION PARA CAMBIAR ESTADO DE ISFOLLOWING
  const handleClick = () => {
    setIsFollowing(!isFollowing); //CAMBIA AL ESTADO CONTRARIO
  };

  return (
    <article className="twitter-card">
      <header>
        <img src={`https://unavatar.io/github/${userName}`} alt="mdo avatar" />
        <div>
          <strong>{children}</strong>
          <span>@{userName}</span>
        </div>
      </header>
      <aside>
        <button
          className={isFollowing ? "button-following" : "button-follow"}
          onClick={handleClick}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>
      </aside>
    </article>
  );
}
