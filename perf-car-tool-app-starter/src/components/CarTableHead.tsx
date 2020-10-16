import React, { memo } from 'react';
import {
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';
import { ColHeader } from './ColHeader';
import { ColHeaders, CarsSort } from '../models/CarsSort';
import { CarKeys } from '../models/Car';


export type CarTableHeadProps = {
  colHeaders: ColHeaders,
  carsSort: CarsSort,
  onSortCars: (col: CarKeys) => void
}

export const CarTableHead = memo(
  function CarTableHead({ colHeaders, carsSort, onSortCars: sortCars }: CarTableHeadProps) {
    return (
      <TableHead>
        <TableRow>
          {colHeaders.map((colHeader) => (
            <ColHeader
              key={colHeader.id}
              carsSort={carsSort}
              col={colHeader.col}
              caption={colHeader.caption}
              onClick={sortCars}
            />
          ))}
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      );
  }
);