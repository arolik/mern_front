import { Dialog, DialogContent, DialogContentText, DialogTitle, useMediaQuery, useTheme } from "@mui/material";
import { DialogParamsInterface } from "../interfaces/interfaces";


const LoginPage: React.FC<DialogParamsInterface> = ({params}) => {

    const theme = useTheme();
    const fullScrean = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog fullScreen={fullScrean} open={params.stateModal} onClose={params.handleModal}>
            <DialogTitle>this is login title</DialogTitle>
            <DialogContent>
                <DialogContentText>this is login content</DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

export default LoginPage;