import { FullScreenError } from '@components/full-screen-error';
import { MveList } from '@components/mve-list';
import { Page } from '@components/page';
import {
  MveImagesSortDirection,
  MveImagesSortItem,
  MveImagesSortItems,
} from '@hooks/use-data-mve-images.hook';
import { useDebounce } from '@hooks/use-debounce.hook';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styles from './mve-image-page.module.scss';

export function MveImagePage() {
  const [searchText, setSearchText] = useState<string>('');
  const debounedSearchText = useDebounce(searchText, 1000);
  const [sortBy, setSortBy] = useState<MveImagesSortItem>('name');
  const [sortDirection, setSortDirection] =
    useState<MveImagesSortDirection>('asc');

  return (
    <Page>
      <ErrorBoundary FallbackComponent={FullScreenError}>
        <div className={styles.MveListPage}>
          <div className={styles.MveListContainer}>
            <div className={styles.FilterBar}>
              <TextField
                label="Search"
                variant="outlined"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                size="small"
              />

              <div className={styles.SortContainer}>
                <FormControl>
                  <InputLabel id="sort-by-label">Sort By</InputLabel>
                  <Select
                    value={sortBy}
                    labelId="sort-by-label"
                    label="Sort By"
                    onChange={(event) =>
                      setSortBy(event.target.value as MveImagesSortItem)
                    }
                    variant="outlined"
                    size="small"
                  >
                    {MveImagesSortItems.map(({ name, item }) => (
                      <MenuItem value={item} key={item}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {sortDirection === 'desc' && (
                  <ArrowDropUpIcon
                    fontSize="large"
                    color="primary"
                    onClick={() => setSortDirection('asc')}
                  />
                )}

                {sortDirection === 'asc' && (
                  <ArrowDropDownIcon
                    fontSize="large"
                    color="primary"
                    onClick={() => setSortDirection('desc')}
                  />
                )}
              </div>
            </div>

            <MveList
              sortBy={sortBy}
              sortDirection={sortDirection}
              searchText={debounedSearchText}
            />
          </div>
        </div>
      </ErrorBoundary>
    </Page>
  );
}
