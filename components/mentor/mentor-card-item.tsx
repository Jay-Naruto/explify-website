import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Mentor } from '../../interfaces/mentor'
import { ScrollLink } from 'react-scroll'
import { StyledButton } from '../styled-button'
import { height } from '@mui/system'
import Link from 'next/link'

interface Props {
  item: Mentor
}

const MentorCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 5,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'transparent',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: ' 1px 1px 1px 1px rgb(255,255,255,0.1);',
            cursor: 'pointer',
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            height: 300,
            mb: 2,
          }}
        >
          <Link href={item.link}>
            <img style={{ width: '100%', height: '100%' }} src={item.photo as string} alt={'Img ' + item.id} />
          </Link>
          {/* <Typography>{item.name}</Typography> */}
        </Box>
        <Box sx={{ mb: 2 }}></Box>
      </Box>
    </Box>
  )
}
export default MentorCardItem
