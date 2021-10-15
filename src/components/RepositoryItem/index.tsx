import React from "react";
import { IRepository } from "../RepositoryList";

import "./styles.scss";

interface IRepositoryItemProps {
  repository: IRepository;
}

function RepositoryItem(props: IRepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository?.description}</p>

      <a href={props.repository?.html_url}>Acessar repositório</a>
    </li>
  );
}

export default RepositoryItem;
