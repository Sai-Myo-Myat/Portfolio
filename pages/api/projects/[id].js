import { projects } from "../../../data";

export default function handler({ query: { id } }, res) {
  const filteredProject = projects.filter((project) => project.id === id);
  if (filteredProject.length > 0) {
    res.status(200).json(filteredProject[0]);
  } else {
    res.status(404).json({ message: `projects not found!` });
  }
}
