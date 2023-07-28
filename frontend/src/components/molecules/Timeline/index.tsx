import { Box, styled, Tab, Tabs } from '@mui/material'
import * as React from 'react'
import theme from '../../../theme/index'
import { timeLineValues } from '../../../constants'


interface TimeLineTabsProps {
  typevariant?: 'Dashboard' | 'Detail'
  onSelectTab?: () => void
  value?: number
  onChange?: (event: React.SyntheticEvent<Element, Event>, value: any) => void
  variant?: string
  scrollButtons?: boolean
  label?: string
}

const StyledTimeLineTabs = styled(Tabs)((props: TimeLineTabsProps) => ({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
}))

const StyledTimeLineTab = styled(Tab)((props: TimeLineTabsProps) => ({
  '&.Mui-selected': {
    color: 'timeLine.fillColor',
    backgroundColor:
      props.typevariant == 'Dashboard'
        ? 'none'
        : theme.palette.timeLine.borderColor,
    textDecoration: props.typevariant == 'Dashboard' ? '2px underline ' : 'none',
    variant:'caption2',

    textUnderlineOffset: '6px',
  },
  alignItems: 'center',
  minWidth: '32px',
  minHeight: '32px !important',
  borderRadius: props.typevariant == 'Dashboard' ? 0 : '50%',
  color: 'textColor.mediumEmphasis',
  textTransform: 'none',
  padding: '8px !important',
  margin: '5px',
}))

const StyledBox = styled(Box)(() => ({
  maxWidth: 280,
  maxHeight: 45,
  border: '1px solid #E8E8F7',
  marginTop: '1px ',
  paddingBottom: '-3px',
  padding: '0',
}))

export default function TimeLineTabs(props: TimeLineTabsProps) {
  const { typevariant, onSelectTab } = props
  const [value, setValue] = React.useState(3)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <StyledBox>
      <StyledTimeLineTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        data-testid="tabs"
      >
        {timeLineValues.map((value)=>{
          return (
            <StyledTimeLineTab
              key={`tab-${value}`}
              label={value}
              typevariant={typevariant}
              data-testid={`tab-${value}`}
              onClick={onSelectTab}
              disabled={value !=='1M'}
            />
          )
        })}
      </StyledTimeLineTabs>
    </StyledBox>
  )
}