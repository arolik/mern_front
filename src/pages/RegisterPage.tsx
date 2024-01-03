import { Button, Checkbox, Dialog, DialogContent, DialogContentText, DialogTitle, Divider, FormControlLabel, Grid, TextField, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { DialogParamsInterface } from "../interfaces/interfaces";


const RegisterPage: React.FC<DialogParamsInterface> = ({ params }) => {

    const theme = useTheme();
    const fullScrean = useMediaQuery(theme.breakpoints.down('xs'));
    const [checked, setChecked] = useState(false);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setChecked(event.target.checked);
    }

    return (
        <Dialog fullScreen={fullScrean} open={params.stateModal}
            onClose={params.handleModal}
            aria-labelledby="responsive-dialog-title"
            maxWidth="xs"
            fullWidth={true}
        >
            <DialogTitle id="responsive-dialog-title">Create account</DialogTitle>
            <Divider />
            <DialogContent>
                <DialogContentText>
                    <form>
                        <Grid container spacing={1} >
                            <Grid xs={12} item>
                                <TextField label="Login" type="text" variant="outlined"
                                    required placeholder="enter login" fullWidth />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField label="password" type={checked ? 'text' : 'password'} variant="outlined"
                                    required placeholder="enter password" fullWidth />
                            </Grid>
                            <Grid xs={12} item>
                                <FormControlLabel
                                    control={<Checkbox id="checkbox-label" checked={checked} onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }} />}
                                    label="Show password"
                                />
                            </Grid>
                            <Grid xs={12} container justifyContent={"space-between"} >
                                <Button color="primary" variant="contained" >Register</Button>
                                <Button onClick={params.handleModal} >Cancel</Button>
                            </Grid>
                        </Grid>
                    </form>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

export default RegisterPage;