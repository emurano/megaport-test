import { useDataMveImages } from '@hooks/use-data-mve-images.hook';

export function MveList() {
  const { isLoading, isRefetching, mveImages } = useDataMveImages();

  if (isLoading) {
    return <>Loading ...</>;
  }

  return (
    <div>
      The list of MVEs {isRefetching && <>Refetching</>}

      <pre>{JSON.stringify(mveImages, null, 2)}</pre>
    </div>
  );
}
