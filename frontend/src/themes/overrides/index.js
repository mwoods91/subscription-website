// third-party
import { merge } from 'lodash';

// project import

import Chip from './Chip';
import InputLabel from './InputLabel'
import Typography from './Typography'
import OutlinedInput from './OutlinedInput';
import InputBase from './InputBase'
import TableRow from './TableRow'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableCell from './TableCell'
import TableFooter from './TableFooter'


// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme) {
  return merge(
    Chip(theme),
    InputLabel(theme),
    Typography(theme),
    OutlinedInput(theme),
    InputBase(theme),
    TableRow(theme),
    TableHead(theme),
    TableBody(theme),
    TableCell(theme),
    TableFooter(theme)

    
  );
}
