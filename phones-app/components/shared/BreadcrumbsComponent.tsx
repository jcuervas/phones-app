import {Breadcrumbs, Link, Typography} from "@mui/material";

export interface Breadcrumb {
  label: string
  link?: string
}

interface BreadcrumbsProps {
  list: Breadcrumb[]
}

export default function BreadcrumbsComponent(props: BreadcrumbsProps) {
  const {list} = props

  return (
    <Breadcrumbs>
      <Link underline="always" href="/">Home</Link>
      {list.map((bc, i) => {
        return i === list.length - 1
          ? (<Link underline="hover" href={bc.link} key={i}>{bc.label}</Link>)
          : (<Typography key={i}>{bc.label}</Typography>)
      })}
    </Breadcrumbs>
  )
}
