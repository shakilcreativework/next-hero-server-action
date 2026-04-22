import { newTaskAction } from "@/lib/actions";
import { Input, Label, TextField, Select, ListBox, Button } from "@heroui/react";

const NewTage = () => {
    return (
        <div className="w-1/2 mx-auto">
            <h2 className="text-5xl">Add a New Task</h2>
            <div>
                <form action={newTaskAction} className="flex flex-col gap-4">
                    <TextField className="w-full" name="title" type="text">
                        <Label>Title</Label>
                        <Input placeholder="Enter your title" />
                    </TextField>
                    <TextField className="w-full" name="description" type="text">
                        <Label>Description</Label>
                        <Input placeholder="Enter your description" />
                    </TextField>
                    <Select name="status" className="w-[256px]" placeholder="Select one">
                        <Label>Status</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="low" textValue="Low">
                                    Low
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="medium" textValue="Medium">
                                    Medium
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="high" textValue="High">
                                    High
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <Select name="priority" className="w-[256px]" placeholder="Select one">
                        <Label>Priority</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="pending" textValue="Pending">
                                    Pending
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="progress" textValue="Progress">
                                    Progress
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="completed" textValue="Completed">
                                    Completed
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>


                    <TextField className="w-full" name="assignedTo" type="text">
                        <Label>Assigned To</Label>
                        <Input placeholder="Enter your assigned To" />
                    </TextField>
                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button slot="close" type="Submit">Submit Task</Button>
                </form>
            </div>
        </div>
    );
};

export default NewTage;