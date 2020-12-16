import { Box, withStyles } from '@material-ui/core';

const FormFilter = withStyles({
  root: {
    display: 'flex',
    position: 'relative',
    padding: '0.8em',
    backgroundColor: '#f7f7f7',

    '& .MuiFormControl-root': {
      margin: '0.3em 0.3em 0.3em 0',
    },
  },
})(Box);

export default FormFilter;
