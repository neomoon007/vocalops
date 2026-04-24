interface TaskNode {
    id: number;
    content: string;
    parentId?: number;
    metadata: string;
}

const myFirstTask: TaskNode = {
    id: 1,
    content: "my very first tast",
    metadata: "general-tasks", 
}

console.log(myFirstTask.id, myFirstTask.content, myFirstTask.metadata);