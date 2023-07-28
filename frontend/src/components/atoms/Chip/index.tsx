import { Chip, styled } from '@mui/material'
import React from 'react'
import theme from '../../../theme'

interface ChipProps {
  label: string
  chipvariant?: 'light' | 'dark'
  chiptype: 'rounded' | 'squared'
  chipcolor?: string
  selected?: boolean
}

const StyledRoundedChip = styled(Chip)((props: ChipProps) => ({
  height: props.chipvariant === 'light' ? '18px' : '20px',
  borderRadius: '100px',
  gap: '10px',
  backgroundColor:
    props.chipvariant === 'light'
      ? theme.palette.greyColors.grey50
      : theme.palette.greyColors.grey100,

  '&:hover': {
    backgroundColor: ''
  },
  '& .MuiChip-label': {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '16px',
    color:
      props.chipvariant === 'light'
        ? theme.palette.textColor.mediumEmphasis
        : theme.palette.greyColors.grey500,
  },
}))

const StyledSquaredChip = styled(Chip)((props: ChipProps) => ({
  height: '38px',
  gap: '10px',
  borderRadius: '4px',
  backgroundColor: props.chipcolor,
  padding: '8px 8px',
  border: props.selected ? `2px solid ${props.chipcolor}` : '',
  '& .MuiChip-label': {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '22px',
    color: theme.palette.textColor.highEmphasis,
  },
  '& .MuiChip-clickable': {
    border: `2px solid ${props.chipcolor}`,
  },
}))

const ChipItem: React.FC<ChipProps> = ({
  label,
  chipvariant,
  chiptype,
  chipcolor,
  selected
}) => {
    return (
        chiptype === 'squared' ? (
          <StyledSquaredChip
            variant="filled"
            label={label}
            chiptype={chiptype}
            chipcolor={chipcolor}
            selected={selected}
            data-testid="chip"
          />
        ) : (
          <StyledRoundedChip
            variant="filled"
            label={label}
            chipvariant={chipvariant}
            chiptype={chiptype}
            data-testid="chip"
          />
        )
      );
}

export default ChipItem