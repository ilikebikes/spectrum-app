import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';

import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Creates a modal that allows a user to input text and the text
 * can be saved off to be used by other components.
 * Modal can be modified in future versions to take in a
 * component with user controls on it versus a variable
 * for saving off text.
 * @author Nick Torres <nicktorres@outlook.com>
 * @function
 * @param {object} props - Props for modal
 * @property {function} onClose - Required, function called on close
 * @property {bool} open - Required, boolean value used to indicate whether modal is open
 * @property {function} setOpen - Required, boolean value used to indicate whether modal is open
 * @property {string} modTitle - Required, modal title
 * @property {string} [bodyText] - Optional, the modal body text
 * @return styled Dialog modal
 */
export function DialogModal(props) {
  const [message, setMessage] = React.useState('');
  const [showAlert, setShowAlert] = React.useState(false);
  // gather props
  const { bodyText, modTitle, onClose, open, setOpen } = props;
  // ref for TextField where user enters data
  const fieldRef = React.useRef();

  /**
   * Actions for saving data
   * @author Nick Torres
   * @function
   */
  const handleSave = () => {
    // simplistic example of a toast
    if (bodyText !== fieldRef.current.value) {
      setMessage('Success!');
    } else {
      setMessage('Failure');
    }
    setShowAlert(true);

    // eslint-disable-next-line no-console
    console.debug('saving data...');
    onClose(fieldRef.current.value);
  };

  // if a user clicks outside the modal/cancels/closes don't save data
  const handleClose = () => {
    setShowAlert(false);
    setOpen(false);
  };

  // breakpoints
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down(600));

  // height breakpoints
  // eslint-disable-next-line no-shadow
  const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.only('md')]: {
      maxHeight: '72vh',
    },
    [theme.breakpoints.only('lg')]: {
      maxHeight: '72vh',
    },
    [theme.breakpoints.only('xl')]: {
      maxHeight: '84vh',
    },
    [theme.breakpoints.up('xl')]: {
      maxHeight: '84vh',
    },
  }));

  // sx style for box around buttons
  const buttonsBox = {
    [theme.breakpoints.down(600)]: {
      width: '95%',
      display: 'block',
      justifyContent: 'center',
      marginLeft: '13px',
    },
    [theme.breakpoints.up(600)]: {
      minWidth: '250px',
      display: 'flex',
      justifyContent: 'center',
    },
  };

  // sx styles for buttons themselves
  const buttonsBoth = {
    [theme.breakpoints.down(600)]: {
      marginBottom: 2,
      marginTop: 2,
    },
    [theme.breakpoints.up(600)]: {
      marginBottom: 3,
      marginTop: 2,
      marginLeft: 2,
      marginRight: 2,
      width: '33%',
    },
  };
  return (
    <Root>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby={modTitle}
        aria-describedby={bodyText}
        fullScreen={fullScreen}
        fullWidth
        scroll="paper"
        maxWidth="md"
      >
        <Box pb={4.5}>
          <Box sx={{ display: 'flex', justifyContent: 'right', paddingTop: 1, paddingRight: 1 }}>
            <IconButton onClick={handleClose} size="medium">
              <CloseIcon />
            </IconButton>
          </Box>

          <DialogTitle id="modal-modal-title" variant="h3" component="h3">
            {modTitle}
          </DialogTitle>

          <Box sx={{ display: 'flex', justifyContent: 'left' }}>
            <DialogContent>
              <TextField
                variant="outlined"
                multiline
                inputRef={fieldRef}
                helperText="Please Enter Data"
                fullWidth
              />
            </DialogContent>
          </Box>

          <Box sx={buttonsBox}>
            <Button
              size="large"
              color="primary"
              variant="outlined"
              onClick={handleClose}
              fullWidth={fullScreen}
              sx={buttonsBoth}
            >
              Cancel
            </Button>
            <Button
              size="large"
              color="primary"
              variant="contained"
              type="submit"
              onClick={handleSave}
              fullWidth={fullScreen}
              sx={buttonsBoth}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Dialog>
      <div>
        {showAlert ? (
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={showAlert}
            autoHideDuration={3000}
            onClose={() => {
              setTimeout(setShowAlert(false), 2000);
            }}
            message={message}
          />
        ) : null}
      </div>
    </Root>
  );
}

/**
 * Prop Types
 * @type {Object}
 * @property {function} onClose - Required, function called on close
 * @property {bool} open - Required, boolean value used to indicate whether modal is open
 * @property {function} setOpen - Required, boolean value used to indicate whether modal is open
 * @property {string} modTitle - Required, modal title
 * @property {string} [bodyText] - Optional, the modal body text
 */
DialogModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  modTitle: PropTypes.string.isRequired,
  bodyText: PropTypes.string,
};

DialogModal.defaultProps = {
  bodyText: '',
};

/**
 * Creates a button to activate modal.
 * @function
 * @param {none}
 * @return Button that activates dialog modal along with DialogModal
 */
export default function DialogDemo() {
  // initial states
  const [open, setOpen] = React.useState(false);
  const [saveData, setSaveData] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  // data user entered
  const handleClose = (value) => {
    setOpen(false);
    // eslint-disable-next-line no-console
    console.log('DATA SAVED: ', value);
    setSaveData(value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog modal
      </Button>
      <DialogModal
        modTitle="Boy this sure is a sweet modal, isn't it?"
        open={open}
        setOpen={setOpen}
        onClose={handleClose}
        bodyText={saveData}
      />
    </div>
  );
}
