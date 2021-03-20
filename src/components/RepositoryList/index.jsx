import React from "react";
import RepositoryItem from "../RepositoryItem";

const repository = {
  name: "Unform",
  description: "Forms in React",
  link: "http://github.com/rubemfsv",
};

function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}

export default RepositoryList;
