import React, { Dispatch, SetStateAction } from 'react'
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export interface IUser {
  id: string
  name: string
  avatar: string
  isInNetwork?: boolean
}

export interface IPost {
  author: IUser
  createdAt: string
  content: string
  images?: string[]
}

export interface IMenuItems {
  id: number
  title: string
  link: string
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string }
}
