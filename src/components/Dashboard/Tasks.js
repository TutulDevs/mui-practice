import { FormGroup } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import DashCard from "./DashCard";
import DashCardHeader from "./DashCardHeader";
import TasksItem from "./TasksItem";

// style
const FormGroupStyle = styled(FormGroup)(({ theme }) => ({
  padding: theme.spacing(3),
  paddingBottom: theme.spacing(2),
}));

// list of tasks
const TASK_LIST = [
  { id: "chk_1", label: "Create FireStone Logo", status: false },
  { id: "chk_2", label: "Add SCSS and JS files if required", status: false },
  { id: "chk_3", label: "Stakeholder Meeting", status: false },
  { id: "chk_4", label: "Scoping & Estimations", status: true },
  { id: "chk_5", label: "Sprint Showcase", status: false },
];

const Tasks = () => {
  return (
    <DashCard>
      <DashCardHeader title="Tasks" />

      <FormGroupStyle>
        {TASK_LIST.map((el) => (
          <TasksItem
            key={el.id}
            id={el.id}
            status={el.status}
            label={el.label}
          />
        ))}
      </FormGroupStyle>
    </DashCard>
  );
};

export default Tasks;
