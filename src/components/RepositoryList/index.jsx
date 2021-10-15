import React, { useEffect, useState } from "react";
import RepositoryItem from "../RepositoryItem";

import "./styles.scss";

function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/rubemfsv/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section>
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.id} repository={repository} />;
        })}
      </ul>
    </section>
  );
}

export default RepositoryList;
