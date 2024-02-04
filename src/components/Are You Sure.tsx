import {
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function AreYouSure(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Are You Sure To Delete ?</DialogTitle>
      <DialogContent>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleListItemClick("Yes")}>
              <ListItemText primary="Yes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleListItemClick("No")}>
              <ListItemText primary="No" />
            </ListItemButton>
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
}
