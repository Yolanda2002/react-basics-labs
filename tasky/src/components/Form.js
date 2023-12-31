import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const AddTaskForm = (props) => {

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
                }}
                onSubmit={props.submit}
            >
                {/* add Task Title */}
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        name="title"
                        label="Task Title"
                        InputLabelProps={{ shrink: true }}
                        onChange={(event) => props.change(event)}
                    />
                </div>
                {/* add deadline */}
                <div>
                    <TextField
                        required
                        name="deadline"
                        label="Deadline"
                        InputLabelProps={{ shrink: true }}
                        type="date"
                        onChange={(event) => props.change(event)}
                    />
                </div>

                
                {/* add priority */}
                <div>
                    <TextField
                        select
                        required
                        id="outlined-select-priority"
                        name="priority"
                        label="Priority"
                        InputLabelProps={{ shrink: true }}
                        onChange={(event) => props.change(event)}
                    >
                        <MenuItem value="low">Low</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="high">High</MenuItem>
                    </TextField>
                </div>
                {/* add discription text */}
                <div>
                    <TextField
                        name="description"
                        id="outlined-multiline-static"
                        label="Task Details"
                        InputLabelProps={{ shrink: true }}
                        multiline
                        rows={4}
                        onChange={(event) => props.change(event)}
                    />
                </div>
                {/* add submit Button */}
                <div>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                            m: 1,
                            p: 1,
                            width: '95%'
                        }}
                    >
                        Add Task
                    </Button>
                </div>
            </Box>
        </div>
    )
};

export default AddTaskForm;