import {KeyboardEvent, useEffect, useState} from "react";
import {PhoneQueryOptions} from "components/phones/phone.model";
import {useRouter} from "next/router";
import {Box, FormControl, InputLabel, MenuItem, Pagination, Typography} from "@mui/material";
import {SearchIconWrapper, StyledInputBar, StyledInputBase, StyledSelect} from "components/shared/styled";
import {SelectChangeEvent} from "@mui/material/Select/SelectInput";
import SearchIcon from "@mui/icons-material/Search";

interface PhoneFiltersProps {
  onFiltersChanged: (params: PhoneQueryOptions) => void
  totalPhones: number
}

export default function PhoneFilters(props: PhoneFiltersProps) {
  const {totalPhones, onFiltersChanged} = props
  const router = useRouter()

  const [pageSize, setPageSize] = useState(+(router.query.pageSize || 6))
  const [page, setPage] = useState(+(router.query.page || 1))
  const [query, setQuery] = useState(router.query.query || '')

  function setState(params: {
    page?: number
    pageSize?: number
    query?: string
  }) {
    if (params.pageSize) setPageSize(params.pageSize)
    if (params.page) setPage(params.page)
    if (params.query) setQuery(params.query)
  }

  function filtersChanged() {
    onFiltersChanged({
      ...pageSize ? {pageSize: pageSize.toString()} : {},
      ...page ? {page: page.toString()} : {},
      ...query ? {query: query as string} : {}
    })
  }

  useEffect(() => {
    filtersChanged()
  }, [page, pageSize])

  function getPages() {
    return Math.ceil(totalPhones / pageSize)
  }

  let timeout: ReturnType<typeof setTimeout>

  function onSearchKeyPress(ev: KeyboardEvent<HTMLDivElement>) {
    if (ev.code === 'Enter') {
      filtersChanged()
    }
    if (!query || query.length > 2) {
      clearTimeout(timeout)
      setTimeout(() => {
        filtersChanged()
      }, 1000)
    }
  }

  return (
    <Box sx={{display: 'flex',
      flexDirection: {xs: 'column', md: 'row'},
      justifyContent: 'space-between',
      alignItems: {xs: 'start', md: 'center'},
      width: '100%',
    }}>
      <Box sx={{display: 'flex', flexWrap: 'wrap', width: '100%', mr: {xs: 0, md: 15}}} flexGrow={1}>
        <Pagination
          count={getPages()}
          variant="outlined"
          color="primary"
          page={page}
          sx={{mr: 1 }}
          onChange={(ev, page) => {
            setState({page: +page})
          }}/>
        <FormControl sx={{width: 80, mr: { md: 2}}}>
          <InputLabel id="per_page">Per page</InputLabel>
          <StyledInputBar>
            <StyledSelect
              labelId="per_page"
              label="Per page"
              value={pageSize}
              onChange={(ev: SelectChangeEvent<unknown>) => {
                setState({pageSize: +(ev.target.value as string)});
              }}>
              {[3, 6, 12, 18].map(qty => {
                return <MenuItem value={qty} key={qty}>{qty}</MenuItem>
              })}
            </StyledSelect>
          </StyledInputBar>
        </FormControl>
        <Box flexGrow={1} sx={{mt: {xs: 3, sm: 0}}}>
          <StyledInputBar>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              value={query}
              onChange={(ev) => setQuery(ev.target.value)}
              onKeyPress={onSearchKeyPress}
              placeholder="Search…"
              inputProps={{'aria-label': 'search'}}
            />
          </StyledInputBar>
        </Box>
      </Box>
      <Typography
        flexGrow={1}
        sx={{textAlign: 'right', whiteSpace: 'nowrap'}}
        variant="body2">{totalPhones} teléfono{totalPhones !== 1 ? 's' : ''}</Typography>
    </Box>
  )
}
