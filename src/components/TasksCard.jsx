// import {CircleDollar} from "@gravity-ui/icons";
import {Card, Link} from "@heroui/react";


// {
//     "id": "task-001",
//     "title": "Build navbar component",
//     "description": "Responsive navbar with mobile menu",
//     "completed": false,
//     "priority": "high",
//     "dueDate": "2026-04-25"
// }
const TasksCard = ({task}) => {
    console.log(task);
    const {title, description, priority} = task;

    return (
        <Card variant="primary" className="border-2 rounded-lg">
            {/* <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" /> */}
            <Card.Header>
                <Card.Title>{title}</Card.Title>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Header>
            <Card.Footer>
                <Link
                    aria-label="Go to Acme Creator Hub (opens in new tab)"
                    href="https://heroui.com"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Creator Hub
                    <Link.Icon aria-hidden="true" />
                </Link>
            </Card.Footer>
        </Card>
    );
};

export default TasksCard;